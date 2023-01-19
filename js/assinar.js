const accordion = document.getElementsByClassName("content-container");

for (i = 0; i < accordion.length; i++){

    accordion[i].addEventListener("click", function(){
        this.classList.toggle("active");
    })

}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}