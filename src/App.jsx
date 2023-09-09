import './App.css'
import CardContainer from './components/CardContainer'
import SearchBar from './components/SearchBar'
import InputTextState from './context/InputTextState'

function App() {

  return (
    <>
      <InputTextState>
        <h1 className="heading">Sample React App</h1>
        <p className="subtitle">This is a sample react app which gets data from the <a href="https://punkapi.com">Punk API</a></p>
        <SearchBar/>
        <CardContainer/>
      </InputTextState>
    </>
  )
}

export default App
