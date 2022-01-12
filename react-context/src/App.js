import './App.css';
import { AppProvider } from './react-context/appContext'
import Navbar from "./component/Navbar"
// import Reducer from './component/Reducer';

const App = () => {  
  return (
    <div className="App">
      <AppProvider>
        <Navbar />
      </AppProvider>
      {/* <Reducer /> */}
    </div>
  );
}

export default App;
