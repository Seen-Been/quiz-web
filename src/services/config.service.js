angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://quiz-api-shh-env.eba-iqhtgudm.eu-west-2.elasticbeanstalk.com/';

    return service;
}]);