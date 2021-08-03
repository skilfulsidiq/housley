

$(document).ready(function(){
 
  var searchBar=$(".search-bar-tab");
  var searchContainer=$(".search-container");

  searchContainer.css({'display':'none'});
  searchContainer.eq(0).css({'display':'block'});
  searchBar.eq(0).addClass('active-tab');


 
  searchBar.each(function(a,b){
// console.log(b);
$(b).click(function() {
  searchBar.removeClass('active-tab');
  searchContainer.css({'display':'none'});
  searchContainer.eq(a).css({'display':'block'});
  searchBar.eq(a).addClass('active-tab');

});

  });

});
