---
layout: layouts/post.njk
title: What's on your mind?
templateClass: col-10
eleventyNavigation:
  key: Contact
  order: 5
---

<div class="row pt-5 justify-content-between">
<div class="col-5">
<h2 class=fs-4>Get in Touch</h2>
<p>This form collects personal data so that we can effectively deal with your
enquiry. Please see our <a href="#">Privacy Policy</a> for more details</p>
</div>
<div class="col-6">
<h2 class=fs-4>Send us a message</h2>
<form class="mt-5" name="contact" action="/" method="POST" data-netlify="true">

  <div class="mb-3">
    <label for="fullName" class="form-label">Full Name</label>
    <input type="input" class="form-control" id="fullName">
  </div>

  <div class="mb-3">
    <label for="contactEmail" class="form-label">Email address</label>
    <input type="email" class="form-control" id="contactEmail" aria-describedby="emailHelp required">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
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