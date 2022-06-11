
        var navCont = document.getElementsByClassName('navCont')[0];
        function nav(){
            if (navCont.style.display == "block") {
                navCont.style.display = "none";
            } else {
                navCont.style.display = "block";               
            }
        }

        // faq hidden display section 
        var faq = document.getElementsByClassName('faqAns');

        function faqset(x) {
            if(faq[x].style.display == 'none'){
                faq[x].style.display = 'block';
            }else{
                faq[x].style.display = 'none';
            }
        }

        // portfolio page


        // chatbox field
        function getValue(){
            let inputText = document.getElementById('inputText').value;
            document.getElementById('textCont').innerHTML += "<p class = 'right'>" + inputText + "</p>";
        }


        // load pages

        function goo() {
            document.open('./index.html');
        }





     