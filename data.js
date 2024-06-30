
const contentHTML = {
    home: `
        <div style=
        "background-image: url('nightSkyBackground.jpg'); 
            margin:0; 
            background-size: cover; 
            background-position: center; 
            background-repeat: no-repeat; 
            width: 100%; height: 150vh;   ">
            <!-- Content here -->
            <h1 style="color:white;">Home</h1>
            <h2 style="color:white;">Welcome to our Home page.</h2>
            <p style="color:white;">Page under development. Watch out this space.<p>
            <p style="color:white;">PDF chapter will display here after you selected your chapter.</p>
            <p>Have fun!</p>
        </div>
        </hr> </BR>
        <div class="picsumRandom-container">
            <img src="https://picsum.photos/1100/1100?random=${Math.random()}" alt="Random Image" style="width: 100%; height: 150vh;">
        </div>    
    `,
    about: `
        <h1>About</h1>
        <h2>Welcome to our About page.</h2>
        <p>Page under development. Watch out this space.<p>
        <div class="picsumRandom-container">
            <img src="https://picsum.photos/600/800?random=${Math.random()}" alt="Random Image">
            <img src="https://picsum.photos/600/800?random=${Math.random()}" alt="Random Image">
            <img src="https://picsum.photos/600/800?random=${Math.random()}" alt="Random Image">
        </div>
    `,
    exercise: `
        <h1>Exercise</h1>
        <h2>Welcome to our Exercise page.</h2>
        <p>Page under development. Watch out this space.<p>
        <div class="picsumRandom-container">
            <img src="https://picsum.photos/600/800?random=${Math.random()}" alt="Random Image">
            <img src="https://picsum.photos/600/800?random=${Math.random()}" alt="Random Image">
            <img src="https://picsum.photos/600/800?random=${Math.random()}" alt="Random Image">
        </div>
    `,
    chapters: `
        <h1>Chapters</h1>
        <h2>Welcome to our Chapters page.</h2>
        <p>Page under development. Watch out this space.<p>
        <div class="picsumRandom-container">
            <img src="https://picsum.photos/600/800?random=${Math.random()}" alt="Random Image">
            <img src="https://picsum.photos/600/800?random=${Math.random()}" alt="Random Image">
            <img src="https://picsum.photos/600/800?random=${Math.random()}" alt="Random Image">
        </div>
    `,
    contact: `
        <h1>Contact</h1>
        <h2>Welcome to our Contact page.</h2>
        <p>Page under development. Watch out this space.<p>
                <div class="text-Fixed"> 
            <h2>Contact information.</h2>
            <h3>How to Contact Me </h3>

            <p>Tel: +123456789</p>
            <p>Email: me@gmail.com</p>
            <p>Address:</p>
            <p>
            123 North Street<br />
            Some City<br />
            Some Country <br />
            </p>
        </div>
        <div class="picsumRandom-container">
            <img src="https://picsum.photos/600/800?random=${Math.random()}" alt="Random Image">
            <img src="https://picsum.photos/600/800?random=${Math.random()}" alt="Random Image">
            <img src="https://picsum.photos/600/800?random=${Math.random()}" alt="Random Image">
        </div>
    `
};

const content = document.querySelector('.main-content');
let audioElement = null;

document.querySelectorAll('.menu-option').forEach(menu => {
    menu.addEventListener('click', e => {
        e.preventDefault();

        // Stop any playing audio
        if (audioElement && !audioElement.paused) {
            audioElement.pause();
            audioElement = null; // 
        }        

        // Get href value
        const hrefLink = e.target.href;
        const hrefArr = hrefLink.split('/');
        const hrefValue = hrefArr[hrefArr.length - 1];

        content.innerHTML = contentHTML[hrefValue];

        // Refresh the images in the .picsumRandom-container
        const picsumContainers = document.querySelectorAll('.picsumRandom-container img');
        picsumContainers.forEach(img => {
            img.src = `https://picsum.photos/600/1000?random=${Math.random()}`;
        });        

    });
});



