export const apiRoot = 'https://www.reddit.com';

export const fetchPosts = async (subreddit) => {
    const response = await fetch(`${apiRoot}${subreddit}.json`);
    const json = await response.json();
    return json.data.children.map((post) => post.data);

}

export const fetchComments = async (permalink) => {
    const response = await fetch(`${apiRoot}${permalink}.json`);
    const json = await response.json();
    return json[1].data.children.map((subreddit) => subreddit.data);
}