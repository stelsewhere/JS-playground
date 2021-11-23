let input = document.getElementById('input');
let result = document.getElementById('result');
let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');
let inputTypeValue, resultTypeValue;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

function myResult() {

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if (inputTypeValue === "meter" && resultTypeValue === "feet") {
        result.value = Number(input.value) * 3.2808;
    }
    else if (inputTypeValue === "meter" && resultTypeValue === "inch") {
        result.value = Number(input.value) * 39.37;
    }
    else if (inputTypeValue === "centimeter" && resultTypeValue === "feet") {
        result.value = Number(input.value) * 0.0328084;
    }
    else if (inputTypeValue === "centimeter" && resultTypeValue === "inch") {
        result.value = Number(input.value) * 0.393701;
    }
}