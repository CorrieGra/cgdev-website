import React from "react";

import './Container.css';

export function Container(props: any) {
    return (
        <div className="container">
            { props.children }
        </div>
    );
};