import { RouterProvider } from 'react-router-dom'
import './App.scss'
import router from './Config/Routes'

import './Config/i18n/i18n'

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
