import './Header.css';
import React from 'react';
import { Button } from '../Button/Button';

interface IHeader {
    hasIntro?: boolean;
    intro?: string;
}

/**
 * 
 * @interface IHeader
 * @property { boolean } hasIntro true / false for if the header contains an introduction message
 * @property { string } intro the introduction message
 * @returns JSX.Element
 */
export function Header(props: IHeader): JSX.Element {
    return (
        <header>
            <div className="header__image">
                <img src="assets/images/homepage-hero.jpg" alt="" />
            </div>
            {
                props.hasIntro ? (
                    <div className="header__intro">
                        <h2 className="header__intro--title">{ props.intro }</h2>
                        <a href="#about-me">
                            <Button text="about me" type="primary"/>
                        </a>
                    </div>
                ) : null
            }
        </header>
    );
};