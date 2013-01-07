describe("jquery.mask", function() {
  describe("$(password_field).mask()", function(){
    it("should add a unmasked version of password_field", function(){
      var fixture = $('<div id="fixture"/>');
      
      fixture.append("<input type='password' id='password-field' />");
      fixture.append("<input type='checkbox' id='password-field-toggler-1' />");
      fixture.find('#password-field').mask({toggle: '#password-field-toggler-1'});
      
      expect(fixture.find('#password-field').next('#password-field_unmasked').attr('type')).toEqual('text');
    });
  });
  
  describe("$(password_field).mask()", function(){
    it("should disable autocomplete on the password field because the unmasked field won't be able to pick up the password field's value", function(){
      var fixture = $('<div id="fixture"/>');
      
      fixture.append("<input type='password' id='password-field' autocomplete='on' />");
      fixture.append("<input type='checkbox' id='password-field-toggler-1' />");
      fixture.find('#password-field').mask({toggle: '#password-field-toggler-1'});
      
      expect(fixture.find('#password-field').attr('autocomplete')).toEqual('off');
    });
  });

  describe("$(element).mask()", function(){
    it("should work within a detached jQuery element", function(){
      var fixture = $('<div id="fixture"/>');
      
      fixture.append("<input type='text' id='password-field' />");
      fixture.append("<input type='checkbox' id='password-field-toggler-1' />");
      fixture.find('#password-field').mask({toggle: '#password-field-toggler-1'});
      
      fixture.find('#password-field').next('#password-field_unmasked').val('test').trigger('change');
      
      expect(fixture.find('#password-field').val()).toEqual('test');
    });
  });
});
