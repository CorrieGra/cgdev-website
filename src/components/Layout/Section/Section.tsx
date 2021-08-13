import './Section.css';
import React from 'react';

interface ISection {
    title?: string;
    children?: any;
}

export function Section(props: ISection) {
    return (
        <section>
            <div className="section__header">
                <h1>{ props.title }</h1>
            </div>
            { props.children }
        </section>
    );
};