'use strict';

/**
 * compatible-app service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::compatible-app.compatible-app');
