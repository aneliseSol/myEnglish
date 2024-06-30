
//Paragraphs
    // Function to generate a random paragraph
    function generateRandomParagraph() {
        const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        const sentences = loremIpsum.split(". "); // Split the Lorem Ipsum text into sentences
        const randomSentences = [];

// Select 5 random sentences
        for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(Math.random() * sentences.length);
            randomSentences.push(sentences[randomIndex]);
        }

 // Join the selected sentences to form a paragraph
        return randomSentences.join(". ") + ".";
            }

// Get the paragraph elements by their ids
            const paragraphElement1 = document.getElementById("randomParagraph1");
            const paragraphElement2 = document.getElementById("randomParagraph2");
            const paragraphElement3 = document.getElementById("randomParagraph3");

// Set the content of each paragraph element to a randomly generated paragraph
           paragraphElement1.textContent = generateRandomParagraph();
           paragraphElement2.textContent = generateRandomParagraph();
           paragraphElement3.textContent = generateRandomParagraph();

