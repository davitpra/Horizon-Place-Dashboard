'use strict';

/**
 * dinner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dinner.dinner');
