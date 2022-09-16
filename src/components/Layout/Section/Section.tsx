import React from 'react';

import './Section.css';

interface ISection {
    title?: string;
    children?: any;
    id?: string;
}

export function Section(props: ISection) {
    return (
        <section id={ props.id }>
            <div className="section__header">
                <h1>{ props.title }</h1>
            </div>
            { props.children }
        </section>
    );
};