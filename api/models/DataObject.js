'use strict';

var _ = require('lodash');
var DataVersion = require('./DataVersion.js');

/**
 * Author.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
module.exports = _.merge(_.cloneDeep(require('../base/Model')), {
    attributes: {
        // Name of the author
        name: {
            type: 'string',
            required: true
        },
        // Author description
        description: {
            type: 'json'
        },

        // Below is all specification for relations to another models

        // Books that area attached to author
        dataVersions: {
            collection: 'dataVersion',
            via: 'dataObject'
        }
    },
    afterDestroy: function(destroyedRecords, cb) {
        // Destroy any child whose DataObject has an ID of one of the
        // deleted teacher models
        //Model.destroy({dataObject: _.pluck(destroyedRecords, 'id')}).exec(cb);
    }
});
