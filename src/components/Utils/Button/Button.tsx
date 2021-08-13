import React from 'react';
import './Button.css';

interface IButtonParams {
    text: string;
    type: string;
    onClick?: any;
    disabled?: boolean;
}

/**
 * @param { object } props { text: string, type: string (ex. 'primary' / 'secondary'), onClick: any }
 * @returns JSX.Element
 */
export function Button(props: IButtonParams): JSX.Element {
    const PrimaryButton = () => (
        <button className={ `btn btn--${props.type}` } onClick={ props.onClick } disabled={ props.disabled !== undefined ? props.disabled : false }>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14"><g fill="none" fillRule="evenodd" stroke="#5FB4A2"><path d="M0 9l8 4 8-4"/><path opacity=".5" d="M0 5l8 4 8-4"/><path opacity=".25" d="M0 1l8 4 8-4"/></g></svg>
            </div>
            <div>{ props.text }</div>
        </button>
    );

    const SecondaryButton = () => (<button className={ `btn btn--${props.type}` } onClick={ props.onClick } disabled={ props.disabled !== undefined ? props.disabled : false }>{ props.text }</button>);

    return props.type === 'primary' ? (<PrimaryButton />) : (<SecondaryButton />);
}