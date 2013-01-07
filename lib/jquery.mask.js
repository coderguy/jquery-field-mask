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
    function createUnmask(masked) {
      var new_id = masked.attr('id') + '_unmasked';
      var new_input = document.createElement("input");
      new_input.setAttribute("id", new_id);
      new_input.setAttribute("type","text");
      new_input.setAttribute("style","display:none;")
      new_input.value = masked.val();
      masked.after(new_input);
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
      var masked = $(this);
      masked.attr('autocomplete', 'off');
      var unmasked = createUnmask(masked);

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
