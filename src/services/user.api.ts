import api from './api'

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

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
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
    })
  }),
  overrideExisting: false
})

export const {
  useGetAllUsersQuery,
  useFollowUserMutation,
  useUnfollowUserMutation
} = userApi
