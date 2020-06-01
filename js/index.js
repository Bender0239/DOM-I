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
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Put text in a tags

let allATags = document.querySelectorAll('a');

//console.log(allATags);

allATags[0].textContent = "Services";
allATags[1].textContent = "Product";
allATags[2].textContent = "Vision";
allATags[3].textContent = "Features";
allATags[4].textContent = "About";
allATags[5].textContent = "Contact";

//Add h1 text 

let headerText = document.querySelector('h1');

headerText.textContent = "DOM IS AWESOME";

//Add text to button

let buttonText = document.querySelector("button");

buttonText.textContent = "Get Started";

let headerImg = document.querySelector("#cta-img");

headerImg.src = "img/header-img.png";

//Change the h4 elements 

let allH4 = document.querySelectorAll('h4');

//Add the right text

allH4[0].textContent = "Features";
allH4[1].textContent = "About";
allH4[2].textContent = "Services";
allH4[3].textContent = "Product";
allH4[4].textContent = "Vision";
allH4[5].textContent = "Contact";

//Add main img

let mainImg = document.querySelector("#middle-img");

mainImg.src = "img/mid-page-accent.jpg";

//Add text to paragraphs 

let allP = document.querySelectorAll('p');

allP[0].textContent = "Technology research & development lean startup facebook conversion crowdsource pitch release incubator mass market niche market disruptive creative MVP. Virality gamification product management lean startup A/B testing channels value proposition research & development social media seed round supply chain. Technology conversion handshake.";
allP[1].textContent = "Technology research & development lean startup facebook conversion crowdsource pitch release incubator mass market niche market disruptive creative MVP. Virality gamification product management lean startup A/B testing channels value proposition research & development social media seed round supply chain. Technology conversion handshake.";
allP[2].textContent = "Technology research & development lean startup facebook conversion crowdsource pitch release incubator mass market niche market disruptive creative MVP. Virality gamification product management lean startup A/B testing channels value proposition research & development social media seed round supply chain. Technology conversion handshake.";
allP[3].textContent = "Technology research & development lean startup facebook conversion crowdsource pitch release incubator mass market niche market disruptive creative MVP. Virality gamification product management lean startup A/B testing channels value proposition research & development social media seed round supply chain. Technology conversion handshake.";
allP[4].textContent = "Technology research & development lean startup facebook conversion crowdsource pitch release incubator mass market niche market disruptive creative MVP. Virality gamification product management lean startup A/B testing channels value proposition research & development social media seed round supply chain. Technology conversion handshake.";
allP[5].textContent = "6969 W Dingle St. Somewhere, USA";
allP[6].textContent = "1 (888) 888-8888";
allP[7].textContent = "sales@greatidea.io";
allP[8].textContent = "Copyright Great Idea! 2018";


//Change color of a tags

allATags[0].style.color = "green";
allATags[1].style.color = "green";
allATags[2].style.color = "green";
allATags[3].style.color = "green";
allATags[4].style.color = "green";
allATags[5].style.color = "green";

//Add a tag to nav

let navEl = document.querySelector('nav');

let newA = document.createElement('a');

newA.textContent = "New A Tag";

//console.log(newA);

navEl.appendChild(newA);