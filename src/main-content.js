import React, { Component } from 'react';
import PortfolioElement from "./portfolio-element";
import "./main-content.css"
import PropTypes from 'prop-types';

export default function MainContent (props) {
    return (
        <div className="main-content">
            {props.data.map((element,index) => <PortfolioElement onClick={props.onClick} 
            changeToEdit={props.changeToEdit} key={index} {...element} onDelete={props.onDelete} />)}
        </div> 
    );
}

MainContent.propTypes = {
    changeToEdit: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
}