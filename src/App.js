import './App.css';

function App() {
  return (
    <>
      <div className='w-100 px-3 relative'>
        <div className='h-[2px] w-100 bg-black my-3'></div>
        <span className='inline-block w-[20px] h-[20px] bg-[red] absolute top-[-9px]' id="second"></span>
      </div>
      <br /><br /><br />
      <div className='w-100 px-3 relative'>
        <div className='h-[2px] w-100 bg-black my-3'></div>
        <span className='inline-block w-[20px] h-[20px] bg-[red] absolute top-[-9px]' id="min"></span>
      </div>
    </>
  );
}

export default App;
