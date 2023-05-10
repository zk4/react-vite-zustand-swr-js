
import useGlobalStore from "./useGlobal";
function OtherUI(){
  const { keyword} = useGlobalStore();

	// render data
	return <div>world {keyword}!</div>;
}
