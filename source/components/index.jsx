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
                <h1>Hi {this.props.title} {this.props.lastName}</h1>
                <h2>{this.props.firstName} {this.props.lastName}</h2>
                <div>
                    {this.props.bio}
                </div>
            </div>
        );
    }
}

index.propTypes = {
    title: React.PropTypes.string,
    lastName: React.PropTypes.string,
    firstName: React.PropTypes.string,
    bio: React.PropTypes.string
};

module.exports = index;