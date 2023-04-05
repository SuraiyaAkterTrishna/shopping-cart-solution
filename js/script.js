function updateCaseNumber(isIncrease) {
  const caseNumberField = document.getElementById("case-number-field");
  const caseNumberString = caseNumberField.value;
  const previousCaseNumber = parseInt(caseNumberString);

  let newCaseNumber;
  if(isIncrease === true){
    newCaseNumber = previousCaseNumber + 1;
  }
  else{
    newCaseNumber = previousCaseNumber - 1;
  }

  caseNumberField.value = newCaseNumber;

  /* let newCaseNumber;
  if (isIncrease == true) {
    newCaseNumber = previousCaseNumber + 1;
    caseNumberField.value = newCaseNumber;

    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById("case-total");
    caseTotalElement.innerText = caseTotalPrice;
  } else {
    newCaseNumber = previousCaseNumber - 1;
    caseNumberField.value = newCaseNumber;
    
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById("case-total");
    caseTotalElement.innerText = caseTotalPrice;
  } */
}

document.getElementById("btn-case-plus").addEventListener("click", function () {
  updateCaseNumber(true);

});
document.getElementById("btn-case-minus").addEventListener("click", function () {
    updateCaseNumber(false);

});
