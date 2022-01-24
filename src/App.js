import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import './app.css'

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="wrapper">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
