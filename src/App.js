import './App.css';

function App() {
  return (
    <div className='bg-gray-600 h-screen flex items-center'>
      <div className="relative mx-auto bg-gray-300 rounded-full w-80 h-80" id='container'>
        <div className="absolute bg-black w-[90%] h-0.5 top-0 bottom-0 left-0 right-0 m-auto border-0" id='bar'>
          <div className="relative p-0 border-0 m-0">
            <div className="absolute bg-gray-300 w-[40%] left-0 top-[-1px] right-0 h-2.5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
