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
  const min = date.getMinutes();
  

  setInterval(() => setSec(new Date().getSeconds()), 1000);
  // useEffect(() => {
    // setInterval(() => console.log(new Date().getMinutes()), 60000)
  // }, [sec])

  // console.log("object");
  // const [minutes, setMinutes] = useState(0);
  // useEffect(() => {
  //   sec === 60 && setMin(min + 1);
  // }, [sec])
  
  const hourExtra = (hour * 30) + (min / 3);
  // console.log(time.split(":")[1].split(" ")[0]);
  // console.log(min * 6);

  console.log((hour * 30) + (min / 3));

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
        <span className='absolute top-0 bottom-0 left-0 right-0 m-auto inline-block w-3 h-3 bg-red-900 z-50 rounded-full'></span>
        <span className='absolute inline-block w-40 h-[1px] bg-red-900 secTick' style={{rotate: sec * 6 + "deg"}}></span>
        <span className='absolute inline-block w-36 h-[3px] bg-black minTick' style={{rotate: min * 6 + "deg"}}></span>
        <span className='absolute inline-block w-32 h-[5px] bg-black hourTick' style={{rotate: hourExtra + "deg"}}></span>
      </div>
    </div>
  );
}

export default App;
