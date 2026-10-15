import { createApi } from "@reduxjs/toolkit/query/react"

// The task file is a Markdown-style list, despite its .csv extension.
// A comma is part of a prompt, not a separator between prompts.
export function parseTasks(response: string): string[] {
  return response.split(/\r?\n/).filter(line => line.startsWith("* "))
}

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
    return { error: { status: response.status, data: await response.text() } }
  }
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: customBaseQuery,
  endpoints: builder => ({
    getTasks: builder.query<string[], void>({
      query: (): { url: string } => ({ url: "todoGPT.csv" }),
      transformResponse: parseTasks,
    }),
  }),
})

export const { useGetTasksQuery } = api
