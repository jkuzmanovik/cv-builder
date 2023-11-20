import { create } from 'zustand';

type FormStore = {
    json: Record<string, any>;
    addField: (key: string, value: any) => void;
};

const useFormStore = create<FormStore>((set) => ({
    json: {},
    addField: (key, value) => {
        set((state) => ({
            json: {
                ...state.json,
                [key]: value,
            },
        }));
    },
}));


export default useFormStore;




