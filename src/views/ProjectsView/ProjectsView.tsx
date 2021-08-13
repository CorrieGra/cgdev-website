/* eslint-disable react-hooks/exhaustive-deps */
import './ProjectsView.css';
import React, { Fragment, useEffect } from 'react';
import { createTypedHooks } from 'easy-peasy';
import { IStore } from '../../store';
import { Card } from '../../components/Card/Card';

const { useStoreActions, useStoreState } = createTypedHooks<IStore>();

export function ProjectsView() {
    const loadProjects = useStoreActions((actions) => actions.loadProjects);
    const projects = useStoreState((state) => state.projects);

    useEffect(() => {
        loadProjects();
    }, []);

    return (
        <Fragment>
            {
                projects.map((project, index) => (<Card key={ index } project={ project }/>))
            }
        </Fragment>
    );
};