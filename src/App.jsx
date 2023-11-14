import Carlist from "./components/Carlist"
import { Container } from "@mui/material"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {

  return (
    <Container maxWidth="m">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Car Shops</Typography>
        </Toolbar>
      </AppBar>
      <Carlist />
    </Container>
  )
}

export default App
