/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react';
import { createTypedHooks } from 'easy-peasy';
import { useHistory } from 'react-router-dom';

import { IStore } from '@store';
import { Card } from '@components/Card/Card';

import './ProjectsView.css';

const { useStoreActions, useStoreState } = createTypedHooks<IStore>();

export function ProjectsView() {
    const history = useHistory();
    const { loadProjects, loadProject } = useStoreActions((actions) => actions);
    const projects = useStoreState((state) => state.projects);

    useEffect(() => {
        loadProjects();
    }, []);

    const onClick = async (id: string) => { 
        await loadProject(id)
            .then(() => { history.replace(`/project-details/${ id }`); })
            .catch((error: any) => console.log(error));
     };

    return (
        <Fragment>
            {
                projects.map((project, index) => (<Card key={ index } id={ project.project_id } project={ project } onClick={() => onClick(project.project_id) } />))
            }
        </Fragment>
    );
};