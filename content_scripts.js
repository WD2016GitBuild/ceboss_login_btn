var w = $("#body_login");
var accouts = [];
accouts.push(["东东", "cdwudong@300.cn", "cd123456"]);
$.each(accouts, function(i, v) {
	w.append("<div _i='"+i+"' class='w_buttons accouts_" + (i+1) + "'>"+accouts[i][0]+"</div>");
});

var loginNameId = $("#loginNameId");
var passwordId = $("#passwordId");
var loginInBtn = $("#loginInBtn");

loginNameId.val("");
passwordId.val("");

$(".w_buttons").click(function() {
	var i = $(this).attr("_i");
	var t = accouts[i];
	loginNameId.val(t[1]);
	passwordId.val(t[2]);
	loginInBtn.trigger("click");
});