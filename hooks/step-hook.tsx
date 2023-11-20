import {create} from 'zustand';

enum STEPS {
    BASICS = 0,
    PROFILES = 1,
    WORK = 2,
    VOLUNTEER = 3,
    EDUCATION = 4,
    AWARDS = 5,
    CERTIFICATES = 6,
    PUBLICATIONS = 7,
    SKILLS = 8,
    LANGUAGES = 9,
    INTERESTS = 10,
    REFERENCES = 11,
    PROJECTS = 12,
    COVERLETTER = 13,
}

type StepState = {
    currentStep: STEPS;
    increaseStep: () => void;
    decreaseStep: () => void;
};

const useStepStore = create<StepState>((set) => ({
    currentStep: STEPS.VOLUNTEER,
    increaseStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
    decreaseStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
}));

export default useStepStore;
