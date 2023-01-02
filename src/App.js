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
  const date = new Date()

  const time = formatAMPM(new Date);
  const hour = parseInt(time.split(":")[0])
  // const min = parseInt(time.split(':')[1].split(" ")[0]);
  const [sec, setSec] = useState(date.getSeconds());
  const [min, setMin] = useState(date.getMinutes());
  

  setInterval(() => setSec(new Date().getSeconds() + 1), 1000);
  setInterval(() => setMin(new Date().getMinutes()), 60000)

  // useEffect(() => {
  //   sec === 60 && setMin(min + 1);
  // }, [sec])
  
  const hourExtra = (hour * 5 / 360) * 30;
  const [minutes, setMinutes] = useState(0)

  /**
   * 
   * 
   * 
   * 
   * */ 


  // console.log(sec * 6);

  // console.log(hourExtra);

  const test = min * 6 + (sec * (6/360))

  // useEffect(() => {
  //   setMin(test)
  // }, [test])
  
  return (
    <div className='bg-gray-600 h-screen flex items-center'>
      <div className="relative mx-auto bg-gray-300 rounded-full w-80 h-80" id='container'>
        <span className='absolute top-0 bottom-0 left-0 right-0 m-auto inline-block w-3 h-3 bg-black rounded-full'></span>
        <span className='absolute inline-block w-40 h-[5px] bg-black tick' style={{rotate: sec * 6 + "deg"}}></span>
        <span className='absolute inline-block w-40 h-[5px] bg-black tick' style={{rotate: min * 6 + ((sec * 6) / 360) + "deg"}}></span>
        <span className='absolute inline-block w-40 h-[5px] bg-black tick' style={{rotate: (hour * 30) + "deg"}}></span>
      </div>
    </div>
  );
}

export default App;
