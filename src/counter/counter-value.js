import { useSelector } from "react-redux"

const CounterValue = () => {
  const count = useSelector((state) => state.counter.value)
  const loading = useSelector((state) => state.counter.loading)

  return (
    <div>
      {loading && <div>loading...</div>}
      {!loading && <div className="counter-value">{count}</div>}
    </div>
  )
}

export default CounterValue
