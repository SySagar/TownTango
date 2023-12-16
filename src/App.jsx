import { useTheme } from '@emotion/react'
import './App.css'
import { Stack } from '@mui/material'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from './layout/RootLayout'
import {Home} from './app/index'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  }
]);

function App() {

  const theme = useTheme()

  return (
    <Stack sx={{background:theme.palette.background.default}} minHeight={'100vh'}>
    <RouterProvider router={router} />
    </Stack>
  )
}

export default App