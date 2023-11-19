import { create } from 'zustand';

type FormState = {
    formData: Record<string, any>;
    appendField: (field: Record<string, any>) => void;
    appendToProfiles: (field: Record<string, any>) => void;
};

const useFormStore = create<FormState>((set) => ({
    formData: {
        profiles: [],
    },
    appendField: (field) => {
        set((state) => ({
            formData: {
                ...state.formData,
                profiles: [...(state.formData.profiles || [])],
                field
            },
        }));
    },
    appendToProfiles: (field) => {
        set((state) => ({
            formData: {
                ...state.formData,
                profiles: [...state.formData.profiles,field],
            },
        }));
    },
}));

export default useFormStore;




