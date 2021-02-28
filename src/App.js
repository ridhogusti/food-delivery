import './App.css';

function App() {
  return (
    <div className="App">
      <div className="flex-auto flex space-x-3">
        <button className="w-3/12 flex items-center justify-center rounded-md bg-blue-800 text-white" type="submit">Buy now</button>
        <button className="w-3/12 flex items-center justify-center rounded-md border border-gray-300" type="button">Add to bag</button>
      </div>
    </div>
  );
}

export default App;
