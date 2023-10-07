import './css_reset.css';
import './App.css';
import AppHeader from "./components/AppHeader";
import GameContainer from "./components/GameContainer";
import AppFooter from "./components/AppFooter";



function App() {

  return (
    <div className="App">
        <AppHeader className="App-header"/>
        <GameContainer/>
        <AppFooter />
    </div>
  );
}

export default App;
