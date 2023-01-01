import { useEffect, useState } from 'react';
import './App.css';

function App() {

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  const [secNumber, setSecNumber] = useState(0)
  const date = new Date()

  const time = formatAMPM(new Date);
  const hour = parseInt(time.split(":")[0])
  const min = parseInt(time.split(':')[1].split(" ")[0]);
  const sec = date.getSeconds()
  // const sec = new Date().getSeconds();

  console.log(sec);
  
  return (
    <div className='bg-gray-600 h-screen flex items-center'>

      <div className="relative mx-auto bg-gray-300 rounded-full w-80 h-80" id='container'>
        <div className="absolute bg-black w-[90%] h-0.5 top-0 bottom-0 left-0 right-0 m-auto border-0" id='secondBar' style={{rotate: sec*6 + "deg"}}>
          <div className="relative p-0 border-0 m-0">
            <div className="absolute bg-gray-300 w-[40%] left-0 top-[-1px] right-0 h-2.5"></div>
          </div>
        </div>
        <div className="absolute bg-black w-[80%] h-1 top-0 bottom-0 left-0 right-0 m-auto border-0" id='minBar' style={{rotate: min * 6+ "deg"}}>
          <div className="relative p-0 border-0 m-0">
            <div className="absolute bg-gray-300 w-[40%] left-0 top-[-1px] right-0 h-2.5"></div>
          </div>
        </div>
        <div className="absolute bg-black w-[70%] h-2 top-0 bottom-0 left-0 right-0 m-auto border-0" id='bar' style={{ rotate: hour*30+"deg" }} >
          <div className="relative p-0 border-0 m-0">
            <div className="absolute bg-gray-300 w-[40%] left-0 top-[-1px] right-0 h-2.5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
