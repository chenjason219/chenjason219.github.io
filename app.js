const reveal = () => {
    const contents = document.querySelectorAll('.content');

    for(let content of contents){
        let windowHeight = window.innerHeight;
        let elementTop = content.getBoundingClientRect().top;
        let elementVisible = 100;

        if(elementTop < windowHeight - elementVisible){
            content.classList.add('active');
        }
    }
}

window.addEventListener("scroll", reveal);

const observer =  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    })
})

const hiddenItems = document.querySelectorAll('.hidden');

hiddenItems.forEach((el) => observer.observe(el));

