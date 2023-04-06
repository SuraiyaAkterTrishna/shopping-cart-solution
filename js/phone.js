document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updateNumber(true, 'phone-number-field');
    updateTotalPrice(newPhoneNumber, 'phone-total', 1219);

    // calculate subtotal
    const currentPhoneTotal = getTextElementById('phone-total');
    const currentCaseTotal = getTextElementById('case-total');
    const subTotal = currentPhoneTotal + currentCaseTotal;
    console.log(subTotal);

});

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updateNumber(false, 'phone-number-field');
    updateTotalPrice(newPhoneNumber, 'phone-total', 1219);
});