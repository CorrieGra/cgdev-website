import './Header.css';
import React from 'react';
import { Button } from '../Button/Button';
import { AnimatePresence, motion } from 'framer-motion';

interface IHeader {
    hasIntro?: boolean;
    intro?: string;
    image?: string;
    className?: string;
    index?: number;
}

const headerIntroVariants = {
    initial: {
        x: '-100%',
        opacity: 0,
    },
    entry: {
        x: 0,
        opacity: 1,
        transition: {
            delay: .3,
            duration: .5,
            when: 'beforeChildren',
            staggerChildren: .6
        }
    }
};

/**
 * @interface IHeader
 * @property { boolean } hasIntro true / false for if the header contains an introduction message
 * @property { string } intro the introduction message
 * @returns JSX.Element
 */
export function Header(props: IHeader): JSX.Element {
    return (
        <header className={ props.className }>
            <div className="header__image">
                <img src={ props.image } alt="" />
            </div>
            <AnimatePresence>
            {
                props.hasIntro && (
                    <motion.div
                    variants={ headerIntroVariants }
                    initial="initial"
                    animate="entry"
                    className="header__intro">
                        <motion.h2 
                        variants={ headerIntroVariants }
                        className="header__intro--title">{ props.intro }</motion.h2>
                        <motion.a 
                        variants={ headerIntroVariants }
                        href="#about-me">
                            <Button text="about me" type="primary"/>
                        </motion.a>
                    </motion.div>
                )
            }
            </AnimatePresence>
        </header>
    );
};