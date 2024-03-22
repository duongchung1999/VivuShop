import logo from './logo.svg';
import './App.css';
import './assets/css/base.css'
import './assets/css/main.css'
import './assets/css/grid.css'
import './assets/css/responsive.css'
// import 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'
// import 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'
import './assets/fonts/fontawesome-free-5.15.4-web/css/all.min.css'

import HeaderSearch from './Component/Header/HeaderSearch';
import HeaderNavbar from './Component/Header/HeaderNavbar';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        
      </header> */}
      <HeaderSearch/>
      <HeaderNavbar/>
    </div>
  );
}

export default App;
