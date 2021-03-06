import './Card.css';
import React from 'react';
import { Button } from '../Utils/Button/Button';

export function Card(props: any) {
    const { project, onClick, id } = props;
    const project_slices = JSON.parse(project.project_slices);

    return (
        <div id={ id } className="card">
            <div id="showcase" className="card__showcase">
                <img src={ project.project_hero } alt="" />
            </div>
            <div id="info" className="card__info-wrapper">
                <div className="card__info">
                    <h2>{ project.project_name }</h2>
                    <p>{ project.project_description }</p>
                    <div className="card__info--cta">
                        <Button type="secondary" text="view project" onClick={ onClick }/>
                    </div>
                </div>
            </div>
        </div>
    );
};