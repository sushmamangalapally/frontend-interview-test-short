var text = "";
document.getElementsByTagName("input")[1].onclick = function(){ 
	//above allows us to grab submit type and when clicked, it is triggered
	var inp = document.getElementsByName("post")[0].value; //grabs text input
	var d = new Date();
    text = inp +" - "+d.getSeconds()+ "<br/>" + text; //appends text with new line
    document.getElementById("page").innerHTML = text; 
    return false; // returning false, for events like submit, this allows us to add events to same anchor tag without having the browser load new page
}
