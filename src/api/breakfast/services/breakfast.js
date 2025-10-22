'use strict';

/**
 * breakfast service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::breakfast.breakfast');
