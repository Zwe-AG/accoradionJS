// let name1  = document.getElementsByClassName('acctitle')[0];
// let name2  = document.getElementsByClassName('accontent')[0];

// name1.addEventListener("click",function(){
//     name2.classList.toggle("acco");
// })

var getAcctitles = document.getElementsByClassName("acctitle"); // HTML Collection 
var getAcccontents = document.querySelectorAll(".accontent"); // Node List

for (let x = 0; x < getAcctitles.length ; x++ ) {
    getAcctitles[x].addEventListener("click",myFunction);
    // want to be first active 
    if(getAcctitles[x].classList.contains("active")){
        getAcccontents[x].style.height = getAcccontents[0].scrollHeight + "px";
    }
}

function myFunction(e) {
    // console.log(this);
    // console.log(e.target);
    this.classList.toggle("active");
    var getcontent = this.nextElementSibling;
    // console.log(getcontent);
    if(getcontent.style.height){
        getcontent.style.height = null; // cannot set 0
    }else{
        // getcontent.style.height ='80px';
        getcontent.style.height = getcontent.scrollHeight + "px";
    }
  }
