export async function GET({}) {
    let username = "deniznobody";

    const res = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${username}&api_key=${process.env.api}&format=json&nowplaying=true&limit=1`);

    const response = await res.json()
    const tracks = response.recenttracks;

    const t = JSON.stringify(tracks, 0 ,3)
    
    return new Response(t)
}

