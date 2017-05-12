    $(document).ready(function() {
    	var inp = $("input:text") //grabs text input
        var kk = $('input:submit'); //will be used to check when submit button is clicked
        var text = "";
        
        kk.click(function() {
            var d = new Date();
            text = inp.val()+" - "+d.getSeconds()+ "<br/>" + text; //appends text with new line
            $("#page").html(text);
            return false; // returning false, for events like submit, this allows us to add events to same anchor tag without having the browser load new page
        });
    });
