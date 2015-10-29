'use strict';

angular.module('indigo.version', [
  'indigo.version.interpolate-filter',
  'indigo.version.version-directive'
])

.value('version', '0.1');
