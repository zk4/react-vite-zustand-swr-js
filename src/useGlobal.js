import create from "zustand";

const useGlobalStore = create((set) => ({
	keyword: "",
	update: (newVal) => set({ keyword: newVal }),
}));
export default useGlobalStore;
