import { useDispatch } from "react-redux"
import {
  decrement,
  increment,
  reset,
} from "../redux/features/counter/counterSlice"

export const CounterNav = () => {
  const dispatch = useDispatch()
  return (
    <div className="counter-nav">
      <button
        onClick={() => {
          dispatch(decrement())
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          dispatch(reset())
        }}
      >
        Reset
      </button>

      <button
        onClick={() => {
          dispatch(increment())
        }}
      >
        Increment
      </button>
    </div>
  )
}

export default CounterNav
