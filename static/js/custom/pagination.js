(function() {
	get_list()
}())

//first_show_page (total number of pages, number of items)
function first_show_page(total_page, count) {
   //Empty the original list
   $("#get_list_page").empty();
   $("#page_next").empty();
   $("#list_page_new").hide();
   if (total_page > 1) {
	   $("#list_page_new").show();
	   $("#get_list_total").html('Total' + count + 'Bar')
	   $("#page_next").append('<a href="javascript:;"  data-page="' + total_page +
		   '">' + 'Next page' + '</a>');

	   if (total_page < 5) {
		   for (var w = 1; w < total_page + 1; w++) {
			   $("#get_list_page").append('<a href="javascript:;"  data-page="' + w +
				   '">' + w + '</a>');
		   }
	   } else if (total_page > 5 || total_page == 5) {

		   for (var w1 = 1; w1 < total_page + 1; w1++) {
			   $("#get_list_page").append('<a href="javascript:;"  data-page="' + w1 +
				   '">' + w1 + '</a>');
		   }
		   for (var w1 = 5; w1 < total_page; w1++) {
			   $("#get_list_page").find("a").eq(Number(w1)).hide();
		   }
	   }
	   $("#get_list_page").find("a").eq(0).addClass("page_active").siblings().removeClass(
		   "page_active");
   }
}
// show_page (current page, total number of pages)
function show_page(curr, total_page) {
   if (curr == 1) {
	   $("#page_pre").css("visibility", "hidden");
   } else {
	   $("#page_pre").css("visibility", "visible");
   }
   if (curr == total_page) {
	   $("#page_next").hide();
   } else {
	   $("#page_next").show();
   }
}
//Switch paging
$("#get_list_page").on("click", "a", function() {
   var now_page = $(this).attr('data-page')
   get_curr_page(now_page)
   $(this).addClass("page_active").siblings().removeClass("page_active")

})
//Next page
$("#page_next").on("click", "a", function() {
   var index = ""
   $("#get_list_page").find('a').each(function() {
	   if ($(this).hasClass('page_active')) {
		   index = $(this).attr('data-page')
	   }
   })
   var Number_index1 = Number(index) + 1;
   get_curr_page(Number_index1)
   if (Number(index) > 4) {
	   $("#get_list_page").find("a").eq(Number(index)).show();
	   $("#get_list_page").find("a").eq(Number(index) - 5).hide();
   }
   $("#get_list_page").find("a").eq(Number(index)).addClass("page_active").siblings().removeClass(
	   "page_active");

})
//Previous page
$("#page_pre").on("click", "a", function() {
   var num = ""
   $("#get_list_page").find('a').each(function() {
	   if ($(this).hasClass('page_active')) {
		   num = $(this).attr('data-page')
	   }
   })
   var Number_num1 = Number(num) - 1;
   get_curr_page(Number_num1)
   if (Number(num) !== 1) {
	   $("#get_list_page").find("a").eq(Number(num) - 1).show();
	   $("#get_list_page").find("a").eq(Number(num) + 5).hide();
   }
   $("#get_list_page").find("a").eq(Number(num) - 2).addClass("page_active").siblings().removeClass(
	   "page_active");
})
//The first rendering of the dynamic list
function get_list() {
   //Interface return
   first_show_page(12, 120)
   //slightly
}
//Get the current page
function get_curr_page(curr) {
   //Interface return
   show_page(curr, 120)
   //slightly
}