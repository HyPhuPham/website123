function deleteNote(noteId) {
    fetch("/delete-note", {
        method: "POST",
        body: JSON.stringify({ noteId: noteId}), }).then((_res) => {
    window.location.href = "/";
});
}
function onClick(e) {
    e.preventDefault();
    grecaptcha.ready(function() {
      grecaptcha.execute('reCAPTCHA_site_key', {action: 'submit'}).then(function(token) {
          // Add your logic to submit to your backend server here.
      });
    });
  }
  function onSubmit(token) {
    document.getElementById("demo-form").submit();
  }
