
import './App.css';
import States from './Components/States';


function App() {
  return (
    <div className="App">
     <States name={"kerala"} language={"Hindi"}/>
     <States name={"Tamilnadu"} language={"Tamil"}/>
     <States name={"Karnataka"}/>

    </div>
  );
}

export default App;
