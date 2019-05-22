$(window).on('load', function() {
 $("#main").waypoint(function(direction) {
   toggleSticky("#sidebar");
 });

 $("#footer").waypoint(function(direction) {
   if (direction == "down"){
      desired_position = parseInt($('#main').outerHeight()) - parseInt($('#main').css('padding-top')) - parseInt($('#sidebar').height()) - parseInt($('#main').css('padding-bottom'));
      toggleSticky("#sidebar");
      $("#sidebar").css({ position: "relative" });
      $("#sidebar").css({ top: desired_position.toString() + "px" });
   } else {
      toggleSticky("#sidebar");
      $("#sidebar").css({ position: '' });
      $("#sidebar").css({ top: '' });
   }
 }, {offset: getOffset() });
});

function getOffset(){
   return parseInt($('#sidebar').outerHeight()) + parseInt($('#main').css('padding-top')) + parseInt($('#main').css('padding-bottom'));
}

function getOffsetbackup(){
   return Waypoint.viewportHeight() - parseInt($('#sidebar').outerHeight()) - parseInt($('#main').css('padding-top')) + parseInt($('#main').css('padding-bottom'));
}

function toggleSticky(name) {
   var navbarItemId = name
   $(navbarItemId).toggleClass("sticky");
}
