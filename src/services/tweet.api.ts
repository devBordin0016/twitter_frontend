import api from './api'

type TweetResponse = {
  id: number
  user: number
  username: string
  content: string
  created_at: string
  likes_count: number
  comments_count: number
  is_liked: boolean
}

type TweetPayload = {
  content: string
}

const tweetApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTweets: builder.query<TweetResponse[], void>({
      query: () => 'tweets/',
      providesTags: ['Tweets']
    }),
    getTweet: builder.query<TweetResponse, number>({
      query: (id) => `tweets/${id}/`,
      providesTags: ['Tweets']
    }),
    getFollowingTweets: builder.query<TweetResponse[], void>({
      query: () => 'tweets/following/',
      providesTags: ['Tweets']
    }),
    createTweet: builder.mutation<TweetResponse, TweetPayload>({
      query: (body) => ({
        url: 'tweets/',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Tweets']
    }),
    likeTweet: builder.mutation<{ status: string }, number>({
      query: (id) => ({
        url: `tweets/${id}/like/`,
        method: 'POST'
      }),
      invalidatesTags: ['Tweets']
    })
  }),
  overrideExisting: false
})

export const {
  useGetTweetsQuery,
  useGetTweetQuery,
  useGetFollowingTweetsQuery,
  useCreateTweetMutation,
  useLikeTweetMutation
} = tweetApi
