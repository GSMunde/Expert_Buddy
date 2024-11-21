
import { AuthProvider } from './Context/AuthContext';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';
import Footer from './Pages/Footer';


function App() {
  return (
    <div className='App'>
      <AuthProvider>
          <Navbar/>
          <AllRoutes/>
          <Footer/>
      </AuthProvider>
    </div>
  );
}

export default App;
