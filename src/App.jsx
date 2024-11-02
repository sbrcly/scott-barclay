import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Root from "./components/Root"
import ConnectPage from "./pages/ConnectPage"
import ErrorPage from "./pages/ErrorPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/connect", element: <ConnectPage /> }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
