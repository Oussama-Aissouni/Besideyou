import './App.css';
import SideMenu from './components/Sidemenu/sideMenu';
import Header from "./components/Header/Header";
import Students from "./components/Students/students";
import Informations from "./components/Infos/Infos";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <SideMenu />
      <Header />
      <Students />
      <Informations/>
    </div>
  );
}

export default App;
