import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TodoProvider } from './components/Todo/TodoContext.jsx'
import { ProductProvider } from './components/productListingApp/ProductContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <TodoProvider>
          <App />
    </TodoProvider>  */}
      <ProductProvider>
        <App />
  </ProductProvider>
  </StrictMode>,
)
