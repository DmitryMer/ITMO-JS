//ДЗ 8 задание 1

var box = document.getElementsByTagName("DIV");
for (var i = 0; i < box.length; i++)
    box[i].onclick = function() {
    if (this.style.backgroundColor == "") {
    	this.style.backgroundColor = "green";
    } else if (this.style.backgroundColor == "green") {
    	this.style.backgroundColor = "red";
    } else {
    	this.style.backgroundColor = "";
    }
};