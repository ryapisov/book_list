const btnNewBook = document.querySelector('.addBookButton')

btnNewBook.addEventListener('click', () => {
  btnNewBook.disabled = true
  formNew()
})

function formNew(book) {
  const formDisplay = document.querySelector('#display')

  const form = document.createElement('div')
  form.classList.add('form')
  form.classList.add('form_show')

  //= hidden
  const inputHidden = document.createElement('input')
  inputHidden.setAttribute('type', 'hidden')
  inputHidden.setAttribute('name', 'id')
  inputHidden.setAttribute('value', book?.id ? book.id : '')

  form.appendChild(inputHidden)
  //= TITLE
  const formTitle = document.createElement('div')
  formTitle.classList.add('form__title')
  formTitle.textContent = book?.id ? "Редактирование книги" : "Новая книга"
  form.appendChild(formTitle)

  //= NAME
  const formNameGroup = document.createElement('div')
  formNameGroup.classList.add('form__group')

  const labelName = document.createElement('label')
  labelName.classList.add('form__label')
  labelName.textContent = "Наименование"
  labelName.setAttribute('for', 'name')

  const inputName = document.createElement('input')
  inputName.classList.add('form__input')
  inputName.setAttribute('type', 'text')
  inputName.setAttribute('name', 'name')
  inputName.setAttribute('value', book?.name ? book.name : '')

  formNameGroup.appendChild(labelName)
  formNameGroup.appendChild(inputName)
  form.appendChild(formNameGroup)

  //= AUTHOR
  const formAuthorGroup = document.createElement('div')
  formAuthorGroup.classList.add('form__group')

  const labelAuthor = document.createElement('label')
  labelAuthor.classList.add('form__label')
  labelAuthor.setAttribute('for', 'author')
  labelAuthor.textContent = "Автор"

  const inputAuthor = document.createElement('input')
  inputAuthor.classList.add('form__input')
  inputAuthor.setAttribute('type', 'text')
  inputAuthor.setAttribute('name', 'author')
  inputAuthor.setAttribute('value', book?.author ? book.author : '')

  formAuthorGroup.appendChild(labelAuthor)
  formAuthorGroup.appendChild(inputAuthor)
  form.appendChild(formAuthorGroup)

  //= DATE
  const formDateGroup = document.createElement('div')
  formDateGroup.classList.add('form__group')

  const labelDate = document.createElement('label')
  labelDate.classList.add('form__label')
  labelDate.setAttribute('for', 'date')
  labelDate.textContent = "Год выпуска"

  const inputDate = document.createElement('input')
  inputDate.classList.add('form__input')
  inputDate.setAttribute('type', 'text')
  inputDate.setAttribute('name', 'date')
  inputDate.setAttribute('value', book?.date ? book.date : '')

  formDateGroup.appendChild(labelDate)
  formDateGroup.appendChild(inputDate)
  form.appendChild(formDateGroup)

  //= IMAGE
  const formImageGroup = document.createElement('div')
  formImageGroup.classList.add('form__group')

  const labelImage = document.createElement('label')
  labelImage.classList.add('form__label')
  labelImage.setAttribute('for', 'image')
  labelImage.textContent = "Изображение"

  const inputImage = document.createElement('input')
  inputImage.classList.add('form__input')
  inputImage.setAttribute('type', 'text')
  inputImage.setAttribute('name', 'image')
  inputImage.setAttribute('value', book?.imgUrl ? book.imgUrl : '')

  formImageGroup.appendChild(labelImage)
  formImageGroup.appendChild(inputImage)
  form.appendChild(formImageGroup)

  //= BUTTONS
  const formButtonGroup = document.createElement('div')
  formButtonGroup.classList.add('form__button-group')

  const buttonSave = document.createElement('button')
  buttonSave.classList.add('form__button-save')
  buttonSave.textContent = "Сохранить"

  buttonSave.addEventListener('click', (e) => {
    book?.id ? saveCurrentBook() : saveNewBook()
    formDisplay.removeChild(form)
    btnNewBook.disabled = false
  })

  const buttonCancel = document.createElement('button')
  buttonCancel.classList.add('form__button-cancel')
  buttonCancel.textContent = "Отменить"

  buttonCancel.addEventListener('click', () => {
    formDisplay.removeChild(form)
    // отменить disabled у всех кнопок
    const buttons = document.querySelectorAll('button')
    buttons.forEach((btn)=> btn.disabled = false )
  })

  formButtonGroup.appendChild(buttonSave)
  formButtonGroup.appendChild(buttonCancel)
  form.appendChild(formButtonGroup)
  formDisplay.appendChild(form)
}

function getDataForm() {
  const book = {
    id: '',
    name: '',
    author: '',
    date: '',
    imgUrl: ''
  }
  const form = document.querySelector('.form')
  book.id = Number(document.querySelector('input[name="id"]').value)
  book.name = document.querySelector('input[name="name"]').value
  book.author = document.querySelector('input[name="author"]').value
  book.date = document.querySelector('input[name="date"]').value
  book.imgUrl = document.querySelector('input[name="image"]').value

  return book
}

function saveNewBook() {
  const newBook = getDataForm()
  const lastBook = bookList[bookList.length - 1]
  newBook.id = lastBook?.id + 1 || 1
  bookList.push(newBook)
  tableList(bookList)
  console.log(bookList)
}

function saveCurrentBook() {
  const currentBook = getDataForm()
  const index = bookList.findIndex(n => n.id == currentBook.id)

  if (index !== -1) {
    bookList.splice(index, 1, currentBook)
  }
  tableList(bookList)
  console.log(bookList)
}
