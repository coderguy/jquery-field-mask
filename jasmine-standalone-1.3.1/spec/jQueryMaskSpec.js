describe("jquery.mask", function() {
  describe("$(element).mask()", function(){
    it("should work within a detached jQuery element", function(){
      var fixture = $('<div id="fixture"/>');
      
      fixture.append("<input type='text' id='password-field' />");
      fixture.append("<input type='checkbox' id='password-field-toggler-1' />");
      fixture.find('#password-field').mask({toggle: '#password-field-toggler-1'});
      
      fixture.find('#password-field').next('#password-field_masked').val('test').trigger('change');
      
      expect(fixture.find('#password-field').val()).toEqual('test');
    });
  });
});
