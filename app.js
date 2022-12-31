//reveals projects section
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

//reveals projecTech
const observer =  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    })
})

const hiddenItems = document.querySelectorAll('.hidden');

hiddenItems.forEach((el) => observer.observe(el));

//when hovering a link
const links = document.querySelectorAll('a');
const mouth = document.querySelector('.mouth');
const eyebrows = document.querySelectorAll('.eyebrow');
const eyelids = document.querySelectorAll('.eyelid');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        mouth.classList.add('shockedMouth');
        eyebrows.forEach(eyebrow => {
            eyebrow.classList.add('shockedBrowLids');
        })
        eyelids.forEach(eyelid => {
            eyelid.classList.add('shockedBrowLids');
        })
    })
    link.addEventListener('mouseout', () => {
        mouth.classList.remove('shockedMouth');
        eyebrows.forEach(eyebrow => {
            eyebrow.classList.remove('shockedBrowLids');
        })
        eyelids.forEach(eyelid => {
            eyelid.classList.remove('shockedBrowLids');
        })
    })
})
