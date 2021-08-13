/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { createStore } from 'easy-peasy';

interface IProject {
    project_name: string;
    project_background: string;
    project_description: string;
    project_hero: any;
    project_slice_1: any;
    project_slice_2: any;
}

interface IExperience {
    experience_company: string;
    experience_company_location: string;
    experience_start_date: string;
    experience_end_date: string;
    experience_is_ongoing: boolean;
    experience_position: string;
    experience_technologies: string[] | null;
}

interface IStore {
    projects: IProject[] | null;
    project: IProject | null;
    experiences: IExperience[] | null;
}

const store = createStore(<IStore>{
    projects: null,
    project: null,
    experiences: null
});

export default store;