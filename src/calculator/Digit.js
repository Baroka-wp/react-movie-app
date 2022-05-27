import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Digit extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { buttonName, handleClick } = this.props
        return (
            <button
                type='button'
                onClick={() => handleClick(buttonName)}
            >
                {buttonName}
            </button>
        );
    }

};

Digit.propTypes = {

};

export default Digit;