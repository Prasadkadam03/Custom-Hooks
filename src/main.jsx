import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CustomHook from './CustomHook.jsx'
import Todos from './todos.jsx'
import CheckOnline from './IsOnline.jsx'
import MousePointer from './MousePointer.jsx'
import Interval from './Interval.jsx'
import SearchBar from './Debounce.jsx'

createRoot(document.getElementById('root')).render(
  //<CustomHook />
  //<App/>
  //<Todos/>
  //<CheckOnline/>
  //<MousePointer/>
  //<Interval/>
  <SearchBar/>
)
