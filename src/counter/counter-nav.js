export const CounterNav = ({ count, setCount }) => {
  return (
    <div className="counter-nav">
      <button
        onClick={() => {
          setCount(count - 1)
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          setCount(0)
        }}
      >
        Reset
      </button>

      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Increment
      </button>
    </div>
  )
}

export default CounterNav
