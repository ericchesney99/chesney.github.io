// the url for any API that returns JSON data
const url = 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME'; 

// the html container
const container = document.querySelector(".container");

// button setup 
const nameButton = document.querySelector(".getName");
const displayName = document.querySelector(".displayName");

// immediately call the function that runs all the other functions
doTheWholeThing();

async function doTheWholeThing() {
	// first, get the remote data
	const data = await getData();
	// when we have it, print to the console
	console.log(data);

	// then pass the data to a function that does *something* to it
	const result = processData(data);
	
	// finally, print the processed data to the console 
	// and insert the results into the container element
	console.log(result);
    container.innerHTML = result;
    addClickEvents();
}

// the function that fetches the remote data
async function getData() {
	const response = await fetch(url);
	// check for any errors
	if (!response.ok) {
		throw new Error(`An error has occured: ${response.status}`)
	}
	const json = await response.json();
	return json; // returns the JSON data
}

// the function that processes the data into HTML
function processData(dataArray) {
	// use the .map() tool to chop up and format parts
	// of the data 
    const formattedData = dataArray.map(dataItem => {
        return(`
        <div class="item">
            <figure>
                <img class="catImage" src="${dataItem.url}" alt="Cat"/>
            </figure>
        </div>
        `)
    }).join("");
    return formattedData;
}

//Function to get a random name
nameButton.addEventListener("click", function(){

    const randomNumber = (Math.floor(Math.random() * 20));

    console.log(randomNumber);

    displayName.style.opacity = 1;

    if(randomNumber >= 0 && randomNumber <= 1){
        displayName.innerHTML = "Jarad";
    } else if(randomNumber >= 1 && randomNumber <= 2){
        displayName.innerHTML = "Gary the Snail";
    } else if(randomNumber >= 2 && randomNumber <= 3){
        displayName.innerHTML = "Bingo";
    } else if(randomNumber >= 3 && randomNumber <= 4){
        displayName.innerHTML = "Opal";
    } else if(randomNumber >= 4 && randomNumber <= 5){
        displayName.innerHTML = "Oliver";
    } else if(randomNumber >= 5 && randomNumber <= 6){
        displayName.innerHTML = "Poppy";
    } else if(randomNumber >= 6 && randomNumber <= 7){
        displayName.innerHTML = "Rusty";
    } else if(randomNumber >= 7 && randomNumber <= 8){
        displayName.innerHTML = "Trudeau";
    } else if(randomNumber >= 8 && randomNumber <= 9){
        displayName.innerHTML = "Yoinky";
    } else if(randomNumber >= 9 && randomNumber <= 10){
        displayName.innerHTML = "Flapjack";
    } else if(randomNumber >= 10 && randomNumber <= 11){
        displayName.innerHTML = "Beans";
    } else if(randomNumber >= 11 && randomNumber <= 12){
        displayName.innerHTML = "Colby";
    } else if(randomNumber >= 12 && randomNumber <= 13){
        displayName.innerHTML = "Cheddar";
    } else if(randomNumber >= 13 && randomNumber <= 14){
        displayName.innerHTML = "Ringo";
    } else if(randomNumber >= 14 && randomNumber <= 15){
        displayName.innerHTML = "Rumbus";
    } else if(randomNumber >= 15 && randomNumber <= 16){
        displayName.innerHTML = "Izzy";
    } else if(randomNumber >= 16 && randomNumber <= 17){
        displayName.innerHTML = "Gizmo";
	} else if(randomNumber >= 17 && randomNumber <= 18){
        displayName.innerHTML = "Bingus";
    } else if(randomNumber >= 18 && randomNumber <= 19){
        displayName.innerHTML = "Utah";
    } else if(randomNumber >= 19 && randomNumber <= 20){
        displayName.innerHTML = "Parler";
    } else{
        console.log("There was an error with the random name.")
    }
})

//This is aided with AI for displaying the photos underneath, same with addClickEvents()
function displaySelectedCat(cat) {
    const selectedSlot = document.getElementById("selectedCat");

    selectedSlot.innerHTML = `
        <img src="${cat.url}" alt="Selected Cat">
    `;
} 

function addClickEvents() {
    const images = document.querySelectorAll(".catImage");
    const selectedContainer = document.getElementById("selectedPhotos");

    images.forEach(img => {
        img.addEventListener("click", (mainImage) => {
            const newImg = document.createElement("img");
            newImg.src = img.src;
            newImg.classList.add("selectedImage");
            selectedContainer.innerHTML = "";
            selectedContainer.appendChild(newImg);
            console.log(mainImage);
        });
    });
}