import './App.css'
import AppRoutes from "../AppRoutes/AppRoutes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {

  return (
    <div className={'App'}>
      <div className={'page__container'}>
        <Header/>
        <AppRoutes/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
