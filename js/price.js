const allPrice = ["rub", "mdl", "eur"];
let currentPrice = localStorage.getItem("priceOfServices") || "mdl";
const priceButtons = document.querySelectorAll("[data-btn]");
let currentText = {};



const priceTexts = {

    "vizition": {
        rub: "💵 1 654 – 4 135 ₽",
        mdl: "💵 400 – 1 000 MDL",
        eur: "💵 20 – 50 €"
    },

    "landing": {
        rub: "💵 2 067 – 14 474 ₽",
        mdl: "💵 500 – 3500 MDL",
        eur: "💵 24 – 174 €"
    },

    "portfolio": {
        rub: "💵 2 894 – 8 271 ₽",
        mdl: "💵 700 – 2 000 MDL",
        eur: "💵 34 – 99 €"
    },

    "catalog": {
        rub: "💵 2 067 – 24 813 ₽",
        mdl: "💵 500 – 6000 MDL",
        eur: "💵 24 – 298 €"
    },

    "carparative": {
        rub: "💵 10 339 – 62 034 ₽",
        mdl: "💵 2 500 – 15 000 MDL",
        eur: "💵 124 – 747 €"
    },

    "minisite": {
        rub: "💵 1 654 – 6 203 ₽",
        mdl: "💵 400 – 1 500 MDL",
        eur: "💵 20 – 74 €"
    }
};

currentText = priceTexts;

function changePrice() {
    for (const key in currentText) {
       const elem = document.querySelector(`[data-price=${key}]`);
       if (elem) {
        elem.textContent = currentText[key][currentPrice];
       }
    }
}

changePrice();

priceButtons.forEach((btn=>{
    btn.addEventListener('click', (event)=>{
        currentPrice = event.target.dataset.btn;
        localStorage.setItem("priceOfServices", event.target.dataset.btn)
        resetActive(priceButtons, "header_btn_active")
        btn.classList.add("header_btn_active");
        changePrice();
    })
}));

function resetActive(arr, activeClass){
    arr.forEach(elem=>{
        elem.classList.remove(activeClass);
    })
}

function checkActivePriceButton() {
    switch (currentPrice) {
        case "rub":
            document.querySelector('[data-btn="rub"]').classList.add("header_btn_active");
            break;

        case "mdl":
            document.querySelector('[data-btn="mdl"]').classList.add("header_btn_active");
            break;

        case "eur":
            document.querySelector('[data-btn="eur"]').classList.add("header_btn_active");
            break;
    
        default:
            document.querySelector('[data-btn="rub"]').classList.add("header_btn_active");
            break;
    }
}

checkActivePriceButton();