
// not good

// Array of audio files for each chapter
const audioFiles = [
    { chapter: 'Chapter 1', audios: ['audio1.mp3', 'audio2.mp3', 'audio3.mp3', 'audio4.mp3', 'audio5.mp3', 'audio6.mp3', 'audio7.mp3', 'audio8.mp3', 'audio9.mp3'] },
    { chapter: 'Chapter 2', audios: ['audio10.mp3', 'audio11.mp3', 'audio12.mp3', 'audio13.mp3', 'audio14.mp3', 'audio15.mp3', 'audio16.mp3', 'audio17.mp3', 'audio18.mp3'] },
    { chapter: 'Chapter 3', audios: ['audio19.mp3', 'audio20.mp3', 'audio21.mp3', 'audio22.mp3', 'audio23.mp3', 'audio24.mp3', 'audio25.mp3', 'audio26.mp3', 'audio27.mp3'] },
    { chapter: 'Chapter 4', audios: ['audio28.mp3', 'audio29.mp3', 'audio30.mp3', 'audio31.mp3', 'audio32.mp3', 'audio33.mp3', 'audio34.mp3', 'audio35.mp3', 'audio36.mp3'] },
    { chapter: 'Chapter 5', audios: ['audio37.mp3', 'audio38.mp3', 'audio39.mp3', 'audio40.mp3', 'audio41.mp3', 'audio42.mp3', 'audio43.mp3', 'audio44.mp3', 'audio45.mp3'] },
    { chapter: 'Chapter 6', audios: ['audio46.mp3', 'audio47.mp3', 'audio48.mp3', 'audio49.mp3', 'audio50.mp3', 'audio51.mp3', 'audio52.mp3', 'audio53.mp3', 'audio54.mp3'] }
    // Add more chapters and their corresponding audio files as needed
];

const content = document.querySelector('.audio-list');

// Event listener for each chapter menu item
document.querySelectorAll('.chapter-menu').forEach(menu => {
    menu.addEventListener('click', e => {
        e.preventDefault();

        // Get the chapter name from the clicked menu item
        const chapterName = menu.textContent.trim(); // Assuming the text content is the chapter name

        // Find the corresponding chapter object in audioFiles array
        const selectedChapter = audioFiles.find(chapter => chapter.chapter === chapterName);

        // If chapter is found, display its audio files
        if (selectedChapter) {
            const audioList = selectedChapter.audios.map(audio => `<audio controls><source src="${audio}" type="audio/mpeg"></audio>`).join('');
            content.innerHTML = audioList;
        } else {
            content.innerHTML = 'Audio files not found for this chapter.';
        }
    });
});