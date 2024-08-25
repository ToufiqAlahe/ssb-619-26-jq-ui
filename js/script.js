/*================JQ===================*/
$( function() {

   // ex1
    $( "#draggable1" ).draggable();


    // ex3
    $( "#resizable3" ).resizable();
   
   // ex4
    $( "#selectable" ).selectable();

   // ex5
    $( "#sortable" ).sortable();

    // ex6
    $( "#accordion" ).accordion();

    // ex7
      var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });

  } );

$( function() {
    $( "#draggable2" ).draggable();
    $( "#droppable2" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } );


// ex8
 $( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).on( "click", function( event ) {
      event.preventDefault();
    } );
  } );

// ex9
   $( function() {
    $( "input" ).checkboxradio();
  } );

// ex10
 $( function() {
    $( ".controlgroup" ).controlgroup()
    $( ".controlgroup-vertical" ).controlgroup({
      "direction": "vertical"
    });
  } );

// ex11
 $( function() {
    $( "#datepicker" ).datepicker();
  } );

// ex12
 $( function() {
    $( "#dialog" ).dialog();
  } );

// ex13
 $( function() {
    $( "#menu" ).menu();
  } );

// ex14
 $( function() {
    $( "#progressbar" ).progressbar({
      value: 37
    });
  } );

// ex15
 $( function() {
    $( "#slider" ).slider();
  } );

