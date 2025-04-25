import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type UserPayload = {
  username: string
  password: string
}

type RegisterResponse = {
  id: number
  username: string
}

type TokenResponse = {
  access: string
}

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

export type UserResponse = {
  id: number
  username: string
  is_following: boolean
  follow_id?: number
}

type FollowPayload = {
  following: number
}

type FollowResponse = {
  id: number
  follower: number
  following: number
}

type CommentResponse = {
  id: number
  content: string
  tweet: number
  user: number
  username: string
  created_at: string
}

type CommentPayload = {
  content: string
}
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://vitorbri.pythonanywhere.com/api/',
    prepareHeaders: (headers, { endpoint }) => {
      const token = localStorage.getItem('access_token')
      if (token && endpoint !== 'register') {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  tagTypes: ['Tweets', 'Users'],
  endpoints: (builder) => ({
    register: builder.mutation<void, UserPayload>({
      query: (body) => ({
        url: 'users/',
        method: 'POST',
        body
      })
    }),
    login: builder.mutation<TokenResponse, UserPayload>({
      query: (body) => ({
        url: 'token/',
        method: 'POST',
        body
      })
    }),

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

    toggleLike: builder.mutation<TweetResponse, number>({
      query: (id) => ({
        url: `tweets/${id}/`,
        method: 'PATCH'
      })
    }),
    getCurrentUser: builder.query<RegisterResponse, void>({
      query: () => 'users/me/'
    }),
    updateUser: builder.mutation<RegisterResponse, Partial<UserPayload>>({
      query: (body) => ({
        url: 'users/me/',
        method: 'PATCH',
        body
      }),
      invalidatesTags: ['Users']
    }),
    getAllUsers: builder.query<UserResponse[], void>({
      query: () => 'users/',
      providesTags: ['Users']
    }),
    followUser: builder.mutation<FollowResponse, FollowPayload>({
      query: (body) => ({
        url: 'follows/',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Users', 'Tweets']
    }),
    unfollowUser: builder.mutation<void, number>({
      query: (followId) => ({
        url: `follows/${followId}/`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Users', 'Tweets']
    }),
    likeTweet: builder.mutation<{ status: string }, number>({
      query: (id) => ({
        url: `tweets/${id}/like/`,
        method: 'POST'
      }),
      invalidatesTags: ['Tweets']
    }),
    getComments: builder.query<CommentResponse[], number>({
      query: (tweetId) => `tweets/${tweetId}/comments/`,
      providesTags: (result, error, tweetId) => [
        { type: 'Tweets', id: tweetId }
      ]
    }),
    createComment: builder.mutation<
      CommentResponse,
      { tweetId: number; body: CommentPayload }
    >({
      query: ({ tweetId, body }) => ({
        url: `tweets/${tweetId}/comments/`,
        method: 'POST',
        body
      }),
      invalidatesTags: (result, error, { tweetId }) => [
        { type: 'Tweets', id: tweetId }
      ]
    })
  })
})

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetTweetsQuery,
  useGetFollowingTweetsQuery,
  useCreateTweetMutation,
  useToggleLikeMutation,
  useGetCurrentUserQuery,
  useFollowUserMutation,
  useGetAllUsersQuery,
  useUnfollowUserMutation,
  useLazyGetCurrentUserQuery,
  useLikeTweetMutation,
  useGetTweetQuery,
  useCreateCommentMutation,
  useGetCommentsQuery,
  useUpdateUserMutation
} = api

export default api
