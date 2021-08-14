/* eslint-disable react-hooks/exhaustive-deps */
import './ProjectsView.css';
import React, { Fragment, useEffect } from 'react';
import { createTypedHooks } from 'easy-peasy';
import { IStore } from '../../store';
import { Card } from '../../components/Card/Card';
import { useHistory } from 'react-router-dom';

const { useStoreActions, useStoreState } = createTypedHooks<IStore>();

export function ProjectsView() {
    const history = useHistory();
    const loadProjects = useStoreActions((actions) => actions.loadProjects);
    const projects = useStoreState((state) => state.projects);

    useEffect(() => {
        loadProjects();
    }, []);

    const onClick = (id: string) => { history.push(`project-details?id=${ id }`); };

    return (
        <Fragment>
            {
                projects.map((project, index) => (<Card key={ index } id={ project.project_id } project={ project } onClick={() => onClick(project.project_id) } />))
            }
        </Fragment>
    );
};