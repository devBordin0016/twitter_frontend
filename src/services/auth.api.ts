import api from './api'

type UserPayload = {
  username: string
  password: string
}

type TokenResponse = {
  access: string
}

type RegisterResponse = {
  id: number
  username: string
}

const authApi = api.injectEndpoints({
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
    })
  }),
  overrideExisting: false
})

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetCurrentUserQuery,
  useLazyGetCurrentUserQuery,
  useUpdateUserMutation
} = authApi
