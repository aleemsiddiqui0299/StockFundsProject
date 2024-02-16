import './App.css';
import CompanyList from './components/companyList/CompanyList';
import StockList from './components/stockList/StockList';

function App() {
  return (
    <div className="App">
      <h1>List of All Stocks and Companies</h1>
    <StockList />
    <h1>Companies List</h1>
    <CompanyList />
    </div>
  )
}

export default App;
