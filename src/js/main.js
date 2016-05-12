import angular from 'angular';

// 5. Import the contoller
import { MainController } from './controllers/main.controller';
// 1. Start Angular by creating a module

// Community standard way to create - chaining them together
angular
  .module('app', [])
  .controller('MainController', MainController)
;

// 2. Went to the index.html file and added 'ng-app="app"' to the <body> element so that we can have a directive/control of the HTML

// 3. Added {{}} in index.html to add JS in HTML

// 4. Added a controller and imported it here
