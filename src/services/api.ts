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

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '	http://localhost:8000/api',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('access_token')
      if (token) {
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
  useLikeTweetMutation
} = api

export default api
