import './App.css'
import Accordion from './components/Accordion'
import ProductCard from './components/ProductCard'
import './Styles/Products.css'
function App() {
  return (
    <div className='product-wrapper'>
      <div className='product-filter'>
         <Accordion />
      </div>
      <div className='product-display'>
        <ProductCard />
      </div>
    </div>

  )
}

export default App
