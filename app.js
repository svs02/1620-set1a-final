let thumbnails = document.getElementsByClassName('thumbnail')
let activeImages = document.getElementsByClassName('active')

for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('mouseover', function() {

        if (activeImages.length > 0) {
            activeImages[0].classList.remove('active')
        }
        this.classList.add('active')
        document.getElementById('displayed-img').src = this.src
    })
}


function clickeffect() {
    if (effect.value == "blur") {
        effect.value = null;
    } else {
        alert("please enter a valid effect")
    }
}