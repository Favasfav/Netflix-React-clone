import NavBar from "./components/NavBar/NavBar";
import "./App.css"
import Banner from "./components/Banner/Banner";
import Rowpost from "./components/Rowpost/Rowpost";
import {Orginals,Action,Horror,Documentaries} from './url'

function App(props) {
  return (
    <div className="App" style={{ backgroundColor: '#111' }}>
      <NavBar/>
      <Banner/>
      <Rowpost title="Netflix Orginals" urls={Orginals}/>
      <Rowpost title="Action" isSmall urls={Action}/>
      <Rowpost title="Horror" isSmall urls={Horror}/>
      <Rowpost title="Documentaries" isSmall urls={Documentaries}/>

      
    </div>
  );
}

export default App;
