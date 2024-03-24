import { useSelector } from "react-redux"

const CounterValue = () => {
  const count = useSelector((state) => state.counter.value)
  return <div className="counter-value">{count}</div>
}

export default CounterValue
