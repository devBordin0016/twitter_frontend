import api from './api'

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

const commentApi = api.injectEndpoints({
  endpoints: (builder) => ({
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
  }),
  overrideExisting: false
})

export const { useGetCommentsQuery, useCreateCommentMutation } = commentApi
