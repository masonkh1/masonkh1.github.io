const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navlink");
const projectButtons = document.querySelectorAll(".project-button");
const projectContents = document.querySelectorAll(".project-content");

window.addEventListener('scroll', function() {
    let current = ""
    for (var section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(scrollY > sectionTop - 120){
            current = section.getAttribute('id');
        }
    }
    for (var navLink of navLinks) {
        navLink.classList.remove('active');
    }
    if (current) {
        this.document.getElementById(current + "-nav").classList.add('active');
    }
})


for (i = 0; i < projectButtons.length; i++) {
    
    projectButtons[i].addEventListener("click", function() {
        var id = this.id + "-content";
        var projectContent = document.getElementById(id);
        //Resets other element's heights
        for (element of projectContents) {
            if (element.id !== id) {
                element.style.maxHeight = null;
            }
        }
        //Sets max height of content element
        if (projectContent.style.maxHeight) {
            projectContent.style.maxHeight = null;
        } else {
            projectContent.style.maxHeight = projectContent.scrollHeight + "px";
        }
    } );
}