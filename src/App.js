import { useEffect, useState } from 'react';
import './App.css';
import tick1 from './assets/tick1.ogg';
import tick2 from './assets/tick2.ogg';
import gongBell from "./assets/gong-bell.ogg";
import Modal from './components/Modal/Modal';
import InputField from './components/InputField/InputField';
import Message from './components/Message/Message';

function App() {
  const [audioPlay, setAudioPlay] = useState(true);
  const [alarmModal, setAlarmModal] = useState(false);
  const [alarmTime, setAlarmTime] = useState('');
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(true);

  
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

  function formatAMPM2(date) {
    var hours = date.split(":")[0];
    var minutes = date.split(":")[1];
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ?minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime
  }

  const handleSubmit = () => {
    localStorage.setItem("time", alarmTime);
    localStorage.setItem("message", message);
  }

  const date = new Date()
  
  const time = formatAMPM(new Date());
  const hour = parseInt(time.split(":")[0])
  const [sec, setSec] = useState(date.getSeconds());
  const min = date.getMinutes();

  useEffect(() => {
    sec % 2 === 0 ? document.getElementById("audio1").play() : document.getElementById("audio2").play();
  }, [sec])

  if(sec === 0 && time === localStorage.getItem("time")) {
    document.getElementById("audio3").play();
    setShowMessage(true)
  }
  

  setInterval(() => setSec(new Date().getSeconds()), 1000);
  
  const hourExtra = (hour * 30) + (min / 2);
  const minExtra = (min*6) + (sec / 10);
  
  return (
    <div className='bg-gray-600'>
      {showMessage && <Message
        message={message}
      />}


      {alarmModal && <Modal
        title="Set Alarm"
        SetAlarmModal={setAlarmModal} 
        onSubmit={handleSubmit}
        body={<>
          <div className="grid grid-cols-2 gap-4">
            <InputField label="Time" type="time" id="one" onChange={e => setAlarmTime(formatAMPM2(e.target.value))} />
            <InputField label="Label" id="two" placeholder="Text" onChange={e => setMessage(e.target.value)} />
          </div>
        </>} 
      />}

      <div className='h-screen flex items-center'>
        <div className="relative mx-auto bg-gray-300 rounded-full w-80 h-80" id='container'>
          <span className='absolute top-0 bottom-0 left-0 right-0 m-auto inline-block w-3 h-3 bg-red-900 z-50 rounded-full'></span>
          <span className='absolute inline-block w-40 h-[1px] bg-red-900 secTick z-10' style={{rotate: sec * 6 + "deg"}}></span>
          <span className='absolute inline-block w-36 h-[3px] bg-white minTick' style={{rotate: minExtra + "deg"}}></span>
          <span className='absolute inline-block w-32 h-[5px] bg-white hourTick' style={{rotate: hourExtra + "deg"}}></span>
          <audio controls className='hidden' autoPlay muted={audioPlay} id="audio1">
            <source src={tick1} type='audio/ogg' />
          </audio>
          <audio controls className='hidden' autoPlay muted={audioPlay} id="audio2">
            <source src={tick2} type='audio/ogg' />
          </audio>
          <audio controls className="hidden" id="audio3">
            <source src={gongBell} type='audio/ogg' />
          </audio>
        </div>
      </div>

      <div className='absolute top-3 right-3'>
        <div className="flex">
          <button className='px-3 py-2 mr-4 rounded-md cursor-pointer bg-red-700 text-white' onClick={() => setAlarmModal(true)}>Set Alarm</button>
          <input type="checkbox" id="handleAudio" className='hidden' onChange={e => setAudioPlay(!e.target.checked)} />
          {audioPlay 
            ? 
            <label className='px-3 py-2 rounded-md cursor-pointer bg-green-800 text-white' htmlFor='handleAudio'>Unmute</label> 
            : 
            <label className='px-3 py-2 rounded-md cursor-pointer bg-red-700 text-white' htmlFor='handleAudio'>Mute</label>}

        </div>
      </div>
      <footer className='fixed bottom-0 text-center w-screen'>
        Sound Effect from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=6069">Pixabay</a>
      </footer>
    </div>
  );
}

export default App;
