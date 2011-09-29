# jQuery Field Mask

## Overview

jQuery Field Mask is a simple jQuery plugin that will mask your text fields with a password field.  The user can toggle between the masked input and the unmasked version via a checkbox.  The use case is to allow people to enter data on a public screen, such as a kiosk, and be able to have the data hidden until they click the reveal button.  The masked fields do not interfere with the submission of the form.  Just add a class to the input field and a control field and you will be done.

## Setup

Include the script:

`
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
<script src="js/mask.js"></script>
`

Setup the field to mask and the field to toggle the mask:
`
<input type="text" name="credit_card" value="" id="credit_card" class="mask"/>
<input type="checkbox" name="toggle" value="1" id="toggle" class="toggle" />
`

Call the script:

`
<script lang="Javascript">
	$(document).ready(function() {
		$('.mask').mask();
	});
</script>
`

## Options

The script only has 1 option, toggle.  The default value is '.toggle'.  Toggle is the selector path that points to the checkbox(es) that you want to use to switch between the masked and unmasked versions of the input fields.

`
<script lang="Javascript">
	$(document).ready(function() {
		$('.mask').mask({toggle: '.toggle'});
	});
</script>
`
