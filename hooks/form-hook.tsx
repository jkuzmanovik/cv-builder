import { create } from 'zustand';

type FormState = {
    formData: Record<string, any>;
    appendField: (field: Record<string, any>) => void;
};

const useFormStore = create<FormState>((set) => ({
    formData: {},
    appendField: (field) => {
        set((state) => ({
            formData: {
                ...state.formData,
                ...field,
            },
        }));
    },
}));

export default useFormStore;




