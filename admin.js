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
        title: "HB Reality",
        imgURL: "https://images.prop24.com/263261108/Crop526x328",
        price: 2595000,
        location: "Sandton Central",
        bedrooms: 2,
        bathrooms: 2,
        garage: 2,
        acres: 136,
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

function showAdminProperties() {
  properties.forEach((property) => {
    document.getElementById("table").innerHTML += `<tr>
    <td>${property.id}</td>
    <td><img src="${property.imgURL}" width="100px"></td>
    <td>${property.title}</td>
    <td>R${property.price}</td>
    <td>${property.location}</td>
    <td>${property.bedrooms}</td>
    <td>${property.bathrooms}</td>
    <td>${property.garage}</td>
    <td>${property.acres} m<sup>2</sup></td>
    <td>${property.category}</td>
    <td><svg xmlns="http://www.w3.org/2000/svg" width="16" type="button" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
  </svg></td>
    <td><svg xmlns="http://www.w3.org/2000/svg" width="16" type="button" id="btnDelete" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
  </svg></td>
    </tr>`;
  });
}
showAdminProperties();

function findProperty() {
  //   let property = properties.find((property) => property.id === id);
  //   property.title = document.getElementById("search_input").value;

  let find_property = document.getElementById("search_input").value;
  properties.title === find_property;
}

document.querySelector(".btnSearch").addEventListener("click", findProperty());

function addProperties() {
  const property = {
    id: properties.length + 1,
    title: document.querySelector(".title").value,
    imgURL: document.querySelector(".imgURL").value,
    price: document.querySelector(".price").value,
    location: document.querySelector(".location").value,
    bedrooms: document.querySelector(".bedrooms").value,
    bathrooms: document.querySelector(".bathrooms").value,
    garage: document.querySelector(".garage").value,
    acres: document.querySelector(".acres").value,
    category: document.querySelector(".category").value,
  };

  properties.push(property);
  localStorage.setItem("properties", JSON.stringify(properties));
  showAdminProperties(properties);
}

document
  .querySelector(".btnAddProperty")
  .addEventListener("click", addProperties);

function deleteProperty(id) {
  properties = properties.filter((property) => {
    property.id !== id;
  });
  localStorage.setItem(JSON.stringify(properties));
  showAdminProperties();
}

document
  .querySelector("#btnDelete")
  .addEventListener("click", deleteProperty(id));
