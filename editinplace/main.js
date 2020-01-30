
var inputPairs = document.querySelectorAll('.inputpair')
var inputElements = document.querySelectorAll('input')

var onClickEvent = function (event) {
    console.dir(event);
    var paragraph = null;
    var input = null;

    if (event.target.localName === 'p') {

        console.dir('clicked on the paragraph');
        paragraph = event.target;
        input = event.target.previousElementSibling;

        paragraph.classList.add('hide');

        var currentName = paragraph.innerHTML
        input.value = currentName
        input.classList.remove('hide')
    }
}


var onBlurEvent = function (event) {
    console.dir(event);
    var paragraph = null;
    var input = null;

    if (event.target.localName === 'input') {
        console.dir('blurred the input');
        input = event.target;
        paragraph = event.target.nextElementSibling;

        input.classList.add('hide');
        var currentName = input.value
        paragraph.innerHTML = currentName
        paragraph.classList.remove('hide')
    }
}

for (var i = 0; i < inputPairs.length; i++) {

    inputPairs[i].addEventListener('click', onClickEvent);
}


for (var i = 0; i < inputPairs.length; i++) {
    inputElements[i].addEventListener('blur', onBlurEvent);
}
