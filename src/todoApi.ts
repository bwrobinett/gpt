import { createApi } from "@reduxjs/toolkit/query/react"
import Papa from "papaparse"

const customBaseQuery = async ({
  url,
  method,
  body,
}: {
  url: string
  method?: string
  body?: BodyInit | null
}) => {
  const response = await fetch(url, { method, body })

  if (response.ok) {
    const text = await response.text()
    return { data: text }
  } else {
    // Handle request error
    return { error: { status: response.status, data: await response.text() } }
  }
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: customBaseQuery,
  endpoints: builder => ({
    getTasks: builder.query<string[], void>({
      query: (): { url: string } => ({ url: "todoGPT.csv" }),
      transformResponse: (response: string): string[] => {
        const tasks = Papa.parse(response, { header: false }).data as string[]
        return tasks.slice(1).flat()
      },
    }),
  }),
})

export const { useGetTasksQuery } = api
