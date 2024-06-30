
// GlobaL Javascript

//Images       
    // Function to generate a random image URL
    function getRandomImageUrl() {
        const width = 300; // Set the width of the image
        const height = 300; // Set the height of the image
        const randomNumber = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
        return `https://picsum.photos/${width}/${height}?random=${randomNumber}`; // Construct the image URL
        }

// Get the image elements by their IDs
        const image1 = document.getElementById("image1");
        const image2 = document.getElementById("image2");
        const image3 = document.getElementById("image3");

 // Set the src attribute of each image to a random image URL
        image1.src = getRandomImageUrl();
        image2.src = getRandomImageUrl();
        image3.src = getRandomImageUrl();