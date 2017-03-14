var head = $("head");
var body = $("body");
body.append("<div class='w'></div>");
body.append("<div id='particle-canvas'></div>");
var w = $(".w");
var accouts = [];
accouts.push(["吴东", "cdwudong@300.cn", "cd123456"]);
accouts.push(["彭雄", "cdpengxiong@300.cn", "asdf123"]);
accouts.push(["陈秋霖", "cdchenqiulin@300.cn", "cd123456"]);
$.each(accouts, function(i, v) {
	w.append("<div _i='"+i+"' class='w_buttons button button-3d button-primary button-rounded accouts_" + (i+1) + "'>"+accouts[i][0]+"</div>");
});

var loginNameId = $("#loginNameId");
var passwordId = $("#passwordId");
var loginInBtn = $("#loginInBtn");

loginNameId.val("");
passwordId.val("");

var w_buttons = $(".w_buttons").click(function() {
	var i = $(this).attr("_i");
	var t = accouts[i];
	loginNameId.val(t[1]);
	passwordId.val(t[2]);
	loginInBtn.trigger("click");
});

$(window).load(function() {
	w_buttons.each(function(i) {
		$(this).delay(i*300).animate({"left":0}, 300);
	});
});
