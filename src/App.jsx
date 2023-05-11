import "./App.css";
import useArrayStore from "./store";
import Btn from "./components/btn";
import Profile from "./components/Profile";
import OtherUI from "./components/OtherUI";

function App() {
  const { arr, updateArr, updateValue } = useArrayStore();

  return (
    <div>
      <OtherUI />
      <Profile />
      <button onClick={() => updateArr([1, 2, 3])}>Update Array</button>
      <button onClick={() => updateValue(1, 4)}>Update Value</button>
      <Btn />
      <ul>
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
