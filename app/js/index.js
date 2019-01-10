const buttonRight = document.querySelector(".right");
const buttonLeft = document.querySelector(".left");
const carousel = document.querySelector(".breeds-carrousel");
const carouselContainer = document.querySelector('.breeds-fixed-carrousel-container');
let i = 0;
let timeOut, interval;
let speed = 20;
var rt = (carouselContainer.offsetWidth - (carousel.offsetLeft + carousel.offsetWidth)); 

buttonLeft.addEventListener("mousedown", function(){
    timeOut = setTimeout(() => {
        interval = setInterval(() => {
            if(i === 0) {
                carousel.style.marginLeft = `${i = 0}px`;
            } else {
                carousel.style.marginLeft = `${i += speed}px`;
            }
        }, 50);
    }, 200);
});

buttonRight.addEventListener("mousedown", function(){

    timeOut = setTimeout(() => {
        interval = setInterval(() => {
            if(carousel.offsetLeft === rt - (Math.abs(i - rt))) {
                carousel.style.marginLeft = `${i += 0}px`;
                clearTimers()
            } else {
                carousel.style.marginLeft = `${i -= speed}px`;
            }
        }, 50);
    }, 200);
});

buttonLeft.addEventListener('mouseup', clearTimers);
buttonLeft.addEventListener('mouseleave', clearTimers);
buttonRight.addEventListener('mouseup', clearTimers);
buttonRight.addEventListener('mouseleave', clearTimers);

function clearTimers() {
    clearTimeout(timeOut);
    clearInterval(interval);
}

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

var myEfficientFn = debounce(function() {
	thing = carousel.style.marginLeft = `${i = 0}px`
    i = 0;
    location.reload();
}, 250);

window.addEventListener('resize', myEfficientFn);

