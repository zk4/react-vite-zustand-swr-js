import useGlobalStore from "./useGlobal";
import useProfile from './useProfile'

export default function Profile() {
  const { keyword, update } = useGlobalStore();
	const { data, error, isLoading } = useProfile(keyword);
  

	if (error) return <div>failed to load</div>;
	if (isLoading) return <div>loading...</div>;

	// render data
  return <div>
    <input type="text" onChange={e=>[
      update(e.target.value)
    ]}/>
    hello {data.title}!
    </div>;
}
