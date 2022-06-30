// ARRAY CONTAINING LIST OF PROPERTIES AS OBJECTS AND SAVED TO LOCALSTORAGE
// ************************************************************************
let properties = JSON.parse(localStorage.getItem("properties"))
  ? JSON.parse(localStorage.getItem("properties"))
  : [
      {
        id: 1,
        title: "Duarte Properties",
        imgURL: "https://images.prop24.com/286686511/Crop600x400",
        price: 3000000,
        location: "Parklands North, Blouberg",
        bedrooms: 4,
        bathrooms: 2,
        garage: 4,
        acres: 355,
        category: "House",
      },

      {
        id: 2,
        title: "SAPROPERTY.COM",
        imgURL: "https://images.prop24.com/286667951/Crop600x400",
        price: 7365600,
        location: "Table View",
        bedrooms: 3,
        bathrooms: 2,
        garage: 1,
        acres: 110,
        category: "Apartment",
      },

      {
        id: 3,
        title: "PROPERTY WORLD.co.za",
        imgURL: "https://images.prop24.com/284745335/Crop600x400",
        price: 6980000,
        location: "Atlantic Beach Golf Estate",
        bedrooms: 4,
        bathrooms: 2.5,
        garage: 4.5,
        acres: 707,
        category: "House",
      },

      {
        id: 4,
        title: "Listed By Owner",
        imgURL: "https://images.prop24.com/286358709/Crop526x328",
        price: 2595000,
        location: "Rondebosch",
        bedrooms: 2,
        bathrooms: 2,
        garage: 2,
        acres: 126,
        category: "Apartment",
      },

      {
        id: 5,
        title: "Dream Life Properties",
        imgURL: "https://images.prop24.com/285442918/Crop526x328",
        price: 3100000,
        location: "Roodepark Eco Estate",
        bedrooms: 3,
        bathrooms: 4,
        garage: 1,
        acres: 450,
        category: "House",
      },

      {
        id: 6,
        title: "Life Style Estates",
        imgURL: "https://images.prop24.com/281638167/Crop526x328",
        price: 9500000,
        location: "Silver Lakes Golf Estate",
        bedrooms: 6,
        bathrooms: 5.5,
        garage: 4,
        acres: 2696,
        category: "House",
      },

      {
        id: 7,
        title: "Seeff",
        imgURL: "https://images.prop24.com/286770978/Crop600x400",
        price: 1975000,
        location: "Gallo Manor",
        bedrooms: 3,
        bathrooms: 2,
        garage: 2,
        acres: 12725,
        category: "Townhouse",
      },

      {
        id: 8,
        title: "RE/MAX",
        imgURL: "https://images.prop24.com/286752687/Crop600x400",
        price: 5900000,
        location: "Dainfern Valley Estate",
        bedrooms: 6,
        bathrooms: 4.5,
        garage: 5,
        acres: 1250,
        category: "House",
      },

      {
        id: 9,
        title: "Vered Estates",
        imgURL: "https://images.prop24.com/286743137/Crop600x400",
        price: 4295000,
        location: "Fourways Gardens",
        bedrooms: 5,
        bathrooms: 3.5,
        garage: 4,
        acres: 1077,
        category: "House",
      },
    ];

// LOOPING OVER THE ARRAY
//  **********************************************************************************************************
function showListings() {
  document.querySelector(".owl-carousel").innerHTML = " ";
  properties.forEach((property) => {
    document.querySelector(".owl-carousel").innerHTML += `
    <div class="card">
    <img src="${property.imgURL}" class="card-img-top">
    <div class="card-body">
    <h6 class="card-text">${property.title}</h6>
    <p style="color: black; text-align: left; font-size: small;"><i>${property.location}<i/></p>
    <span style="color: black; text-align: left; font-size: small;">${property.bedrooms} bedrooms</span> |
    <span style="color: black; text-align: left; font-size: small;">${property.bathrooms} bathrooms</span> |
    <span style="color: black; text-align: left; font-size: small;">${property.garage} garage(s)</span> |
    <span style="color: black; text-align: left; font-size: small;">${property.acres} m<sup>2</sup></span>
    <p style="color: black; text-align: left; font-size: small;"><b>${property.category}</b></p>
    <p style="color: black; text-align: left; font-size: medium;"><b>R${property.price}</b></p>
  </div>
    </div>`;
  });
}

// DISPLAYING ARRAY ON THE SCREEN
// ******************************
showListings();
