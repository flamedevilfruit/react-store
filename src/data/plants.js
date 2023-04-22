// getPlants array 
let getPlants = [];

// fetch data from API
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fd755f6defmsh766a1714237ccfdp130042jsn6f0e13983208',
		'X-RapidAPI-Host': 'house-plants.p.rapidapi.com'
	}
};

fetch('https://house-plants.p.rapidapi.com/all', options)
	.then(response => response.json())
	.then((data) => getPlants.push(data))
	.catch(err => console.error(err));

  console.log(getPlants);

  export default getPlants;