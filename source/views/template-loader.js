const handelbars = require('handlebars');
const path = require('path');
const fs = require('fs');

// View definitions
const views = {
    home: './home.handlebars',
    items: './items.handlebars'
};

// Simple helper for cleaner code
const getTemplate = (viewPath) => fs.readFileSync(path.join(__dirname, viewPath)).toString();

const compile = () => {
    const templates = {};

    for (const view in views) {       
        if (Object.prototype.hasOwnProperty.call(views, view)) { 
            templates[view] = handelbars.compile(getTemplate(views[view]));
        }
    }

    return templates;
};

exports.templates = compile();
