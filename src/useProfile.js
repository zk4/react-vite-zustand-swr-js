import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default (id) => {
  console.log(id)
	const { data, error, isLoading } = useSWR(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
		fetcher
	);
	return { data, error, isLoading };
};
