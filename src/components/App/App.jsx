import './App.css'
import AppRoutes from "../AppRoutes/AppRoutes";
import Header from "../Header/Header";

function App() {
  return (
    <div className={'App'}>
      <div className={'page__container'}>
        <Header/>
        <AppRoutes/>
      </div>
    </div>
  );
}

export default App;
