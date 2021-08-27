import './Section.css';
import React from 'react';
import { motion } from 'framer-motion';

interface ISection {
    title?: string;
    children?: any;
    id?: string;
    isVisible?: boolean;
}

export const sectionVariants = {
    initial: {
        opacity: 0,
        x: 1000
    },
    entry: {
        opacity: 1,
        x: 0,
        transition: {
            delay: .3,
            duration: .5,
            when: 'beforeChildren',
            staggerChildren: .5
        }
    },
    exit: {
        x: 1000,
        opacity: 0
    }
};

export function Section(props: ISection) {
    return (
        <motion.section 
        variants={ sectionVariants }
        initial="initial"
        animate="entry"
        id={ props.id }>
            <div className="section__header">
                <h1>{ props.title }</h1>
            </div>
            { props.children }
        </motion.section>
    );
};