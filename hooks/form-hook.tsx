import { create } from 'zustand';
type FormState = {
    formData: {
        basics?: {};
        location?: {};
        profiles?: [];
        work?: [];
        volunteer?: [];
        education?: [];
        awards?: [];
        certificates?: [];
        publications?: [];
        skills?: [];
        languages?: [];
        interests?: [];
        references?: [];
        projects?: [];
        coverLetter?: string;
    }
}
const useFormStore = create<FormState>((set) => ({
    formData: {
        basics: {},
        location: {},
        profiles: [],
        work: [],
        volunteer: [],
        education: [],
        awards: [],
        certificates: [],
        publications: [],
        skills: [],
        languages: [],
        interests: [],
        references: [],
        projects: [],
        coverLetter: "",
    },
    // Generate set functions for each field in formData
    ...Object.keys(FormData).reduce((acc, field) => {
        return {
            ...acc,
            [`set${field.charAt(0).toUpperCase()}${field.slice(1)}`]: (value: any) =>
                set((state) => ({
                    formData: {
                        ...state.formData,
                        [field]: value,
                    },
                })),
        };
    }, {}),
}));

export default useFormStore;





