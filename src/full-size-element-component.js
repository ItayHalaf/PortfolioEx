import React from 'react';
import "./full-size-element-component.css"
import PropTypes from 'prop-types';

export default function FullSizeElementComponent (props) {
    const {url,title,description} = props;
    return (
        <div onClick={props.onClick} className="full-size">
            <img className="full-image" src={url} alt="" />
            <div>{title}</div>
            <div>{description}</div>
        </div>
    );
}

FullSizeElementComponent.propTypes= {
    onClick: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}