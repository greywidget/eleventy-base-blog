---
layout: post
title: Simple Javascript Tip Calculation
description: Perform a calculation using javascript and output the results.
templateClass: col-sm-10
# eleventyNavigation:
#   key: JsTip
#   order: 6
---

<p>You've had a lovely meal and the total came to £67.56 not including a tip of 20 percent.</p>
<p id="tipText"></p>

<button type="button" class="btn btn-secondary text-warning" onclick="calcTip()">Press Me</button>

<div class="bg-white">
<pre>
function calcTip() {
    var totalAmount = 67.56;
    var tipPercent = 20;
    var tipAmount = (totalAmount * tipPercent / 100);
    document.getElementById('tipText').innerHTML = 
    `Your total bill, including tip comes to £${(totalAmount + tipAmount).toFixed(2)}` +
    `. The tip amount was £${tipAmount.toFixed(2)}`;
};
<pre>
</div>
