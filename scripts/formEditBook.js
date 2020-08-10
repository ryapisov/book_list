// FORM EDIT DOOK
function formEditBook(book){
  const form = document.querySelector('.form')
  const title = form.querySelector('.form__title')
  title.textContent = 'Редактирование книги'
  const id = form.querySelector('input[name="id"]')
  id.value = book?.id || ''
  const name = form.querySelector('input[name="name"]')
  name.value = book?.name
  const author = form.querySelector('input[name="author"]')
  author.value = book?.author || ''
  const date = form.querySelector('input[name="date"]')
  date.value = book?.date || ''
  const imgUrl = form.querySelector('input[name="image"]')
  imgUrl.value = book?.imgUrl || ''
  form.classList.add('form_show')

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

  // saveBook()
  return {
    id: id.value,
    name: name.value,
    author: author.value,
    date: date.value,
    imgUrl: imgUrl.value
  }
}
