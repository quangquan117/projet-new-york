//template

export const Description = {
    Image: "./asset/new-york.jpg",
    Ville: `New York est une ville composée de 5 arrondissements à l'embouchure du fleuve Hudson et de l'océan Atlantique. 
    En son centre se trouve Manhattan, un arrondissement densément peuplé faisant partie des principaux centres commerciaux, 
    financiers et culturels du monde. Ses sites incontournables comprennent des gratte-ciel comme l'Empire State Building et 
    l'immense Central Park. Le théâtre de Broadway est situé sur Times Square<br>`,
    Météo: "6°C, vent O à 6 km/h, 68 % d'humidité weather.com<br>",
    quartier: "Harlem, Upper East Side, West Village, Flushing, SoHo, PLUS<br>",
    population: "8,468 millions (2021)<br>",
    superficie: "40° 42′ 51″ nord, 74° 00′ 21″ ouest"
};

export const template = {
    el: document.querySelector("section"),
    printF() {
        return this.el.innerHTML += `
                                    <ul>
                                        <li><img src="${Description.Image}" alt="Image de New York" itemprop="image"></li>
                                        <li><span aria-hidden="true"><ion-icon name="logo-amazon"></ion-icon></span><b>Description :</b> ${Description.Ville}</li>
                                        <li><span aria-hidden="true"><ion-icon name="logo-google-playstore"></ion-icon></span><b>Météo :</b> ${Description.Météo}</li>
                                        <li><span aria-hidden="true"><ion-icon name="logo-discord"></ion-icon></span><b>Quartier :</b> ${Description.quartier}</li>
                                        <li><span aria-hidden="true"><ion-icon name="logo-pinterest"></ion-icon></span><b>Population :</b> ${Description.population}</li>
                                        <li><span aria-hidden="true"><ion-icon name="logo-paypal"></ion-icon></span><b>Coordonnées :</b> ${Description.superficie}</li>
                                    </ul>
                                    `;
    }
};