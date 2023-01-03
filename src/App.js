import { useState } from 'react';
import './App.css';

function App() {

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  const date = new Date()

  const time = formatAMPM(new Date());
  const hour = parseInt(time.split(":")[0])
  const [sec, setSec] = useState(date.getSeconds());
  const min = date.getMinutes();
  

  setInterval(() => setSec(new Date().getSeconds()), 1000);
  
  const hourExtra = (hour * 30) + (min / 2);
  const minExtra = (min*6) + (sec / 10);
  
  return (
    <div className='bg-gray-600'>
      <div className='h-screen flex items-center'>
        <div className="relative mx-auto bg-gray-300 rounded-full w-80 h-80" id='container'>
          <span className='absolute top-0 bottom-0 left-0 right-0 m-auto inline-block w-3 h-3 bg-red-900 z-50 rounded-full'></span>
          <span className='absolute inline-block w-40 h-[1px] bg-red-900 secTick z-10' style={{rotate: sec * 6 + "deg"}}></span>
          <span className='absolute inline-block w-36 h-[3px] bg-white minTick' style={{rotate: minExtra + "deg"}}></span>
          <span className='absolute inline-block w-32 h-[5px] bg-white hourTick' style={{rotate: hourExtra + "deg"}}></span>
        {/* {hour}:{min}:{sec} */}
        </div>
      </div>

      {/* <footer className='fixed bottom-0 text-center w-screen'>
        Sound Effect from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=6069">Pixabay</a>
      </footer> */}
    </div>
  );
}

export default App;
