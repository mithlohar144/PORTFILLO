var tablinks = document.getElementsByClassName("tab-links");
var taContents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for( let tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for( let taContent of taContents){
        taContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sideMenu = document.getElementById("sidemenu");

function openmenu() {
    sideMenu.style.right = "0";
}

function closemenu() {
    sideMenu.style.right = "-200px";
}

