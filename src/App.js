import logo from './logo.svg';
import './App.css';
import Accordian from './Components/Accordian'
import data from './data';
import './Components/accordian.css'
import { useState } from 'react';

function App() {
  const [question,setQuestion] = useState(data);
  return (
    <div className="App container">
      <div className="row">
        <div className="col-12 rounded">
          <h1 className="mb-3">Basic Accordian</h1>
          {
            question.map((param) => {
              return (
                <Accordian key={param.id} {...param}/>
              )
            })
          }
        </div>
      </div>
      <span>Developed By : irfansadiq</span>
    </div >
  );
}

export default App;
