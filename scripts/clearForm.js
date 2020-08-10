//CLEAR FORM
function formClear(){
  const form = document.querySelector('.form')
  const id = form.querySelector('input[name="id"]').value = ''
  const name = form.querySelector('input[name="name"]').value = ''
  const author = form.querySelector('input[name="author"]').value= ''
  const date = form.querySelector('input[name="date"]').value = ''
  const imgUrl = form.querySelector('input[name="image"]').value = ''
}
