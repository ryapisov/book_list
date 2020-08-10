//FORM NEW
function formNewBook(bool=true){
  const form = document.querySelector('.form')
  const id = bookList.length + 1
  const title = form.querySelector('.form__title')
  title.textContent = 'Новая книга'
  const name = form.querySelector('input[name="name"]').value
  const author = form.querySelector('input[name="author"]').value
  const date = form.querySelector('input[name="date"]').value
  const imgUrl = form.querySelector('input[name="image"]').value
  const button = form.querySelector('.form__button-save')
  bool ? button.addEventListener('click', addBook) : null

  function addBook(){
    //formClear()
    bookList.push( formNewBook(false) )

    console.log(bookList)

    form.classList.remove('form_show')
    displayTableList()
    button.removeEventListener('click', addBook)
    button.removeEventListener('click', addBook)
  }

  form.classList.add('form_show')
  return { id, name, author, date, imgUrl }
}
