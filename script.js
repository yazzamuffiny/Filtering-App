const properties = [
    {
        id: 1,
        name: "Cozy Cottage",
        location: "Gisborne",
        price: "$200,000",
        bedrooms: 2,
        bathrooms: 2,
        image: "https://source.unsplash.com/category/house/?cozy+cottage",
        description: `Welcome to "Cozy Cottage" nestled in the serene locale of Gisborne, offering a tranquil escape from the hustle and bustle of urban life. Priced at a steal for $200,000, this charming abode boasts 2 snug bedrooms and 2 immaculate bathrooms, ensuring comfort and convenience for its lucky inhabitants.
        <br></br>Picture yourself unwinding in the cozy ambiance of this cottage, where every corner exudes warmth and relaxation. Whether you're curling up with a book by the fireplace or savoring a cup of tea on the quaint porch, each moment spent here promises to be nothing short of blissful.`
    },
    {
        id: 2,
        name: "Modern Loft",
        location: "Bay Of Plenty",
        price: "$350,000",
        bedrooms: 3,
        bathrooms: 2.5,
        image: "https://source.unsplash.com/category/house/?modern+loft"
    },
    {
        id: 3,
        name: "Seaside Villa",
        location: "Northland",
        price: "$1,000,000",
        bedrooms: 4,
        bathrooms: 3,
        image: "https://source.unsplash.com/category/house/?seaside+villa"
    },
    {
        id: 4,
        name: "Rustic Cabin",
        location: "Marlborough",
        price: "$150,000",
        bedrooms: 1,
        bathrooms: 1,
        image: "https://source.unsplash.com/category/house/?rustic+cabin"
    },
    {
        id: 5,
        name: "Urban Apartment",
        location: "Wellington",
        price: "$500,000",
        bedrooms: 2,
        bathrooms: 1.5,
        image: "https://source.unsplash.com/category/house/?urban+apartment"
    },
    {
        id: 6,
        name: "Luxury Penthouse",
        location: "Nelson",
        price: "$2,200,000",
        bedrooms: 4,
        bathrooms: 3.5,
        image: "https://source.unsplash.com/category/house/?luxury+penthouse"
    },
    {
        id: 7,
        name: "Beachfront Villa",
        location: "Bay Of Plenty",
        price: "$1,800,000",
        bedrooms: 5,
        bathrooms: 4,
        image: "https://source.unsplash.com/category/house/?beachfront+villa"
    },
    {
        id: 8,
        name: "Countryside Estate",
        location: "Canterbury",
        price: "$1,600,000",
        bedrooms: 6,
        bathrooms: 5,
        image: "https://source.unsplash.com/category/house/?countryside+estate"
    },
    {
        id: 9,
        name: "Downtown Condo",
        location: "Auckland",
        price: "$700,000",
        bedrooms: 2,
        bathrooms: 2,
        image: "https://source.unsplash.com/category/house/?downtown+condo"
    },
    {
        id: 10,
        name: "Mountain Chalet",
        location: "Otago",
        price: "$900,000",
        bedrooms: 3,
        bathrooms: 2.5,
        image: "https://source.unsplash.com/category/house/?mountain+chalet"
    },
    {
        id: 11,
        name: "Luxury Penthouse",
        location: "Nelson",
        price: "$2,200,000",
        bedrooms: 4,
        bathrooms: 3.5,
        image: "https://source.unsplash.com/category/house/?luxury+penthouse"
    },
    {
        id: 12,
        name: "Beachfront Villa",
        location: "Bay Of Plenty",
        price: "$1,800,000",
        bedrooms: 5,
        bathrooms: 4,
        image: "https://source.unsplash.com/category/house/?beachfront+villa"
    },
    {
        id: 13,
        name: "Countryside Estate",
        location: "Canterbury",
        price: "$1,600,000",
        bedrooms: 6,
        bathrooms: 5,
        image: "https://source.unsplash.com/category/house/?countryside+estate"
    },
    {
        id: 14,
        name: "Downtown Condo",
        location: "Auckland",
        price: "$700,000",
        bedrooms: 2,
        bathrooms: 2,
        image: "https://source.unsplash.com/category/house/?downtown+condo"
    },
    {
        id: 15,
        name: "Mountain Chalet",
        location: "Otago",
        price: "$900,000",
        bedrooms: 3,
        bathrooms: 2.5,
        image: "https://source.unsplash.com/category/house/?mountain+chalet"
    },
    {
        id: 16,
        name: "Sunny Bungalow",
        location: "Hawkes Bay",
        price: "$280,000",
        bedrooms: 3,
        bathrooms: 2,
        image: "https://source.unsplash.com/category/house/?sunny+bungalow"
    },
    {
        id: 17,
        name: "Oceanview Condo",
        location: "West Coast",
        price: "$420,000",
        bedrooms: 2,
        bathrooms: 1.5,
        image: "https://source.unsplash.com/category/house/?oceanview+condo"
    },
    {
        id: 18,
        name: "Country Farmhouse",
        location: "Manawatu",
        price: "$550,000",
        bedrooms: 4,
        bathrooms: 3,
        image: "https://source.unsplash.com/category/house/?country+farmhouse"
    },
    {
        id: 19,
        name: "City Penthouse",
        location: "Taranaki",
        price: "$1,200,000",
        bedrooms: 3,
        bathrooms: 2,
        image: "https://source.unsplash.com/category/house/?city+penthouse"
    },
    {
        id: 20,
        name: "Lakeside Retreat",
        location: "Waikato",
        price: "$780,000",
        bedrooms: 5,
        bathrooms: 4,
        image: "https://source.unsplash.com/category/house/?lakeside+retreat"
    }
];


