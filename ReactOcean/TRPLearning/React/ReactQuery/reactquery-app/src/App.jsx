import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MainLayout from './components/Layout/MainLayout'
import Home from './pages/Home'
import FetchOld from './pages/FetchOld'
import FetchRQ from './pages/FetchRQ'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import FetchIndv from './components/UI/FetchIndv'
import { InfiniteScroll } from './pages/InfiniteScroll'


const queryClient = new QueryClient()
const router = createBrowserRouter([
{
  path: '/',
  element: <MainLayout />,
  children:[
    {
      path: '/',
      element: <Home />
    },
     {
      path: '/trad',
      element: <FetchOld />
    },
     {
      path: '/rq',
      element: <FetchRQ />
    },
         {
      path: '/rq/:id',
      element: <FetchIndv />
    },
    {
        path: "/infinite",
        element: <InfiniteScroll />,
      },
  ]

}
])
function App() {
 return (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools />
    <RouterProvider router={router}></RouterProvider>
  </QueryClientProvider>

 ) 
}

export default App
