import "./App.css";
import useArrayStore from "./store";
import Btn from './components/btn'
import Profile from './Profile'
import useGlobalStore from "./useGlobal";

function OtherUI(){
  const { keyword} = useGlobalStore();

	// render data
	return <div>world {keyword}!</div>;
}
function App() {
	const { arr, updateArr, updateValue } = useArrayStore();


	return (
		<div>
      <OtherUI/>
      <Profile/>
			<button onClick={() => updateArr([1, 2, 3])}>Update Array</button>
			<button onClick={() => updateValue(1, 4)}>Update Value</button>
      <Btn/>
			<ul>
				{arr.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
}
export default App;
