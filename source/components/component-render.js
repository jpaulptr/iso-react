'use strict';

// React 
require('node-jsx').install({
    harmony: true,
    extension: '.jsx'
});

const react = require('react');
const reactDom = require('react-dom/server');

const renderedComponents = {};

const components = {
    index: 'index',
    items: 'items'
};

const renderComponents = () => {
    for (const element in components) {
        if (Object.prototype.hasOwnProperty.call(components, element)) { 
            /* eslint-disable global-require*/
            renderedComponents[element] = react.createFactory(require(`./${element}`));
            /* eslint-enable */
        }
    }
};

renderComponents();

exports.render = (key, data) => {
    return reactDom.renderToString(
        renderedComponents[key](data)
    );
};

exports.componentKeys = components;