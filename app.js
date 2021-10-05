// //jshint esversion: 6

//<---------------------------------------------- Connect Contatcts Form to Google Sheets ---------------------------------------------->

const scriptURL = 'https://script.google.com/macros/s/AKfycbykWm_MYA_cpATiGHs7drbEFS4h2wqfZU_dgx7LzjgXtopjxKbFhhFrrjCCX4nFWOSb/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Message sent Successfully :)"))
    .catch(error => console.error('Error!', error.message))

form.reset();
})