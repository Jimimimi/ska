(function() {
    'use strict';

    angular
        .module('services.alert')
        .factory('AlertService', factory);

    factory.$inject = ['alert'];

    /* @ngInject */
    function factory(alert) {
        var service = {
            notify: notify
        };

        return service;

        function notify(note, message) {
          alert[note](message);
        }
    }
})();
