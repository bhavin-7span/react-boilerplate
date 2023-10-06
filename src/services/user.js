import { api } from './api'

const userEndpoint = '/users'

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => userEndpoint,
      transformResponse: (response) => response,
      providesTags: ['User']
    }),
  })
})

export const {
useGetUsersQuery
} = userApi
