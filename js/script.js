document.getElementById('btn-case-plus').addEventListener('click', function(){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    const newCaseNumber = previousCaseNumber + 1;
    caseNumberField.value = newCaseNumber;
    const casePriceField = document.getElementById('case-price-field');
    const casePriceString = casePriceField.innerText;
    const previousCasePrice = parseInt(casePriceString);
    const newCasePrice = previousCasePrice * newCaseNumber;
    casePriceField.innerText = newCasePrice;
});
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    const newCaseNumber = previousCaseNumber - 1;
    caseNumberField.value = newCaseNumber;
})
