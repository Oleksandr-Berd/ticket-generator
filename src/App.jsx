import * as SC from "./AppStyled"

import './App.css'
import Header from "./layout/Header/Header"
import SharedLayout from "./layout/SharedLayout/SharedLayout"

function App() {

  return (
    <SC.AppStyled>
     <Header/>
     <SharedLayout/>
    </SC.AppStyled>
  )
}

export default App
