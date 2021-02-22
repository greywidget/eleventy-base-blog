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

<form class="needs-validation" name="contact" method="POST" data-netlify="true" novalidate>

  <div class="mb-3">
    <label for="firstName" class="form-label">First Name</label>
    <input type="input" class="form-control" name="firstName" id="firstName" required>
    <div class="invalid-feedback">Please enter your First Name</div>
  </div>

  <div class="mb-3">
    <label for="surname" class="form-label">Surname</label>
    <input type="input" class="form-control" name="surname" id="surname" required>
    <div class="invalid-feedback">Please enter your Surname</div>
  </div>

  <div class="mb-3">
    <label for="contactEmail" class="form-label">Email address</label>
    <input type="email" class="form-control" id="contactEmail" aria-describedby="emailHelp required" name="contactEmail" required>
    <div class="invalid-feedback">Please enter your Email Address</div>
    <div id="emailHelp" class="form-text">I'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
    <label for="contactRole" class="form-label">Your Role</label>
    <select class="form-select" aria-label="select role" id="contactRole" name="contactRole" required>
    <option selected disabled value="">Please select your role</option>
    <option value="1">Butcher</option>
    <option value="2">Baker</option>
    <option value="3">Candlestick Maker</option>
    </select>
    <div class="invalid-feedback">Please choose the most applicable Role</div>
  </div>

<div class="mb-3">
  <label for="contactText" class="form-label">Please leave a message</label>
  <textarea class="form-control" id="contactText" name="contactText" rows="3"></textarea>
</div>


  <div class="mb-3">
    <input type="checkbox" value="" name="checkTandC" id="checkTandC" required>
    <label for="checkTandC" class="form-label">I have read, and agree to your Terms and Conditions</label>
    <div class="invalid-feedback">Please read and consent to my Terms and Conditions</div>
  </div>

  <div>
    <button class="btn btn-secondary text-warning form_submit" type="submit">Submit form</button>
  </div>
</form>

<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
</script>
</div>
</div>