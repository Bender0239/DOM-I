const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent['nav']['img-src'])

const allNavLinks = document.querySelectorAll('a')
allNavLinks[0].textContent = siteContent['nav']['nav-item-1']
allNavLinks[1].textContent = siteContent['nav']['nav-item-2']
allNavLinks[2].textContent =siteContent['nav']['nav-item-3']
allNavLinks[3].textContent = siteContent['nav']['nav-item-4']
allNavLinks[4].textContent = siteContent['nav']['nav-item-5']
allNavLinks[5].textContent = siteContent['nav']['nav-item-6']

const ctaHeader = document.querySelector('h1')
ctaHeader.textContent = siteContent['cta']['h1']

const ctaButton = document.querySelector('button')
ctaButton.textContent = siteContent['cta']['button']

const ctaImg = document.getElementById('cta-img')
ctaImg.setAttribute('src', siteContent['cta']['img-src'])

const topContent = document.querySelector('.top-content')
const content1H4 = topContent.firstElementChild.firstElementChild
const content1P = topContent.firstElementChild.lastElementChild
const content2H4 = topContent.lastElementChild.firstElementChild
const content2P = topContent.lastElementChild.lastElementChild

content1H4.textContent = siteContent['main-content']['features-h4']
content1P.textContent = siteContent['main-content']['features-content']

content2H4.textContent = siteContent['main-content']['about-h4']
content2P.textContent = siteContent['main-content']['about-content']

const midImg = document.getElementById('middle-img')
midImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

const bottomCon1 = document.querySelector('.bottom-content div:nth-child(1)')

const firstBottomH4 = bottomCon1.firstElementChild
const firstBottomP = bottomCon1.lastElementChild

const bottomCon2 = document.querySelector('.bottom-content div:nth-child(2)')

const secondBottomH4 = bottomCon2.firstElementChild
const secondBottomP = bottomCon2.lastElementChild

const bottomCon3 = document.querySelector('.bottom-content div:nth-child(3)')

const thirdBottomH4 = bottomCon3.firstElementChild
const thirdBottomP = bottomCon3.lastElementChild

firstBottomH4.textContent = siteContent['main-content']['services-h4']
firstBottomP.textContent = siteContent['main-content']['services-content']

secondBottomH4.textContent = siteContent['main-content']['product-h4']
secondBottomP.textContent = siteContent['main-content']['product-content']

thirdBottomH4.textContent = siteContent['main-content']['vision-h4']
thirdBottomP.textContent = siteContent['main-content']['vision-content']

const contact = document.querySelector('.contact')

const contactH4 = contact.querySelector('h4')
contactH4.textContent = siteContent['contact']['contact-h4']

const contactP1 = contact.querySelector('.contact p:nth-child(2)')
contactP1.textContent = siteContent['contact']['address']

const contactP2 = contact.querySelector('.contact p:nth-child(3)')
contactP2.textContent = siteContent['contact']['phone']

const contactP3 = contact.querySelector('.contact p:nth-child(4)')
contactP3.textContent = siteContent['contact']['email']

const footer = document.querySelector('footer')

const footerP = footer.querySelector('p')
footerP.textContent = siteContent['footer']['copyright']

const newContactP1 = document.createElement('p')
newContactP1.textContent = 'aye last'
contact.appendChild(newContactP1)

const newContactP2 = document.createElement('p')
newContactP2.textContent = 'aye first'
contact.prepend(newContactP2)

allNavLinks.forEach(greenColor => {
  return greenColor.style.color = 'green'
})