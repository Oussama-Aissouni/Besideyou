import './App.css';
import SideMenu from './components/Sidemenu/sideMenu';
import Header from "./components/Header/Header";
import Students from "./components/Students/students";
import Informations from "./components/Infos/Infos";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <SideMenu className="sidemenu" />
      <Header className="header" /> */}
     {/* <Students className="students" /> */}
      <Informations className="infos"/>  
    </div>
  );
}
export default App;
