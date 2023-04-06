function updateNumber(isIncrease, inputFieldId){
    const NumberField = document.getElementById(inputFieldId);
    const NumberString = NumberField.value;
    const previousNumber = parseInt(NumberString);

    let newNumber;
    if(isIncrease === true){
        newNumber = previousNumber + 1;   
    }
    else{
        newNumber = previousNumber - 1;
    }
    NumberField.value = newNumber;
    return newNumber;
}

function updateTotalPrice(newNumber, totalElementId, unit){
    const TotalPrice = newNumber * unit;
    const TotalElement = document.getElementById(totalElementId);
    TotalElement.innerText = TotalPrice;
}
// calculate subtotal functions
function getTextElementById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}
function subTotal(){
    const currentPhoneTotal = getTextElementById('phone-total');
    const currentCaseTotal = getTextElementById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;
}