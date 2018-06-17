import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Main from './components/main'
import FullMovie from './components/fullMovie'

const App = () => (
   <Router>
    <div>
      <Route exact path="/" component={Main} />
      <Route path="/movie" component={FullMovie} />
    </div>
  </Router>
)

export default App