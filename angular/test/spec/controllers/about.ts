/// <reference path="../reference.ts" />
module dt {
  'use strict';
  import dt_webapp = dt.webapp
  describe('Controller: AboutCtrl', function () {

    // load the controller's module
    beforeEach(module('angularApp'));

    var ctrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($rootScope) {
      scope = $rootScope.$new();
      ctrl =  new dt_webapp.AboutCtrl(scope);
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(scope.awesomeThings.length).toBe(3);
    });
  });

}
