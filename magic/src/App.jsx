import './App.css'
import { MagicCardsContextProvider } from './context/context'
import Cards from './components/Cards/Cards'

function App() {
  
  return (
    <div className="App">
      <MagicCardsContextProvider>
        <Cards />
      </MagicCardsContextProvider>
    </div>
  )
}

export default App
