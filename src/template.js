//template

const Description = ({
    Image : "./asset/new-york.jpg",
    Ville : `New York est une ville composée de 5 arrondissements à l'embouchure du fleuve Hudson et de l'océan Atlantique. 
    En son centre se trouve Manhattan, un arrondissement densément peuplé faisant partie des principaux centres commerciaux, 
    financiers et culturels du monde. Ses sites incontournables comprennent des gratte-ciel comme l'Empire State Building et 
    l'immense Central Park. Le théâtre de Broadway est situé sur Times Square<br>`,
    Météo : "6°C, vent O à 6 km/h, 68 % d'humidité weather.com<br>",
    Quartier : "Harlem, Upper East Side, West Village, Flushing, SoHo, PLUS<br>",
    Population : "8,468 millions (2021)<br>",
    Superficie : "40° 42′ 51″ nord, 74° 00′ 21″ ouest"
})

const Icon = ({
    Ville : `<span aria-hidden="true"><ion-icon name="logo-amazon"></ion-icon></span>`,
    Météo : `<span aria-hidden="true"><ion-icon name="cloud-outline"></ion-icon></span>`,
    Quartier : `<span aria-hidden="true"><ion-icon name="logo-discord"></ion-icon></span>`,
    Population : `<span aria-hidden="true"><ion-icon name="logo-pinterest"></ion-icon></span>`,
    Superficie : `<span aria-hidden="true"><ion-icon name="logo-paypal"></ion-icon></span>`
})

export const template = {
    el : document.querySelector("section"),
    printF(){
        this.el.innerHTML += "<ul>"
        for (let index in Description){
            if (index == "Image")
                this.el.innerHTML += `<li itemprop="image"><img src="${Description[index]}" alt="Image de New York" itemprop="image"></li>`
            else
                this.el.innerHTML += `<li itemprop="description">${Icon[index]}<b> ${index} :</b> ${Description[index]}</li>`
        }
        this.el.innerHTML += "</ul>"
        return this.el.innerHTML
    }
}