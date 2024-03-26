var slideIndex = 1;
ShowSlides(slideIndex);
ShowSlidesAuto();

export function CurrentSlide (n) {
    ShowSlides(slideIndex = n);
}



function ShowSlides (n) {
    var i;
    var slides = document.querySelectorAll('.container__slide-item');
    var dots = document.querySelectorAll('.container__slide-dot-item');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" container__slide-dot-item--active", "");
    }
    console.log(slideIndex);
    // slides[slideIndex - 1].style.display = 'block';
    // dots[slideIndex - 1].className += ' container__slide-dot-item--active';
    if (slideIndex >= 1 && slideIndex <= slides.length) {
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].className += ' container__slide-dot-item--active';
    } else {
        console.log("Invalid slide index or slides array is empty");
    }

    
}

function ShowSlidesAuto () {
    var i;
    var slides = document.querySelectorAll('.container__slide-item');
    var dots = document.querySelectorAll('.container__slide-dot-item');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" container__slide-dot-item--active", "");
    }
    slideIndex++;
    // console.log(slideIndex);
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex >= 1 && slideIndex <= slides.length){
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].className += ' container__slide-dot-item--active';
        setTimeout(ShowSlidesAuto, 5000);
    }
    else {
        console.log("Invalid slide index or slides array is empty");
    }
    
}


// Function prev 
var slideIndex1 = 5;
function prevSlide (n) {
    slideIndex1 +=n; 
    if (slideIndex1 <= 5) {
        slideIndex1 = 5;
    }
    showLocationHandle(slideIndex1);
}

//Function Next 
function nextSlide (n) {
    slideIndex1 +=n;
    if (slideIndex1 >= 8) {
        slideIndex1 = 8;
    }
    showLocationHandle(slideIndex1);
}

var btnsAll = document.querySelectorAll('.container__content-location-btn')
var btnsArray = Array.from(btnsAll);
// var btnsArray = [...btnsAll];

btnsArray.forEach(function (btn) {
    return btn.onclick = function (e) {
        var btnButtoned = e.target;

        // Catch event when press button in location 
        if (btnButtoned.matches('.btn-location')) {
            if (btnButtoned.matches('.container__content-location-btn--left')) {
                prevSlide(-1);
                // console.log('hello');
                // showLocationHandle();

            }
            if (btnButtoned.matches('.container__content-location-btn--right')) {
                // console.log('hihi.');
                nextSlide(1);
                // showLocationHandle();
            }
            
        }

         // Catch event when press button in Sale 
         if (btnButtoned.matches('.container__content-sale-btn')) {
            if (btnButtoned.matches('.container__content-location-btn--left')) {
                prevSlide(-1);
                console.log('hello');
            }
            if (btnButtoned.matches('.container__content-location-btn--right')) {
                console.log('hihi.');
                nextSlide(1);
            }
            
        }

        // Catch event when press button in Suggestion  
        if (btnButtoned.matches('.container__content-suggestions-btn')) {
            if (btnButtoned.matches('.container__content-location-btn--left')) {
                prevSlide(-1);
                console.log('hello');
            }
            if (btnButtoned.matches('.container__content-location-btn--right')) {
                console.log('hihi.');
                nextSlide(1);
            }
            
        }

        // Catch event when press button in discover 
        if (btnButtoned.matches('.container__content-discover-btn')) {
            if (btnButtoned.matches('.container__content-location-btn--left')) {
                prevSlide(-1);
                console.log('hello');
            }
            if (btnButtoned.matches('.container__content-location-btn--right')) {
                console.log('hihi.');
                nextSlide(1);
            }
            
        }

        // Catch event when press button in guide 
        if (btnButtoned.matches('.container__content-guide-btn')) {
            if (btnButtoned.matches('.container__content-location-btn--left')) {
                prevSlide(-1);
                console.log('hello');
            }
            if (btnButtoned.matches('.container__content-location-btn--right')) {
                console.log('hihi.');
                nextSlide(1);
            }
            
        }

        // switch (btnButtoned) {
        //     case btnButtoned.matches('.btn-location'):
        //         console.log(hello);
        //         break;
            
        // }
    }
})


// Function handle slide location 
function showLocationHandle (n) {
    var slidesLocation = document.querySelectorAll('.container__content-location-item');
    
    var i;
    for (i = 0; i < slidesLocation.length; i++) {
        slidesLocation[i].style.display = 'none';
    }

    var indexEnd = n;
    for (i = indexEnd - 5; i < indexEnd; i++) {
        slidesLocation[i].style.display = 'block';
    }
}
