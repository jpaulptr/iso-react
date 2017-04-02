'use strict';
const path = require('path');
const express = require('express');
const router = express.Router();
const defaultKey = 0;

// Data service
const homeService = require(path.resolve('./source/services/home-service'));

// Get component
const components = require(path.resolve('./source/components/component-render'));

// Get page template
const templates = require(path.resolve('./source/views/template-loader')).templates;

router.get('/:id?', (req, res) => {
    const id = req.params.id || defaultKey;

    homeService.getData(id).then((data) => {
        const component = components.render(components.componentKeys.index, data);

        const html = templates.home({ data: component });

        res.send(html)
            .end();
    });
});

module.exports = router;