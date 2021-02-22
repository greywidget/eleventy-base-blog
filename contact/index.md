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
    <label for="fullName" class="form-label">Full Name</label>
    <input type="input" class="form-control" name="fullName" id="fullName">
  </div>

  <div class="mb-3">
    <label for="contactEmail" class="form-label">Email address</label>
    <input type="email" class="form-control" id="contactEmail" aria-describedby="emailHelp required" name="contactEmail">
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
    <button class="btn btn-secondary text-warning" type="submit">Submit form</button>
  </div>
</form>
</div>
</div>