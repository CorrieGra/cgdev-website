/* eslint-disable @typescript-eslint/consistent-type-assertions */
import axios, { AxiosResponse } from 'axios';
import { Action, action, createStore, Thunk, thunk } from 'easy-peasy';
import { Entities } from './react-app-env';

export interface IStore {
    isLoading: boolean;
    projects: Entities.Project.Interfaces.IProject[] | any[];
    project: Entities.Project.Interfaces.IProject | null;
    experiences: Entities.Experience.Interfaces.IExperience[] | any[];
    loadProjects: Thunk<IStore>; 
    addLoadedProjects: Action<IStore, any>;
    loadProject: Thunk<IStore, any>;
    addLoadedProject: Action<IStore, any>;
    loadExperiences: Thunk<IStore>;
    addLoadedExperiences: Action<IStore, any>;
    setIsLoading: Action<IStore, boolean>;
}

const store = createStore<IStore>({
    isLoading: false,
    projects: [],
    project: null,
    experiences: [],
    addLoadedProjects: action((state, payload: Entities.Project.Interfaces.IProject[]) => {
        state.projects = payload;
    }),
    loadProjects: thunk(async (actions) => {
        await axios({
            url: `${process.env.REACT_APP_API_URL}/api/project`,
            method: 'GET',
            withCredentials: true
        })
        .then((response: AxiosResponse<Entities.Project.Interfaces.IProject[]>) => {
            actions.addLoadedProjects(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }),
    addLoadedProject: action((state, payload: Entities.Project.Interfaces.IProject) => {
        state.project = payload;
    }),
    loadProject: thunk(async (actions, payload) => {
        actions.setIsLoading(true);
        await axios({
            url: `${process.env.REACT_APP_API_URL}/api/project/${ payload }`,
            method: 'GET',
            withCredentials: true
        })
        .then((response: AxiosResponse<Entities.Project.Interfaces.IProject>) => {
            actions.addLoadedProject(response.data);
            actions.setIsLoading(false);
        })
        .catch((error) => {
            console.log(error);
        });
    }),
    addLoadedExperiences: action((state, payload: Entities.Experience.Interfaces.IExperience[]) => {
        state.experiences = payload;
    }),
    loadExperiences: thunk(async (actions) => {
        await axios({
            url: `${process.env.REACT_APP_API_URL}/api/experience`,
            method: 'GET',
            withCredentials: true
        })
        .then((response: AxiosResponse<Entities.Experience.Interfaces.IExperience[]>) => {
            actions.addLoadedExperiences(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }),
    setIsLoading: action((state, payload: boolean) => {
        state.isLoading = payload;
    })
});

export default store;