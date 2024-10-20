import React, {useState, useEffect} from 'react'
import UseEffectCounter from './UseEffectCounter'

function UseEffectCounterContainer() {
    const [ display, setDisplay] = useState(true)

  return (
    <div>
        <button onClick={
            setDisplay(() => !display) 
        }>
            Toggle Counter
        </button>
      {display && <UseEffectCounter />}
    </div>
  )
}

export default UseEffectCounterContainer
