import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';
import Counter from './components/Counter';
import FunctionEvent from './components/FunctionEvent';
import FunctionalCounter from './components/FunctionalCounter';

function App() {
  return (
    <div className="App">
        {/* <Hello/> */}
        {/* <Counter/>      */}
      {/* <Profile name="Mduduzi" lastname="Ndlovu"/>       */}
      {/* <Message messageContent="This is one from props"/> */}
      {/* <FunctionEvent/> */}
      <FunctionalCounter/>


    </div>
  );
}

export default App;
