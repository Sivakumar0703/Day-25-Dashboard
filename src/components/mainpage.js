
//import Navbar from './components/navbar';
//import SearchBar from './components/searchbar';
//import ButtonPage from './components/buttonPage';
//import Footer from './components/footer';
//import Dashboard from './components/dashboard';
//import Color from './components/colors';
//import Login from './components/login';
//import Tables from './components/tables';
//import Header from './components/header';


//import ButtonPage from './buttonPage';
//import Color from './colors';
//import Login from './login';
//import Tables from './tables';
//import Dashboard from './dashboard';



import Header from './header';
import Footer from './footer';
import SearchBar from './searchbar';
import Navbar from './navbar'






export default function MainPage({children}){

    return(
  
  
      <div className='container'>
  
        <div className='row'>
           <div className='col-lg-12 header'>
               <Header />
           </div>
        </div>
  
        <div className='row'>
        
            <div className='nav-area col-lg-2 navbar'>
               <Navbar />
            </div>
  
            <div className='content-area col-lg-10 content row'>
              <SearchBar />
              <>{children}</>
              <Footer />
            </div>
            
        </div>
  
  
  
      </div>
      
      );}