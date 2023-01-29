import './App.css';
import { Heading } from './Components/Heading';
import { Oscar } from './Components/Oscar';
import { Status } from './Components/Status';
import { Button } from './Components/Button';
import { Input } from './Components/Input';
import * as events from "events";

function App() {
    return (
        <div className="App">
            <Button handleClick={() => {
                console.log('Button clicked')
            }}
            />

            <Input value='' handleChange ={(event)=>console.log(event)}/>
        </div>
    );
}

export default App;
