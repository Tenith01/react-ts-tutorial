import './App.css';
import {Greet} from './Components/Greet'

function App() {
  return (
    <div className="App">
      <Greet name='Tenith' messageCount={12} isLoggedIn={false} />
    </div>
  );
}

export default App;
