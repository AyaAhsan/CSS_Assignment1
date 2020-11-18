let toggleNavStatus = false;

function toggleNav() {
    let gitNavUl= document.querySelector('.navUl')

    if (toggleNavStatus == false){
        gitNavUl.style.display= "none";
        toggleNavStatus=true;
    }
    
    else if (toggleNavStatus == true) {
        gitNavUl.style.display="block";
        toggleNavStatus=false;
    }
} 