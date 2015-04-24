//JS PLUGIN PER GWDA233 REQUIRMENT

$(".contact-toggle").hide();
 
	// TOGGLE COMPONENET WITH MSG_BODY CLASS
	$(".contact-toggle-btn").click(function() {
	$(this).next(".contact-toggle").slideToggle(500);
			
});

$(".contact-toggle-btn").click(function(){
    $("html,body").animate({scrollTop:$("#endPage").offset().top},"slow");
    return false;
});

//JS SIGNUP VALIDATION

$(document).ready(function() {
	$.mockjax({
		url: "emails.action",
		response: function(settings) {
			var email = settings.data.email,
				emails = ["glen@marketo.com", "george@bush.gov", "me@god.com", "aboutface@cooper.com", "steam@valve.com", "bill@gates.com"];
			this.responseText = "true";
			if ($.inArray(email, emails) !== -1) {
				this.responseText = "false";
			}
		},
		responseTime: 500
	});

	$.mockjax({
		url: "users.action",
		response: function(settings) {
			var user = settings.data.username,
				users = ["asdf", "Peter", "Peter2", "George"];
			this.responseText = "true";
			if ($.inArray(user, users) !== -1) {
				this.responseText = "false";
			}
		},
		responseTime: 500
	});

	// validate signup form on keyup and submit
	var validator = $("#contact-form").validate({
		rules: {
			firstname: "required",
			lastname: "required",
			username: {
				required: true,
				minlength: 2,
				remote: "users.action"
			},
			password: {
				required: true,
				minlength: 5
			},
			password_confirm: {
				required: true,
				minlength: 5,
				equalTo: "#password"
			},
			hint: "required",
			terms: "required"
		},
		messages: {
			firstname: "Enter your firstname",
			lastname: "Enter your lastname",
			username: {
				required: "Enter a username",
				minlength: jQuery.validator.format("Enter at least {0} characters"),
				remote: jQuery.validator.format("{0} is already in use")
			},
			password: {
				required: "Provide a password",
				minlength: jQuery.validator.format("Enter at least {0} characters")
			},
			password_confirm: {
				required: "Repeat your password",
				minlength: jQuery.validator.format("Enter at least {0} characters"),
				equalTo: "Passwords Do Not Match"
			},
			hint: "Enter a password hint",
			terms: " "
		},
		// the errorPlacement has to take the table layout into account
		errorPlacement: function(error, element) {
			if (element.is(":radio"))
				error.appendTo(element.parent().next().next());
			else if (element.is(":checkbox"))
				error.appendTo(element.next());
			else
				error.appendTo(element.parent().next());
		},
		// specifying a submitHandler prevents the default submit, good for the demo
		submitHandler: function() {
			alert("submitted!");
		},
		// set this class to error-labels to indicate valid fields
		success: function(label) {
			// set &nbsp; as text for IE
			label.html("&nbsp;").addClass("checked");
			label.addClass("good");
		},
		highlight: function(element, errorClass) {
			$(element).parent().next().find("." + errorClass).removeClass("checked");
		}
	});

	// propose username by combining first- and lastname
	$("#username").focus(function() {
		var firstname = $("#firstname").val();
		var lastname = $("#lastname").val();
		if (firstname && lastname && !this.value) {
			this.value = (firstname + "." + lastname).toLowerCase();
		}
	});
});