import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0)
    const [time, setTime] = useState(0)

    useEffect(() => {
        document.title = count
    }, [count])

    useEffect(() => {
        console.log('creating timer')
        const interval = setInterval(() => {
            console.log('interval executed')
            setTime(time => time + 1)
        }, 1000)
        return () => {
            console.log('cleaning up timer')
            clearInterval(interval)
        }
    }, [])

  return (
    <div>
      <button onClick={
        () => setCount(count => count + 1)
      }>
        Increment Count ({count})
      </button>
    </div>
  )
}

export default UseEffectCounter
