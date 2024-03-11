
import './App.css'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import TodoList from './components/TodoList'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function App() {
  return (
    <>

      <LocalizationProvider dateAdapter={AdapterDayjs}>

        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">My Todos</Typography>
          </Toolbar>
        </AppBar>
        <TodoList />

      </LocalizationProvider>
      
    </>
  )
}

export default App
