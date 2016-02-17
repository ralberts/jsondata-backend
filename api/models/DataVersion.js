'use strict';

var _ = require('lodash');

/**
 * Book.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
module.exports = _.merge(_.cloneDeep(require('../base/Model')), {
    attributes: {
        title: {
            type: 'string',
            required: true
        },
        description: {
            type: 'json',
            defaultsTo: ''
        },
        releaseDate: {
            type: 'date',
            required: true
        },

        // Relationship
        dataObject: {
            model: 'dataObject'
        }
    }
});
