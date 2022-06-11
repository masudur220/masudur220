// portfolio page
// chatbox field
var inputText = document.getElementById('inputText').value;
// var inputText = 'ui';
var textCont = document.getElementById('textCont');
function sentText() {
    console.log(inputText);
    textCont.innerHTML += "<p class='right'>" + inputText + "</p>";

}
