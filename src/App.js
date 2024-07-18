import React,{useState} from 'react'
import Dashboard from './components/Dashboard'
import StockContext from "./context/StockContext";

const App = () => {

  const [stockSymbol, setStockSymbol] = useState("FB");
  return (
    <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
    <Dashboard />
  </StockContext.Provider>
  )
}

export default App