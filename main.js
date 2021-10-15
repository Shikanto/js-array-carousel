const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const mainImg = document.querySelector(".main-img");
const textImg = document.querySelector(".img-text");
const sidebarContainer = document.querySelectorAll(".sidebar-container-img");
const sidebar = document.querySelector(".sidebar");


let currentIndex = 1;
let indexSidebarContainer = 0;

/* PRENDO LE IMMAGINI E LE METTO NELL'HTML */

for (let i = 0; i < items.length; i++) {

    const urlImgTaken = items[i];

    let classActive = "";

    if (i === currentIndex) {
        classActive = "border-active"; 
    }

        let tagImg = `<img class="sidebar-img ${classActive}" src="${urlImgTaken}" alt="">
                    <div class="overlay"></div>`;
        sidebarContainer[indexSidebarContainer].innerHTML += tagImg;
        
        let mainHeroImg = `<img class="sidebar-img ${classActive}" src="${urlImgTaken}" alt="">`;
        let titleImg = `<h3 class="titolo"> ${title[i]}</h3>`;
        let descrpitionImg = `<span class="descrizione-img"> ${text[i]}</span>`;

        if (classActive === "border-active") {
            
            textImg.innerHTML += titleImg;
            textImg.innerHTML += descrpitionImg;
            mainImg.innerHTML += mainHeroImg;
        
        }

    indexSidebarContainer++;
   
}

const mainActiveImg = mainImg.querySelector(".border-active");
mainActiveImg.classList.remove("border-active");
const titleMainImg = document.querySelector(".titolo");
const descriptionMainImg = document.querySelector(".descrizione-img");


/* FRECCE CLICK */

const arrowUp = document.querySelector(".arrow-up");
const arrowDown = document.querySelector(".arrow-down");

/* FRECCIA SU */

arrowUp.addEventListener("click", function () {

/* L'IMG ATTUALMENTE ATTIVA PER LA SUA CONDIZIONE DI "ATTIVA" */    

    const activeImg = sidebar.querySelector(".border-active");
    activeImg.classList.remove("border-active");

    currentIndex--;

/* CONDIZIONE PER FAR RICOMINCIARE IL CICLO DELLE IMMAGINI */   
    
    if (currentIndex < 0) {
        currentIndex = items.length -1;
    }

/* CAMBIO IMG ATTIVA SULLA SIDEBAR */

    const imgTags = sidebar.querySelectorAll("img");
    const newActiveImg = imgTags[currentIndex];
    newActiveImg.classList.add("border-active");
    
/* CAMBIO IMG GRANDE ATTIVA */

    let srcwMainImg = items[currentIndex]; 
    mainActiveImg.src = srcwMainImg;
    
/* AGGIUNGO IL TITOLO ALL'IMG GRANDE */

    let newMainTitleImg = `<h3>${title[currentIndex]}</h3>`;
    titleMainImg.innerHTML = newMainTitleImg;
    
/* AGGIUNGO LA DESCRIZIONE ALL'IMG GRANDE */ 

    let newDescriptionMainImg = `<span>${text[currentIndex]}</span>`;
    descriptionMainImg.innerHTML = newDescriptionMainImg;   
    
});

/* FRECCIA GIU */

arrowDown.addEventListener("click", function () {

/* L'IMG ATTUALMENTE ATTIVA PER LA SUA CONDIZIONE DI "ATTIVA" */    

    const activeImg = sidebar.querySelector(".border-active");
    activeImg.classList.remove("border-active");

    currentIndex++;

/* CONDIZIONE PER FAR RICOMINCIARE IL CICLO DELLE IMMAGINI */
    
    if (currentIndex > items.length -1) {
        currentIndex = 0;
    }

/* CAMBIO IMG ATTIVA SULLA SIDEBAR */

    const imgTags = sidebar.querySelectorAll("img");
    const newActiveImg = imgTags[currentIndex];
    newActiveImg.classList.add("border-active");
  
/* CAMBIO IMG GRANDE ATTIVA */   

    let srcwMainImg = items[currentIndex]; 
    mainActiveImg.src = srcwMainImg;

/* AGGIUNGO IL TITOLO ALL'IMG GRANDE */    

    let newMainTitleImg = `<h3>${title[currentIndex]}</h3>`;
    titleMainImg.innerHTML = newMainTitleImg;
 
/* AGGIUNGO LA DESCRIZIONE ALL'IMG GRANDE */      

    let newDescriptionMainImg = `<span>${text[currentIndex]}</span>`;
    descriptionMainImg.innerHTML = newDescriptionMainImg;
    
});

