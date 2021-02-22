---
layout: layouts/post.njk
title: What's on your mind?
templateClass: col-10
eleventyNavigation:
  key: Contact
  order: 5
---

<div class="row pt-3 justify-content-between">
<div class="col-sm-5">
<h2 class=fs-4>Get in Touch</h2>
<p>This form collects personal data so that I can effectively deal with your
enquiry. Please see my <a href="#">Privacy Policy</a> for more details.</p>
<p class="mb-0">Craig Richards (and cat)</p>
<p class="mb-0">27 gumboot lane</p>
<p class="mb-0">Waikikamucau</p>
<p>New Zealand</p>
<p>Tel: <a href="tel:0113 123 4567">0113 123 4567</a></p>
<p><a href="mailto:wotcha@thegreywidget.co.nz">wotcha@thegreywidget.co.nz</a>
</div>
<div class="col-sm-6">
<h2 class=fs-4>Send me a message</h2>

<form name="contact" method="POST" data-netlify="true">

  <div class="mb-3">
    <label for="firstName" class="form-label">First Name</label>
    <input type="input" class="form-control" name="firstName" id="firstName" required>
  </div>

  <div class="mb-3">
    <label for="surname" class="form-label">Surname</label>
    <input type="input" class="form-control" name="surname" id="surname" required>
  </div>

  <div class="mb-3">
    <label for="contactEmail" class="form-label">Email address</label>
    <input type="email" class="form-control" id="contactEmail" aria-describedby="emailHelp required" name="contactEmail" required>
    <div id="emailHelp" class="form-text">I'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
    <label for="contactRole" class="form-label">Your Role</label>
    <select class="form-select" aria-label="select role" id="contactRole" name="contactRole">
    <option selected>Please select your role</option>
    <option value="1">Butcher</option>
    <option value="2">Baker</option>
    <option value="3">Candlestick Maker</option>
    </select>
  </div>

<div class="mb-3">
  <label for="contactText" class="form-label">Please leave a message</label>
  <textarea class="form-control" id="contactText" name="contactText" rows="3"></textarea>
</div>

  <div>
    <button class="btn btn-secondary text-warning form_submit" type="submit">Submit form</button>
  </div>
</form>

<script>
    //Simple form validation
    //get default border colours (to use on input when validation passes)
    var borderStylePass = document.querySelector('#firstName').style.border;
    //set fail border colours (to use on input when validation fails)
    var borderStyleFail = '1px solid red';
    //get the form submit button
    var submit_button = document.querySelector('.form_submit');
    //attach form event listener
    submit_button.addEventListener("click", function(event){
        //get the elements we want to validate:
        var firstName = document.querySelector('#firstName');
        var surname = document.querySelector('#surname');
        var contactEmail = document.querySelector('#contactEmail');

        //all validation is assumed to be passed until tested
        blnValidated = true;

        //For each element to be validated:
        // 1. Set the border style initially to the valid state
        // 2. Check if the element has a value
        // 3. If the element has no value:
        //    - Set the validation boolean to false
        //    - Set the element/s border to the invalid state
        firstName.style.border = borderStylePass;
        if(!firstName.value){
            blnValidated = false;
            firstName.style.border = borderStyleFail;
        }

        surame.style.border = borderStylePass;
        if(!surname.value){
            blnValidated = false;
            surname.style.border = borderStyleFail;
        }

        contactEmail.style.border = borderStylePass;
        if(!contactEmail.value){
            blnValidated = false;
            contactEmail.style.border = borderStyleFail;
        }
        //if validation failed do not allow the form to submit the data
        if(!blnValidated){
            event.preventDefault();
        }
    }, false);
</script>
</div>
</div>