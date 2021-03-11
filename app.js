// OUTPUT GETS THE VALUE OF INPUT-RANGE
(function () {

    var selector = '[data-rangeSlider]',
        elements = document.querySelectorAll(selector);

    function valueOutput(element) {
        var value = element.value,
            output = element.parentNode.getElementsByTagName('output')[0];
        output.innerHTML = value;
    }

    for (var i = elements.length - 1; i >= 0; i--) {
        valueOutput(elements[i]);
    }

    Array.prototype.slice.call(document.querySelectorAll('input[type="range"]')).forEach(function (el) {
        el.addEventListener('input', function (e) {
            valueOutput(e.target);
        }, false);
    });

})();

// CHANGE INPUT-RANGE DETAILS
let range = document.querySelector('.slider'); //NOT input[type='range'];
let checkbox = document.querySelector(".switch__checkbox");

checkbox.addEventListener('change', function () {
    console.log("EE");
    let initialMinValue = "7";
    let initialMaxValue = "35";
    let initialStepValue = "7";

    if (this.checked) {
        range.setAttribute("max", "29");
        range.setAttribute("min", "5");
        range.setAttribute("step", "4");
    } else {
        range.setAttribute("max", initialMaxValue);
        range.setAttribute("min", initialMinValue);
        range.setAttribute("step", initialStepValue);

    }

});

// CHANGE PAGEVIEWS
let pageviews = document.querySelector('#views');
let output = document.querySelector('output');

range.addEventListener('input', function () {
    pageviews.innerText = Math.round(+output.innerText * 5);

});