'use strict';
const Promise = require('bluebird');

const dataSet = [
    { 
        title: 'Mr', 
        firstName: 'John', 
        lastName: 'Jones', 
        bio: 'Lots of text would be here.' 
    },
    { 
        title: 'Mrs', 
        firstName: 'Jane', 
        lastName: 'Rivera', 
        bio: 'Even more text would be here.' 
    }
];


exports.getData = (key) => {
    return Promise.resolve(dataSet[key]);
};