// FORM EDIT DOOK
function formEditBook(book){
  let form, title, id, name, author, date, imgUrl

  form = document.querySelector('.form')
  form.classList.add('form_show')

  title = form.querySelector('.form__title')
  title.textContent = 'Редактирование книги'

  id = form.querySelector('input[name="id"]')
  id.value = book?.id || ''

  name = form.querySelector('input[name="name"]')
  name.value = book?.name

  author = form.querySelector('input[name="author"]')
  author.value = book?.author || ''

  date = form.querySelector('input[name="date"]')
  date.value = book?.date || ''

  imgUrl = form.querySelector('input[name="image"]')
  imgUrl.value = book?.imgUrl || ''


  const button = form.querySelector('.form__button-save')
  button.addEventListener('click', addBook)

  const closeNewFormBook = document.querySelector('.form__button-cancel')
  closeNewFormBook.addEventListener('click', ()=>{
    form.classList.remove('form_show')
    button.removeEventListener('click', addBook)
  })

  function addBook(){
    let book = {
      id: id.value,
      name: name.value,
      author: author.value,
      date: date.value,
      imgUrl: imgUrl.value
    }

    const index = bookList.findIndex(n => n.id == book.id)

    if(index === -1) {
      console.log('добавлен новый')
      bookList.push(book)
    }else{
      console.log('Изменён')
      bookList.splice(index, 1, book)
    }
    form.classList.remove('form_show')
    formClear()
    displayTableList()
    button.removeEventListener('click', addBook)
  }

}
