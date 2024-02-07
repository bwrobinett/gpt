import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import { api } from "./todoApi"

export const store = configureStore({
  reducer: {
    // Add api reducer
    [api.reducerPath]: api.reducer,
  },
  // Adding the api middleware
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
})

// Type for the dispatch function
export type AppDispatch = typeof store.dispatch
// Type for the root state
export type RootState = ReturnType<typeof store.getState>
// Type for useAppDispatch hook
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
