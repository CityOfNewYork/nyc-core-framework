//Some Global Values 
var theinputID = ""; //Value gets updated when getVal() is envoked;
var formDefaultErrorMsg = "Your response is required. <span>Please do not leave this empty. </span>";
var formCustomErrorMsg = new Array;
formCustomErrorMsg[formCustomErrorMsg.length] = ['Name','Name is required. <span>Please enter your name.</span>'];
formCustomErrorMsg[formCustomErrorMsg.length] = ['Address','Address is required. <span>Please enter your mailing address.</span>'];
formCustomErrorMsg[formCustomErrorMsg.length] = ['City','City is required. <span>Please enter your city.</span>'];
formCustomErrorMsg[formCustomErrorMsg.length] = ['State','State is required. <span>Please select your state from the dropdown.</span>'];
formCustomErrorMsg[formCustomErrorMsg.length] = ['ZIP Code','ZIP Code is required. <span>Please enter your ZIP Code.</span>'];
formCustomErrorMsg[formCustomErrorMsg.length] = ['Email','Email address is required. <span>Please enter a valid email address (e.g., test@example.com).</span>'];
formCustomErrorMsg[formCustomErrorMsg.length] = ['Phone','Phone is required. <span>Please enter your phone number.</span>'];
formCustomErrorMsg[formCustomErrorMsg.length] = ['g-recaptcha-response','Please check the box to indicate that you are not a robot.'];
/*formCustomErrorMsg[formCustomErrorMsg.length] = ['name of input','Your response is required. <span>Please select the type of message. </span>'];*/
/*formCustomErrorMsg[formCustomErrorMsg.length] = ['user-message-type','Your response is required. <span>Please select the type of message. </span>'];*/

var errors="";

var phoneRegex=/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})\s?([eE]?[xX]?[tT]?[\s-.:]?\s?\d{0,4}?)?/;
var emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function initListener(){
	$('.inputfile').each(function(){
		var $input	 = $( this );
		var	$label	 = $input.next( 'label' );
		var labelVal = $label.html();
		$input.on('change',function(e){
			var fileName = '';
			fileName = e.target.value.split('\\').pop();
			if(fileName){
				$label.find('.file-name').html(fileName);
			}else{
				$label.html(labelVal);
			}
		});
		// Firefox bug fix
		$input.on('focus',function(){
			$input.addClass( 'has-focus' );
		}).on('blur',function(){
			$input.removeClass( 'has-focus' );
		});
	});
}

function submitForm(formId){
	if($("#required").val().length>0){
		var fields=$("#required").val().replace(/(,\s)/g,",").split(",");
		errors="";
		for(var i=0;i<fields.length;i++){
			var theFormat=getFormat(fields[i]);
			if(!hasValue(fields[i])){
				errors=errors+'\n'+$.trim(fields[i]);
				addValidateError(fields[i]);
			}else if(theFormat&&theFormat.length>0){
				var theRegex=new RegExp(theFormat,"i");
				if(!theRegex.test(getVal(fields[i]))){
					errors=errors+'\n'+$.trim(fields[i]);
					addValidateError(fields[i]);
				}else{
					removeValidateError(fields[i]);
				}
			}else if($('[name="'+fields[i]+'"]').attr('type')=="tel"||(fields[i].toLowerCase().indexOf('phone')>-1&&($('[name="'+fields[i]+'"]').attr('type')=="text"||$('[name="'+fields[i]+'"]').attr('type')=="tel"))){
				if(!phoneRegex.test(getVal(fields[i]))){
					errors=errors+'\n'+$.trim(fields[i]);
					addValidateError(fields[i]);
				}else{
					removeValidateError(fields[i]);
				}
			}else if($('[name="'+fields[i]+'"]').attr('type')=="email"||(fields[i].toLowerCase().indexOf('email')>-1&&($('[name="'+fields[i]+'"]').attr('type')=="text"||$('[name="'+fields[i]+'"]').attr('type')=="email"))){
				if(!emailRegex.test(getVal(fields[i]))){
					errors=errors+'\n'+$.trim(fields[i]);
					addValidateError(fields[i]);
				}else{
					removeValidateError(fields[i]);
				}
			}else{
				removeValidateError(fields[i]);
			}
		}
		if(errors.length>0){
			$('html, body').animate({
				scrollTop: $('.validationError').first().offset().top
			}, 500);
			
			//$('.validationError').first().parent().find(':input:enabled:visible:first').focus();
		}else{
			document.getElementById(formId).submit();
		}
	}else{
		document.getElementById(formId).submit();
	}
}

function getName(theName){
	if($('[name="'+theName+'[]"]').length){
		return(theName+"[]");
	}
	return(theName);
}

function hasValue(theName){
	theName=getName($.trim(theName));
	var valid=false;
	var theType=$('[name="'+theName+'"]').attr('type');
	if(theType=="checkbox"||theType=="radio"){
		valid=$('[name="'+theName+'"]:checked').length>0;
	}else{
		valid=getVal(theName).length>0;
	}
	return(valid);
}

function getFormat(theName){
	theName=getName($.trim(theName));
	return($('[name="'+theName+'"]').data('format'));
}

function getVal(theName){
	theName=getName($.trim(theName));
	var theVal=$('[name="'+theName+'"]').val();
	if(theVal==$('[name="'+theName+'"]').attr('placeholder')){
		return('');
	}
	return(theVal);
}

function addValidateError(theLabel){
	var theName=getName($.trim(theLabel));
	$('[name="'+theName+'"]').closest(".form-group").find(".validationMessage").html(getErrorMsg(theLabel)).attr('aria-hidden', 'false').show();
	$('[name="'+theName+'"]').closest(".form-group").children(":first").addClass('validationError');
}

function removeValidateError(theLabel){
	var theName=getName($.trim(theLabel));
	$('[name="'+theName+'"]').closest(".form-group").find(".validationMessage").html('').attr('aria-hidden', 'true').hide();
	$('[name="'+theName+'"]').closest(".form-group").children(":first").removeClass('validationError');
}

function getErrorMsg(theName){
	var errMessage ="";
	//check area for matching id, if not display default error message;
	for(var i=0;i<formCustomErrorMsg.length;i++){
		if (formCustomErrorMsg[i][0] == (theName)){
			return (formCustomErrorMsg[i][1]);
		}
	}
	return (formDefaultErrorMsg);
}

function addLoadEvent(func) { 
	var oldonload = window.onload; 
	if (typeof window.onload != 'function') { 
		window.onload = func; 
	} else { 
		window.onload = function() { 
			if (oldonload) { 
				oldonload(); 
			} 
			func(); 
		} 
	} 
} 

addLoadEvent(initListener);
