import { profile } from 'console';
import { create } from 'zustand';
type FormState = {
    formData: {
        basics?: {};
        location?: {};
        profiles: [{}];
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
    setProfiles: (value: any) => void;
}
const useFormStore = create<FormState>((set) => ({
    formData: {
        basics: {},
        location: {},
        profiles: [{
            network: "",
            username: "",
            url: "",
        }],
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
    setProfiles: (value: any) => 
    set((state) => ({
        formData: {
            ...state.formData,
            profiles: value,
        },
    })),
    setBasics: (value: any) => 
        set((state) => ({
            formData: {
                ...state.formData,
                basics: value,
            },
        }))
}));


export default useFormStore;





