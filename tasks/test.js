/**
 * Created by berthelot on 05/11/14.
 */
'use strict';

module.exports = function (grunt) {
    grunt.registerTask('test', [
        'jshint:all',
        'karma:unit'
    ]);
    grunt.registerTask('debug-test', [
        'jshint:all',
        'karma:debug-test'
    ]);
};