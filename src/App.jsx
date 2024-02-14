import { useState } from 'react'

import './App.css'

const phrases = [
  "No",
  "Estás segura?",
  "Segurísima?",
  "SEGUUUUUURA?",
  "Andale amorcito",
  "No seas así porfi",
  "Voy a dejar de respirar hasta que me digas que sí",
  "DEJO DE RESPIRAR",
  "UNO",
  "DOS",
  "TRES",
  "AAAAAAAAAAAH",
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH",
  "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH",
  "*Muerto😠*",
]

function App() {
  const [noCount, setNoCount] = useState(0)
  const [yesPressed, setYessPressed] = useState(false)
  const yesButtonSize = noCount * 20+16

  function handleNoClick(){
    setNoCount(noCount + 1)
  }

  function getNoButtonText(){
    return phrases[Math.min(noCount, phrases.length - 1)]
  }

  
  return (
    <div className="container">
      {
        yesPressed ? (
          <>
          <img src="https://gifdb.com/images/high/peach-and-goma-cat-kisses-9uj1959adlfrj30b.gif" alt="bears kissing"/>
          <div className="text"> YEY!!! jiji tiamo</div>
          </>
        ) 
        : 
        (<>
          <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXJ2YjF6Zmx0NmtqeXN5enV2YmoxMWRnY2pta3EzZmNlMHExbXBsZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IzXiddo2twMmdmU8Lv/giphy.gif" alt="bear" />
          <div className='text'>Will you be my valentine?</div>
          <div className='button-container'>
            <button className="yes-btn" 
            style={{fontSize:yesButtonSize}} 
            onClick={() => setYessPressed(true)}>Ti</button>
            <button onClick={handleNoClick} className="no-btn">
              {getNoButtonText()}
            </button>
          </div>
        </>)
      }
    </div>
  )
}

export default App
