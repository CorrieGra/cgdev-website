import './Card.css';
import React from 'react';
import { Button } from '../Utils/Button/Button';
import { motion } from 'framer-motion';

export function Card(props: any) {
    const { project, onClick, id, index } = props;
    const project_slices = JSON.parse(project.project_slices);

    const cardVariants = {
        initial: (i: number) => ({
            y: 1000,
            opacity: 0
        }),
        entry: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i % 2 === 0 ? .3 : .3 * i,
                duration: .3,
            }
        })
    };

    return (
        <motion.div
        custom={ index }
        variants={ cardVariants }
        initial="initial"
        animate="entry"
        id={ id } 
        className="card">
            <div id="showcase" className="card__showcase">
                <img
                src={ project.project_hero } 
                alt="" />
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
        </motion.div>
    );
};