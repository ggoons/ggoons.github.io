var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

window.onscroll = function() {
	checkStickyClass();
};

var sidebar = document.getElementById("sidebar");
var rightbar = document.getElementById("rightbar");
var topOfSidebar = sidebar.offsetTop;

function checkStickyClass() {
  if (window.pageYOffset >= topOfSidebar) {
    sidebar.classList.add("sticky");
    rightbar.classList.add("sticky");
  } else {
    sidebar.classList.remove("sticky");
    rightbar.classList.remove("sticky");
  }
}

var modal = document.getElementById("popupMenu");

modal.onclick = function() {
	modal.style.display = "none";
}

function open_menu() {
	modal.style.display = "block";
}

function close_menu() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function isEmail(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}

function getUserId() {
	var ipt = $("#email");
	var email = ipt.val();
	if (isEmail(email)) {
		var url = "/emails/userid/"+encodeURI(email);
		$.getJSON(url, function(obj) {
			console.log("obj => "+JSON.stringify(obj));
			if (!!obj && !!obj.userId) {
				alert(obj.userId);
			} else {
				alert("Error: "+JSON.stringify(obj));
			}
		});
	
	} else {
		alert("Invalid email address: "+email);
		ipt.select();
		ipt.focus();
	}

	return false;
}

function download() {
	$.getJSON("/downloads/download", function(obj) {
		console.log("/downloads/download: ", obj);
		location.href = "https://www.dropbox.com/s/x9hczypgbch1sfs/tg-cli-1.0.0-beta2.zip?dl=1";
		//"https://www.dropbox.com/s/05k5oqtmnwag8ey/tg-cli-1.0.beta1.zip?dl=1";
		//"https://drive.google.com/uc?export=download&id=1p-hmFKF8q4E47eZpNRbXqLjotXLeuDnE";
	});
}
