describe('controller method ', function() {
  var scope;
  var controller;
  var controllerMethodCall;
  beforeEach(module('app'));
  beforeEach(inject(function($injector) {
    scope = $injector.get('$rootScope').$new();
    var $controller = $injector.get('$controller');

    scope.name = 'blabla';
    //for Private call//
    //scope.privateCall = '';

    controller = $controller('MainController', {
      $scope: scope
    });

  }));

  it('should check scope value', function() {
    expect(scope.test).toBe(0);
  });


  it('Check the Length', function() {
    expect(scope.name.length).toBe(6);
  });

  it('should watch public method', function() {
    controllerMethodCall = spyOn(scope, 'methodName');
    scope.$digest();
    scope.methodName();
    expect(controllerMethodCall).toHaveBeenCalled();


  });
  it('should watch private method', function() {
    scope.methodName();
    expect(scope.methodName).toBeDefined();
    expect(scope.privateCall).toBe('private123');


  });

});