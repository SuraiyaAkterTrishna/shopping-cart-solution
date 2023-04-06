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