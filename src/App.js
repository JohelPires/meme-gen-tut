
import './App.scss';
import NavBar from './NavBar'
import MemeGen from './MemeGen'
import Count from './Count';
import { useState, useEffect } from 'react';
import memesData from './memesData'
import Boxes from './Boxes';
import boxesData from './boxes';
import Box from './Box';
import Messages from './Messages';
import Login from './Login';
import Api from './Api';
import WindowTrackerTutorial from './WindowTrackerTutorial'

function App() {

  // const [count, setCount] = useState(0)

  // function add() {
  //   setCount((prev) => prev + 1)
  // }
  // function sub() {
  //   setCount((prev) => prev - 1)
  // }

  const [allMemeData, setAllMemeData] = useState('')

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(data => setAllMemeData(data.data.memes))

  }, [])


  const [meme, setMeme] = useState({
      topText: '',
      bottomText: '',
      // memeUrl: 'https://i.imgflip.com/21tqf4.jpg',
      memeUrl: ''
  })
  
  function handleClick() {
      const n = Math.floor(Math.random()*allMemeData.length)
      console.clear()
      const url = allMemeData[n].url
      setMeme(prevMeme => ({
          ...prevMeme,
          memeUrl: url
      }))
      // console.log(meme.memeUrl)
  }    

  const [boxes, setBoxes] = useState(boxesData)

  const darkBoxStyle = {
    backgroundColor: 'green'
  }
  const lightBoxStyle = {
    backgroundColor: 'lightgreen'
  }


  // function toggleOnState(id) {
  //   setBoxes(prevBoxes => {
  //     return prevBoxes.map(box => {
  //       return box.id === id ? {...box, on: !box.on} : box
  //     })
  //   })
  // }


  function toggleOnState(id) {
    setBoxes(prevBoxes => {
      return prevBoxes.map(box => {
        return box.id === id ? {...box, on: !box.on} : box
      })
    })
    
  }

  // function toggleOnState(id) {

  //   const idx = boxes.findIndex(obj => obj.id == id)
  //   const tempBoxes = [...boxes]
  //   tempBoxes[idx]={
  //     'id': id,
  //     'on': !tempBoxes[idx]['on']
  //   }

  //   setBoxes(tempBoxes)

  // }

  // function toggleOnState(id) {

  //   setBoxes(prevBoxes => {
  //     const newBoxes = []
  //     for (let i = 0; i < prevBoxes.length; i++) {
  //       const currentBox = prevBoxes[i];
  //         if (currentBox.id == id){
  //           const updateBox = {
  //             ...currentBox,
  //             on: !currentBox.on
  //           }
  //           newBoxes.push(updateBox)
  //         } else {
  //           newBoxes.push(currentBox)
  //         }
        
  //     }
  //     return newBoxes
  //   })

  // }
  

  const boxesToRender = boxes.map(b => (
    <Box 
      key={b.id}
      id={b.id}
      on={b.on}
      toggleOnState={toggleOnState}
    />
  ))


  // console.log(meme)

  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Messages />
      <Boxes 
        boxesToRender={boxesToRender}
      /> */}
      {/* <NavBar /> */}

      {/* <div className="count">
      <button onClick={add} className="bt">+</button>
      <Count 
        number={count}
      />
      <button onClick={sub} className="bt">-</button>
      </div> */}


      {/* <MemeGen 
        meme={meme}
        handleClick={handleClick}
        setMeme={setMeme}
      /> */}

      <WindowTrackerTutorial />

      {/* <Api /> */}

    </div>
  );
}

export default App;
