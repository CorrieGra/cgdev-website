import './Container.css';
import React from "react";

export function Container(props: any) {
    return (
        <div className="container">
            { props.children }
        </div>
    );
};