// Get input elements - our filters
const locationFilter = document.getElementById("location");
const bedroomsFilter = document.getElementById("bedrooms");
const bathroomsFilter = document.getElementById("bathrooms");
const priceMin = document.getElementById("priceMin");
const priceMax = document.getElementById("priceMax");

// Onchange Event on each filter:
//location
locationFilter.addEventListener("change", function() {
    console.dir(locationFilter.value);
    //initial population of cards
    filterAndPopulateResults();
});

//bedroom
bedroomsFilter.addEventListener("change", function() {
    console.dir(bedroomsFilter.value);
    //initial population of cards
    filterAndPopulateResults();
});

//bathroom
bathroomsFilter.addEventListener("change", function() {
    console.dir(bathroomsFilter.value);
    //initial population of cards
    filterAndPopulateResults();
});

//price min
priceMin.addEventListener("change", function() {
    console.dir(priceMin.value);
    //initial population of cards
    filterAndPopulateResults();
});

//price max
priceMax.addEventListener("change", function() {
    console.dir(priceMax.value);
    //initial population of cards
    filterAndPopulateResults();
});

//filter results - return an array of filtered products
function filterProperties() {
    const filteredProperties = properties.filter(property => {
        //check if location matches
        const propertyLocation = property.location.toLowerCase();
        const filterValue = locationFilter.value.toLowerCase();
        //check that it doesn't match, so ti returns false and doesn't add to the array
        if (filterValue && !propertyLocation.includes(filterValue)) {
            return false;  //if property locations doesn't include filter value return false
        } 

        //check if numbers of bedroom match
        if (bedroomsFilter.value && parseInt(property.bedrooms) <= parseInt(bedroomsFilter.value)) {
            return false;  //if values are less than or equal too, return false, cus we want greater than
        } 

        //check if number of bathrooms match
        if (bathroomsFilter.value && parseFloat(property.bathrooms) <= parseFloat(bathroomsFilter.value)) {
            return false; 
        }

        //check if price falls within specified range
        const priceValue = parseFloat(property.price.replace(/\$/g, '').replace(/,/g, '')); //removes $ and comma form price, makes the number a floating number
        const minPrice = parseFloat(priceMin.value);
        const maxPrice = parseFloat(priceMax.value);
        if ((minPrice && priceValue < minPrice) || (maxPrice && priceValue > maxPrice)) {
            return false;
        }

        // if all the conditions pass, include th property within the array
        return true
    });

    //return the filtered properties array - can access it outside
    return filteredProperties;
}



//sort results - sort by price - lowest to highest


//filter and populate results
function filterAndPopulateResults () {
    const filteredProperties = filterProperties();
    populateResults(filteredProperties);
}

//initial population of cards
filterAndPopulateResults();

//populate cards function
function populateResults(filteredResults) {
    //get the results div
    const resultsDiv = document.getElementById("results");
    //clear previous results
    resultsDiv.innerHTML = "";

    //check if filtered properties is empty
    if (filteredResults.length === 0) {
        resultsDiv.innerHTML = `<p class="no-results">No Results Found</p>`
    } else {
        // if filtered results is not empty
        filteredResults.forEach(property => {
            //create a card for that property
            const propertyCardHTML = `
                <div class="property">
                    <div class="swiper">
                        <!-- Additional required wrapper -->
                        <div class="swiper-wrapper">
                            <!-- Slides -->
                            <div class="swiper-slide"><img src="${property.image}" alt="${property.name} image 1" class="property-image" value=${property.id}></div>
                            <div class="swiper-slide"><img src="${property.image}" alt="${property.name} image 2" class="property-image" value=${property.id}></div>
                            <div class="swiper-slide"><img src="${property.image}" alt="${property.name} image 3" class="property-image" value=${property.id}></div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                    <div class="property-details">
                        <h2>${property.name}</h2>
                        <p>${property.location}</p>
                        <div class="more-details">
                            <div class="property-amenities">
                                <p>${property.bedrooms} <i class="fa-solid fa-bed"></i></p>
                                <p>${property.bathrooms} <i class="fa-solid fa-bath"></i></p>
                            </div>
                            <h4>${property.price}</h4>
                        </div>
                    </div>
                </div>
            `;
            resultsDiv.innerHTML += propertyCardHTML;
        });
    }
}

// initial populate



//initialize swiper js
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });