export const load = async ({ fetch, params }: any) => {

    const res = await fetch("/api/posts");
    
    const body = await res.json()

    const posts = body.body.posts
    
    return { posts: posts }

};

