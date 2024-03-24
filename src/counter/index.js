import { useState } from "react"

//uses useSelector hook
import CounterVal from "./counter-value"
//uses useDispatch hook
import CounterNav from "./counter-nav"

import "./counter.css"

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <section className="counter">
      <h1>Counter</h1>
      <CounterVal count={count} />
      <CounterNav count={count} setCount={setCount} />
    </section>
  )
}

export default Counter
