var num = 0;
function search() {
$(document).ready(function() {
if (num > 0)
$("#list").html("");
var input = document.getElementById("title").value;

 $.ajax({
				
				url: "http://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="+input+"&format=json",
                dataType: 'jsonp',
				success: function(send){
				var y = 0;
				data();
				function data() {
				var name = send.query.search[y].title;
				document.getElementById("list").innerHTML += "<div class=\"outline\">" 
				+ "<a href=\"http://en.wikipedia.org/wiki/" 
				+ name + "\">" + name + "</a>" + "<br>" 
				+ send.query.search[y].snippet + "..." + "</div>"; 
				if (y < send.query.search.length - 1) {
				y++;
				data();
				}
				num++;
				}
				}				
				});

});
}
