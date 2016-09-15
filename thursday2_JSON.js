var button = document.getElementById('go');

button.addEventListener('click', function(){
    var textbox = document.getElementById('text');
    try {
        JSON.parse(textbox.value);
        textbox.style.color = "green";
        alert("this is terrific JSON");
    }
    catch(e) {
        textbox.style.color = "red";
        alert("this is not valid JSON");
    }
});
