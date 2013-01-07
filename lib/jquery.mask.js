(function($){

  $.fn.mask = function(options) {
    var elements = this;
    var settings = {
      'toggle': '.toggle',
    };

    if(options) { 
      $.extend(settings,options);
    }

    var $controls = $(settings.toggle);

    //helper function
    function createMask(unmasked) {
      var new_id = unmasked.attr('id') + '_masked';
      var new_input = document.createElement("input");
      new_input.setAttribute("id", new_id);
      new_input.setAttribute("type","password");
      new_input.setAttribute("style","display:none;")
      new_input.value = unmasked.val();
      unmasked.after(new_input);
      return $(new_input);
    }

    //bind the controls
    $controls.change(function() {
      var checked = $(this).is(':checked');
      //keep all the controls in sync
      $controls.each(function() {
        $(this).attr('checked',checked);
      });
      //toggle the mask
      elements.each(function() {
        checked ? this.reveal() : this.mask();
      });
    });

    return this.each(function() {
      var unmasked = $(this);
      var masked = createMask(unmasked);

      this.reveal = function() {
        unmasked.show();
        masked.hide();
      }

      this.mask = function() {
        unmasked.hide();
        masked.show();
      }

      masked.change(function() {
        unmasked.val(masked.val());
        return false; //keep it from looping
      });

      unmasked.change(function() {
        masked.val(unmasked.val());
        return false; //keep it from looping
      });

      this.mask();
    });

  };
})(jQuery);
