import './App.css';
import {Route,HashRouter as Router,Routes} from 'react-router-dom';
import './assets/scss/style.scss';
import Navbar from'./components/Navbar'
import Homepage from './components/Homepage'
import FooterOne from './common/Footer';
function App() {
  return (
   <main className='page-wrapper' >
    {/* <Navbar btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent"/> */}

    <Router><Routes>
  <Route exact path='/' element={<Homepage/>} />
</Routes></Router>

   </main>
  );
}

export default App;
