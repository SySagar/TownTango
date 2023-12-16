import { useTheme } from '@emotion/react'
import './App.css'
import { Button, Stack } from '@mui/material'
import { Typography } from '@mui/material'

function App() {

  const theme = useTheme()

  return (
    <Stack sx={{background:theme.palette.background.default}} minHeight={'100vh'}>
    <Typography>
    hello world
    </Typography>
    <Button variant='contained'>heelo</Button>
    </Stack>
  )
}

export default App