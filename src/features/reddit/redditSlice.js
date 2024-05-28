import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchPosts, fetchComments } from "../../api/reddit_api";

const initialState = {
    posts: [],
    error: false,
    isLoading: false,
    searchQuery: '',
    chosenSubreddit: '/r/LiverpoolFC/'
};

const slice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
        },
        startGetPosts(state) {
            state.isLoading = true;
            state.error = false;
        },
        getPostsSuccess(state, action) {
            state.isLoading = false;
            state.posts = action.payload;
        },
        getPostsFailed(state) {
            state.error = true;
            state.isLoading = false;
        },
        setSearchQuery(state, action) {
            state.searchQuery = action.payload;
        },
        setChosenSubreddit(state, action) {
            state.chosenSubreddit = action.payload;
            state.searchQuery = '';
        },
        startGetComments(state, action) {
            state.posts[action.payload].isLoadingComments = true;
            state.posts[action.payload].error = false;
        },
        getCommentsSuccess(state, action) {
            state.posts[action.payload.index].isLoadingComments = false;
            state.posts[action.payload.index].comments = action.payload.comments;
        },
        getCommentsFailed(state, action) {
            state.posts[action.payload].isLoadingComments = false;
            state.posts[action.payload].error = true;
        }
    }
});

export const {
    setPosts,
    startGetPosts,
    getPostsSuccess,
    getPostsFailed,
    setSearchQuery,
    setChosenSubreddit,
    startGetComments,
    getCommentsSuccess,
    getCommentsFailed
} = slice.actions;

export default slice.reducer;

export const reduxFetchPosts = (subreddit) => async (dispatch) => {
    try {
        dispatch(startGetPosts());
        const posts = await fetchPosts(subreddit);

        const postWithMetadata = posts.map((post) => ({
            ...post,
            comments: [],
            loadingComment: false,
            errorComments: false
        }));
        dispatch(getPostsSuccess(postWithMetadata));

    } catch(error) {
        dispatch(getPostsFailed());
    }
}

const selectPosts = (state) => state.reddit.posts;
const selectSearchQuery = (state) => state.reddit.searchQuery;

export const selectChosenSubreddit = (state) => state.reddit.chosenSubreddit;

export const selectFilteredPosts = createSelector(
    [selectPosts, selectSearchQuery],
    (posts, searchQuery) => {
        if (searchQuery !== '') {
            return posts.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
            
        }

    return posts;

    }
)