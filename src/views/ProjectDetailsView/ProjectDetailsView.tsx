/* eslint-disable react-hooks/exhaustive-deps */
import './ProjectDetailsView.css';
import React, { Fragment, useEffect, useState } from 'react';
import { createTypedHooks } from 'easy-peasy';
import { IStore } from '../../store';
import { useLocation } from 'react-router-dom';
import { Header } from '../../components/Utils/Header/Header';
import { Button } from '../../components/Utils/Button/Button';

const { useStoreState, useStoreActions } = createTypedHooks<IStore>();

export function ProjectDetailsView() {
    const [projectSlices, setProjectSlices] = useState<any>(null);
    const project = useStoreState((state) => state.project);

    useEffect(() => {
        const slices = project?.project_slices;
        const slicesObject = !!slices ? JSON.parse(slices) : null;
        setProjectSlices(slicesObject);
    }, [project]);

    useEffect(() => {}, [projectSlices]);

    return (
        <Fragment>
            <Header className="small-m" image={ project?.project_hero }/>

            <div className="project__info--outer-wrapper">
                <div className="project__info--inner-wrapper">
                    <div className="project__info--left-panel">
                        <div className="project__info--bookmark">
                            <h3>{ project?.project_name }</h3>
                            <p>
                                {
                                    project?.project_description
                                }
                            </p>
                            <div className="project__info--cta">
                                <a href={ project?.project_website_url } rel="noreferrer" target="_blank">
                                    <Button type="secondary" text="view website" />
                                </a>
                                <a href={ project?.project_repo_url } rel="noreferrer" target="_blank">
                                    <Button type="secondary" text="view repo" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="project__info--right-panel">
                        <div className="project__info--background">
                            <h3>project background</h3>
                            <p>
                                {
                                    project?.project_background
                                }
                            </p>
                        </div>
                        {
                            projectSlices ? (
                                <div className="project__info--previews">
                                    <h3>static previews</h3>
                                    <img src={ projectSlices?.project_slice_1 } alt="project slice one" />
                                    <img src={ projectSlices?.project_slice_2 } alt="project slice two" />
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    );
};