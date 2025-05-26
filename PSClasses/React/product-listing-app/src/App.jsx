import './App.css'
import Accordion from './components/Accordion'
import Products from './components/Products'
import './Styles/Products.css'
function App() {
  return (
    <div className='product-wrapper'>
      <div className='product-filter'>
         <Accordion />
      </div>
      <div className='product-display'>
        <Products />
      </div>
    </div>

  )
}

export default App
