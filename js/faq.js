main.js.file;
var faq =document.getElementsByClassName ("faq-page");
var i;
for (i=0; i < faq.length; i++);
faq[i].addEventListener("click", function () {
    this.classlist.toggle("active");
var body = this.nextElementSibling;
if (body.style.display === "block") {
    body.style.display ="none";
    
} else {
    body.style.display ="block";
}
});

