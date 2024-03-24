import { useDispatch } from "react-redux"
import {
  decrement,
  increment,
  reset,
  incrementByAmount,
} from "../redux/features/counter/counterSlice"

const VALUE = 5
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
      <button
        onClick={() => {
          dispatch(incrementByAmount(VALUE))
        }}
      >
        Increment with amount
      </button>
    </div>
  )
}

export default CounterNav
