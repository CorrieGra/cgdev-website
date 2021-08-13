/* eslint-disable @typescript-eslint/consistent-type-assertions */
import axios from 'axios';
import { Action, action, createStore, persist, Thunk, thunk } from 'easy-peasy';

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

export interface IStore {
    projects: IProject[] | any[];
    project: IProject | null;
    experiences: IExperience[] | any[];
    loadProjects: Thunk<IStore>;
    addLoadedProjects: Action<IStore, any>;
    loadExperiences: Thunk<IStore>;
    addLoadedExperiences: Action<IStore, any>;
}

const store = createStore<IStore>({
    projects: [],
    project: null,
    experiences: [],
    addLoadedProjects: action((state, payload: any) => {
        state.projects.push(...payload);
    }),
    loadProjects: thunk(async (actions) => {
        await axios({
            url: 'http://localhost:5000/api/project',
            method: 'GET',
            withCredentials: true
        })
        .then((response) => {
            actions.addLoadedProjects(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }),
    addLoadedExperiences: action((state, payload: any) => {
        state.experiences.push(...payload);
    }),
    loadExperiences: thunk(async (actions) => {
        await axios({
            url: 'http://localhost:5000/api/experience',
            method: 'GET',
            withCredentials: true
        })
        .then((response) => {
            actions.addLoadedExperiences(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }),
});

export default store;