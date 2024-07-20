import React from 'react'
import { Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Main from './layouts/Main';
import JobsPage from './pages/JobsPage';
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Main/>}>
    <Route index element={<HomePage/>}/>
    <Route path='/jobs' element={<JobsPage/>}/>
  </Route>
)
);


const App = () => {
  return (
    <RouterProvider router={router}/>
  )
  
}

export default App