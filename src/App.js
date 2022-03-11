import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard personName= {"Doe, Jane"} Age= {"45"} haircolor={"Black"}></PersonCard>
      <PersonCard personName= {"Smith, John"} Age= {"88"} haircolor={"Brown"}></PersonCard>
      <PersonCard personName= {"Fillmore, Millard"} Age= {"50"} haircolor={"Brown"}></PersonCard>
      <PersonCard personName= {"Smith, Maria"} Age= {"62"} haircolor={"Brown"}></PersonCard>
    </div>
  );
}

export default App;
