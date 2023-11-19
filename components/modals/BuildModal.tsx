'use client'

import React, { useState } from 'react'
import Basic from './Basic'
import useStepStore from '@/hooks/step-hook';
import Profiles from './Profiles';
import Work from './Work';
import Volunteer from './Volunteer';
import Education from './Education';
import Awards from './Awards';
import Certificates from './Certificates';
import Publications from './Publications';
import Skills from './Skills';
import Languages from './Languages';
import Interests from './Interests';
import References from './References';
import Projects from './Projects';
import CoverLetter from './CoverLetter';
enum STEPS {
  BASICS = 0,
  PROFILES = 1,
  WORK = 2,
  VOLUNTEER = 3,
  EDUCATION = 4,
  AWARDS = 5,
  CERTIFICATES = 6,
  PUBLICATIONS =  7,
  SKILLS = 8,
  LANGUAGES = 9,
  INTERESTS = 10,
  REFERENCES = 11,
  PROJECTS = 12,
  COVERLETTER = 13,
}
const BuildModal = () => {
    const stepStore = useStepStore();
    let bodyContent = null;
    if(stepStore.currentStep === STEPS.BASICS) {
        bodyContent = <Basic />
    }
    if(stepStore.currentStep === STEPS.PROFILES) {
        bodyContent = <Profiles />
    }
    if(stepStore.currentStep === STEPS.WORK) {
        bodyContent = <Work />
    }
    if(stepStore.currentStep === STEPS.VOLUNTEER) {
        bodyContent = <Volunteer />
    }
    if(stepStore.currentStep === STEPS.EDUCATION) {
        bodyContent = <Education />
    }
    if(stepStore.currentStep === STEPS.AWARDS) {
        bodyContent = <Awards />
    }
    if(stepStore.currentStep === STEPS.CERTIFICATES) {
        bodyContent = <Certificates />
    }
    if(stepStore.currentStep === STEPS.PUBLICATIONS) {
        bodyContent = <Publications />
    }
    if(stepStore.currentStep === STEPS.SKILLS) {
        bodyContent = <Skills />
    }
    if(stepStore.currentStep === STEPS.LANGUAGES) {
        bodyContent = <Languages />
    }
    if(stepStore.currentStep === STEPS.INTERESTS) {
        bodyContent = <Interests />
    }
    if(stepStore.currentStep === STEPS.REFERENCES) {
        bodyContent = <References />
    }
    if(stepStore.currentStep === STEPS.PROJECTS) {
        bodyContent = <Projects />
    }
    if(stepStore.currentStep === STEPS.COVERLETTER) {
        bodyContent = <CoverLetter />
    }


  return (
    <>
    <h1>Ova e najjako</h1>
    {bodyContent}
    </>
  )
}

export default BuildModal