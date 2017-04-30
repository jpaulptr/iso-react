import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Nav = (props) =>
    (
        <nav>
            <list>
                <li><Link to={'/'}>Home</Link></li>
                {
                    props.nav.sections.map((section) =>
                        <li key={section.id}><Link  to={`/section/${section.id}`}>{section.title}</Link></li>
                    )
                }
            </list>
        </nav>
    )


Nav.propTypes = {
    nav: PropTypes.shape({
        sections: PropTypes.arrayOf({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

module.exports = Nav;
