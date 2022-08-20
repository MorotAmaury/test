// typing animation

var typed = new Typed(".typing", {
    strings:["","Web Developer","Blockchain Developer"],
    typeSpeed:100,
    BackSpeed:100,
    loop:true
})

// active animation 

const isInViewport = function (ele) {
    const rect = ele.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};



// check if the element is on the viewport

    // section
const home = document.getElementById('home')
const about = document.getElementById('--about')
const about2 = document.getElementById('--about2')
const service = document.getElementById('--service')
const portfolio = document.getElementById('--portfolio')
const contact = document.getElementById('--contact')
const contact2 = document.getElementById('--contact2')

    // in nav

const navHome = document.getElementById('1')
const navAbout = document.getElementById('2')
const navService= document.getElementById('3')
const navPortfolio = document.getElementById('4')
const navContact = document.getElementById('5')


window.addEventListener("scroll", () => {
    
    if(isInViewport(home))
    {
    navHome.classList.add('active')
}
else
{
    navHome.classList.remove('active')
}
if(isInViewport(about))
{
    navAbout.classList.add('active')
}
else if(isInViewport(about2))
{
    navAbout.classList.add('active')
}
else
{
    navAbout.classList.remove('active')
}
if(isInViewport(service))
{
    navService.classList.add('active')
}
else
{
    navService.classList.remove('active')
}
if(isInViewport(portfolio))
{
    navPortfolio.classList.add('active')
}
else
{
    navPortfolio.classList.remove('active')
}
if(isInViewport(contact))
{
    navContact.classList.add('active')
}
else
{
    navContact.classList.remove('active')
}
if(isInViewport(contact2))
{
    navContact.classList.add('active')
}
else
{
    navContact.classList.remove('active')
}
})




