import { useState } from 'react'
import Placar from './componnet/placar'
import Pontos from './componnet/pontos'

function App() {

  const [home, setHome] = useState(0);
  const [guest, setGuest] = useState(0);

  const getHome = () => {
    return home;
  }

  const attHome = () => {
    setHome(home + 1)
  }

  const getGuest = () => {
    return guest;
  }

  const attGuest = () => {
    setGuest(guest + 1)
  }
 
  const setBlank = () => {
    setGuest(0)
    setHome(0)
  }

  return (
    <div className="App">
        <div className="center">
            <Placar getHome={getHome} getGuest={getGuest} setBlank={setBlank}/>
            <Pontos  attHome={attHome} attGuest={attGuest} />
        </div>
    </div>
  )
}

export default App
