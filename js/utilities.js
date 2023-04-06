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

function setTextElementValueById(elementId, value){
    const totalElement = document.getElementById(elementId);
    totalElement.innerText = value;
}
function subTotal(){
    // subtotal calculate 
    const currentPhoneTotal = getTextElementById('phone-total');
    const currentCaseTotal = getTextElementById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;

    setTextElementValueById('sub-total', currentSubTotal);
    // tax amount calculate 
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);

    // final total amount 
    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);

}