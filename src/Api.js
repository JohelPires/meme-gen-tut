import React from 'react'


function Api() {

    const [swData, setSwData] = React.useState({})
    const [count, setCount] = React.useState(1)

    function handleClick() {
      setCount(prevCount => (prevCount + 1))
    }


    React.useEffect(() => {
      fetch(`https://swapi.dev/api/people/${count}`)
          .then(response => response.json())
          .then(data => setSwData(data))
    }, [count])

  return (
    <div className='api'>
        <h1>Count: {count}</h1>
        <button onClick={handleClick}>Get next character</button>
        <pre>{JSON.stringify(swData, null, 2)}</pre>
    </div>
  )
}

export default Api