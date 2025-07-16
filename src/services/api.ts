import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/',
    prepareHeaders: (headers, { endpoint }) => {
      const token = localStorage.getItem('access_token')
      if (token && endpoint !== 'register') {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  tagTypes: ['Tweets', 'Users'],
  endpoints: () => ({})
})

export default api
