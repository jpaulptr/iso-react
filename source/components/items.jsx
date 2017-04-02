'use strict';

const React = require('react');

class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1 >{this.props.item}</h1>
                <h2>{this.props.price}</h2>
            </div>
        );
    }
};

module.exports = index;