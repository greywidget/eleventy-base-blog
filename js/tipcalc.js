function calcTip() {
    var totalAmount = 67.56;
    var tipPercent = 20;
    var tipAmount = (totalAmount * tipPercent / 100);
    document.getElementById('tipText').innerHTML = 
    `Your total bill, including tip comes to £${(totalAmount + tipAmount).toFixed(2)}` +
    `. The tip amount was £${tipAmount.toFixed(2)}`;
};