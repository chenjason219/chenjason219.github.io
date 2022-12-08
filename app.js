const reveal = () => {
    const contents = document.querySelectorAll('.content');

    for(let content of contents){
        let windowHeight = window.innerHeight;
        let elementTop = content.getBoundingClientRect().top;
        let elementVisible = 100;

        if(elementTop < windowHeight - elementVisible){
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    }
}

window.addEventListener("scroll", reveal);