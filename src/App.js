import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'


import Home from './components/Home/'

 import Dashboard from './components/Dashboard';

import CreateUser from './components/Create/index';

import NotFound from './components/NotFound';

const App=()=>(
  <Router>
    <Routes>
    <Route path="/" element={<Home/>} exact />
    <Route path="/dashboard" element={<Dashboard/>} exact />
    <Route path="/createUser" element={<CreateUser/>} exact />
    <Route  element={<NotFound />} />
    </Routes>
  </Router>
)


export default App;
