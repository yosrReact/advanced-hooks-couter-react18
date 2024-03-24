import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const increaseAsync = createAsyncThunk(
  "counters/increseAsync",
  async (/* object containing data sent from the commponent */) => {
    await delay(2000)
    throw new Error()
    return { message: "success" }
  }
)
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    loading: false,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    reset: (state) => {
      state.value = 0
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(increaseAsync.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(increaseAsync.fulfilled, (state, action) => {
        state.loading = false
        state.value++
        state.message = action.payload.message
      })
      .addCase(increaseAsync.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions

export default counterSlice.reducer
