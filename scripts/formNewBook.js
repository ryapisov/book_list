//FORM NEW
function formNewBook(bool=true){
  let form, id, title, name, author, date, imgUrl

  form = document.querySelector('.form')
  id = bookList.length + 1

  title = form.querySelector('.form__title')
  title.textContent = 'Новая книга'

  name = form.querySelector('input[name="name"]').value

  author = form.querySelector('input[name="author"]').value

  date = form.querySelector('input[name="date"]').value

  imgUrl = form.querySelector('input[name="image"]').value

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
