'use strict';

/**
 * compatible-app router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::compatible-app.compatible-app');
