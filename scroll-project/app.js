const date = document.getElementById('date');
date.textContent = new Date().getFullYear();

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    const linksContainerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height;

    if(linksContainerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`
    }else{
        linksContainer.style.height = 0;
    }
})
const navbar = document.querySelector('#nav');
const toplink = document.querySelector('.top-link');


// FIXED NAVBAR
window.addEventListener('scroll', function(){
    const windowHeight = window.scrollY;
    const navHeight = navbar.getBoundingClientRect().height;

    if( windowHeight > navHeight ){
        navbar.classList.add('fixed-nav')
    }else{
        navbar.classList.remove('fixed-nav')
    }

    if (windowHeight > 500){
        toplink.classList.add('show-link');
    }else{
        toplink.classList.remove('show-link')
    }
})

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        e.prevent.default()

        // navigate to specific spots
        const id = e.currentTarget.getAttribute('href').slice(1)
        const element = document.getElementById(id)

        // calculate heights
        const navHeight = navbar.getBoundingClientRect().height;
        const linksContainerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;

        if (!fixedNav){
            position = position - navHeight;
        }
        if(navHeight > 82){
            position =  position + linksContainerHeight;
        }


        console.log(position);
        window.scrollTo({
            left: 0,
            top: position,
        })
        linksContainer.style.height = 0;
    })
})