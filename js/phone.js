document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updateNumber(true, 'phone-number-field');
    updateTotalPrice(newPhoneNumber, 'phone-total', 1219);
    subTotal();
});
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updateNumber(false, 'phone-number-field');
    updateTotalPrice(newPhoneNumber, 'phone-total', 1219);
    subTotal();
});