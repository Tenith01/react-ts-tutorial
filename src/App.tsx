import './App.css';
import { Heading } from './Components/Heading';
import { Oscar } from './Components/Oscar';
import { Status } from './Components/Status';

function App() {
    return (
        <div className="App">
            <Status status='loading'/>
            <Heading>placeholder text</Heading>
            <Oscar>
                <Heading>Oscar goes to leonardo dicapario!</Heading>
            </Oscar>
        </div>
    );
}

export default App;
