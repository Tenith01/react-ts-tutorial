import './App.css';
import {Greet} from './Components/Greet'
import {Person} from './Components/Person';
import { PersonList } from './Components/PersonList';

function App() {
    const personName = {
        first: 'Bruce',
        last: 'Wayne',
    }

    const nameList = [
        {
            first: 'Bruce',
            last: 'wayne',
        },
        {
            first: 'clark',
            last: 'kent',
        },
        {
            first: 'princess',
            last: 'diana',
        },
    ]

    return (
        <div className="App">
            <Greet name='Tenith' messageCount={12} isLoggedIn={false}/>
            <Person name={personName}/>
            <PersonList names={nameList}/>
        </div>
    );
}

export default App;
