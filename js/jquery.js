$(document).ready(function(){

  // accordion

  $("#accordion_div1").accordion();


// sortable accordion
$( "#accordion_stb" )
.accordion({
  header: "> div > h3"
})
.sortable({
  axis: "y",
  handle: "h3",
  stop: function( event, ui ) {
    // IE doesn't register the blur when sorting
    // so trigger focusout handlers to remove .ui-state-focus
    ui.item.children( "h3" ).triggerHandler( "focusout" );

    // Refresh accordion to handle new order
    $( this ).accordion( "refresh" );
  }
});




// auto complete start here

var availableTags = ["Html","css","javascript","Typescript","jQuery",
"React js","Node Js","Mongo DB","Php","Laravel",
"C","C++","ASP.net","Python","Golang","Java","Vue.js","Bootstrap"
]

$("#tags").autocomplete({
  source: availableTags
})



// checkbox radios

// $( "input" ).checkboxradio();










// datePicker

$( "#datepicker" ).datepicker();




// change month and year


$("#datepicker_div1").datepicker({
  changeMonth: true,
  changeYear: true,

})

$( "#datepicker_div2" ).datepicker({
  altField: "#alternate",
  altFormat: "DD, d MM, yy"
});




// dialog staart here

$("#dialog").dialog();





// dialog modal


var dialog, form,
 
// From http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#e-mail-state-%28type=email%29
emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
name = $( "#name" ),
email = $( "#email" ),
password = $( "#password" ),
allFields = $( [] ).add( name ).add( email ).add( password ),
tips = $( ".validateTips" );

function updateTips( t ) {
tips
  .text( t )
  .addClass( "ui-state-highlight" );
setTimeout(function() {
  tips.removeClass( "ui-state-highlight", 1500 );
}, 500 );
}

function checkLength( o, n, min, max ) {
if ( o.val().length > max || o.val().length < min ) {
  o.addClass( "ui-state-error" );
  updateTips( "Length of " + n + " must be between " +
    min + " and " + max + "." );
  return false;
} else {
  return true;
}
}

function checkRegexp( o, regexp, n ) {
if ( !( regexp.test( o.val() ) ) ) {
  o.addClass( "ui-state-error" );
  updateTips( n );
  return false;
} else {
  return true;
}
}

function addUser() {
var valid = true;
allFields.removeClass( "ui-state-error" );

valid = valid && checkLength( name, "username", 3, 16 );
valid = valid && checkLength( email, "email", 6, 80 );
valid = valid && checkLength( password, "password", 5, 16 );

valid = valid && checkRegexp( name, /^[a-z]([0-9a-z_\s])+$/i, "Username may consist of a-z, 0-9, underscores, spaces and must begin with a letter." );
valid = valid && checkRegexp( email, emailRegex, "eg. ui@jquery.com" );
valid = valid && checkRegexp( password, /^([0-9a-zA-Z])+$/, "Password field only allow : a-z 0-9" );

if ( valid ) {
  $( "#users tbody" ).append( "<tr>" +
    "<td>" + name.val() + "</td>" +
    "<td>" + email.val() + "</td>" +
    "<td>" + password.val() + "</td>" +
  "</tr>" );
  dialog.dialog( "close" );
}
return valid;
}

dialog = $( "#dialog-form" ).dialog({
autoOpen: false,
height: 400,
width: 350,
modal: true,
buttons: {
  "Create an account": addUser,
  Cancel: function() {
    dialog.dialog( "close" );
  }
},
close: function() {
  form[ 0 ].reset();
  allFields.removeClass( "ui-state-error" );
}
});

form = dialog.find( "form" ).on( "submit", function( event ) {
event.preventDefault();
addUser();
});

$( "#create-user" ).button().on( "click", function() {
dialog.dialog( "open" );
});



// proggressbar start here
$( "#progressbar2" ).progressbar({
  value: 37
});


// 

$( "#progressbar1" ).progressbar({
  value: 70
});



// 

var progressbar = $( "#progressbar" ),
progressLabel = $( ".progress-label" );

progressbar.progressbar({
value: false,
change: function() {
  progressLabel.text( progressbar.progressbar( "value" ) + "%" );
},
complete: function() {
  progressLabel.text( "Complete!" );
}
});

function progress() {
var val = progressbar.progressbar( "value" ) || 0;

progressbar.progressbar( "value", val + 2 );

if ( val < 99 ) {
  setTimeout( progress, 80 );
}
}

setTimeout( progress, 2000 );




// select menu

$( "#speed" ).selectmenu();
 
$( "#files" ).selectmenu();

$( "#number" )
  .selectmenu()
  .selectmenu( "menuWidget" )
    .addClass( "overflow" );

$( "#salutation" ).selectmenu();




// tabs

$("#tabs").tabs();



var tabs = $( "#tabs_num2" ).tabs();
var previouslyFocused = false;

tabs.find( ".ui-tabs-nav" ).sortable({
  axis: "x",

  // Sortable removes focus, so we need to restore it if the tab was focused
  // prior to sorting
  start: function(event, ui) {
    previouslyFocused = document.activeElement === ui.item[ 0 ];
  },
  stop: function(event, ui) {
    tabs_num2.tabs_num2( "refresh" );
    if (previouslyFocused) {
      ui.item.trigger( "focus" );
    }
  }
});















   
});

