const container = document.querySelector('.container');

const html = `  
<select id="position">
<option>beforebegin</option>
<option>afterbegin</option>
<option>beforeend</option>
<option>afterend</option>
</select>
   <button class="btn">Insert HTML</button>
   <button id="reset">Reset</button> <p>
   Some text, with a
   <code id="subject">code-formatted element</code> inside it.
 </p>
 `;

container.insertAdjacentHTML('beforebegin', html);
