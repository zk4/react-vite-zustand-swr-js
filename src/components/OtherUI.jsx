
import useGlobalStore from "../useGlobal";
export default function OtherUI(){
  const { keyword} = useGlobalStore();

	// render data
	return <div>world {keyword}!</div>;
}
