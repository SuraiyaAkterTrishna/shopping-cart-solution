document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newCaseNumber = updateNumber(true, 'case-number-field');
  updateTotalPrice(newCaseNumber, 'case-total', 59);  
});
document.getElementById("btn-case-minus").addEventListener("click", function () {
    const newCaseNumber = updateNumber(false, 'case-number-field');
    updateTotalPrice(newCaseNumber, 'case-total', 59);
  });
