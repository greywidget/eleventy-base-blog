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
<form name="contact" action="/" method="POST" data-netlify="true">

  <div class="mb-3">
    <label for="fullName" class="form-label">Full Name</label>
    <input type="input" class="form-control" id="fullName">
  </div>

  <div class="mb-3">
    <label for="contactEmail" class="form-label">Email address</label>
    <input type="email" class="form-control" id="contactEmail" aria-describedby="emailHelp required">
    <div id="emailHelp" class="form-text">I'll never share your email with anyone else.</div>
  </div>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <div class="col-12">
    <button class="btn btn-secondary" type="submit">Submit form</button>
  </div>
</form>
</div>
</div>