/* eslint-disable import/no-anonymous-default-export */
const API_KEY = process.env.API_KEY;

// fetches the data from the TMDb database using API key
export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
};
