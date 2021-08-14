import './Card.css';
import React from 'react';
import { Button } from '../Utils/Button/Button';


export function Card(props: any) {
    const project = props.project;
    const project_slices = JSON.parse(project.project_slices);

    return (
        <div className="card">
            <div id="showcase" className="card__showcase">
                <img src={ project_slices.project_slice_1 } alt="" />
            </div>
            <div id="info" className="card__info-wrapper">
                <div className="card__info">
                    <h2>{ project.project_name }</h2>
                    <p>{ project.project_description }</p>
                    <div className="card__info--cta">
                        <Button type="secondary" text="view project" />
                    </div>
                </div>
            </div>
        </div>
    );
};