import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import ProtectedRoute from './routes/ProtectedRoute'

import { Suspense, lazy } from 'react'
const ProductDetails = lazy(() => import('./pages/ProductDetails'))
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Orders = lazy(() => import('./pages/admin/Orders'));
const ManageProducts = lazy(() => import('./pages/admin/ManageProducts'));
const App = () => {
  const isAdmin = true;
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading..............</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/admin' element={
            <ProtectedRoute isAllowed={isAdmin}>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<ManageProducts />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  )
}

export default App
