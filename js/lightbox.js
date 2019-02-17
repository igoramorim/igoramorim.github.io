var drawings = [
    'img/drawings/igor_amorim_dbz_fanart_112.png',
    'img/drawings/igor_amorim_hotline_miami_alex.png',
    'img/drawings/igor_amorim_nemesis.png',
    'img/drawings/igor_amorim_p_2.png',
    'img/drawings/igor_amorim_p.png',
    'img/drawings/igor_amorim_sketchnn12_4.png',
    'img/drawings/igor_amorim_sketchnn13_2.png',
    'img/drawings/igor_amorim_sketchnn54.png',
    'img/drawings/igor_amorim_sketchnn57.png',
    'img/drawings/igor_amorim_sketchnn63_2.png',
    'img/drawings/igor_amorim_sketchnn64_3.png',
    'img/drawings/igor_amorim_sketchnn81.png',
    'img/drawings/igor_amorim_sketchnn82.png',
    'img/drawings/igor_amorim_sketchnn150.png',
    'img/drawings/igor_amorim_sketchnn165.png',
    'img/drawings/igor_amorim_study_quickkk_21.png',
    'img/drawings/igor_amorim_study_quickkk_32.png',
    'img/drawings/igor_amorim_study_quickkk_34.png',
    'img/drawings/igor_amorim_study_quickkk_42.png'
];

var slideIndex = 0;

// Open the Modal
function openModal(n) {
    document.getElementById('myModal').style.display = "block";
    showSlides(slideIndex = n);
}
  
// Close the Modal
function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var imgCounter = document.getElementById("numbertext");
    
    if (n > drawings.length) {slideIndex = 1}
    if (n < 1) {slideIndex = drawings.length}

    imgCounter.innerHTML = slideIndex + "/" + drawings.length;
    document.getElementById('slide').style.display = "block";
    document.getElementById("drawing").src = drawings[slideIndex-1];
}