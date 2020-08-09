let bookList = [
  {id: 1, name:'Кино',       author:'Василий Иванович', imgUrl:'http://static.ozone.ru/multimedia/books_covers/1005683344.jpg', date:'21.01.2001'},
  {id: 2, name:'Литература', author:'Толстой Николай',  imgUrl:'http://static.ozone.ru/multimedia/books_covers/1005683344.jpg', date:'12.04.2005'},
  {id: 3, name:'Искусство',  author:'Давинчи',          imgUrl:'http://static.ozone.ru/multimedia/books_covers/1005683344.jpg', date:'12.04.2005'},
  {id: 8, name:'Любовь',     author:'Крот Дон',         imgUrl:'http://static.ozone.ru/multimedia/books_covers/1005683344.jpg', date:'12.04.2005'}
]

displayTableList()

// OPEN FORM
const openNewFormBook = document.querySelector('.addBookButton')
openNewFormBook.addEventListener('click', ()=>{
  formNewBook()
  formClear()
})

// CLOSE FORM
// const closeNewFormBook = document.querySelector('.form__button-cancel')
// closeNewFormBook.addEventListener('click', ()=>{
//   const form = document.querySelector('.form')
//   form.classList.remove('form_show')
// })

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
  button.addEventListener('click', pardon)

  const closeNewFormBook = document.querySelector('.form__button-cancel')
  closeNewFormBook.addEventListener('click', ()=>{
    form.classList.remove('form_show')
    button.removeEventListener('click', pardon)
  })



  function pardon(){
    let book = {
      id: +id.value,
      name: name.value,
      author: author.value,
      date: date.value,
      imgUrl: imgUrl.value
    }

    const index = bookList.findIndex(n => n.id === book.id)

    if(index === -1) {
      console.log('добавлен новый')
      bookList.push(book)
    }else{
      console.log('Изменён')
      bookList.splice(index, 1, book)
    }

    console.log(index)
    console.log(bookList)

    form.classList.remove('form_show')
    formClear()


    displayTableList()
    button.removeEventListener('click', pardon)
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




function saveBook(){
  const form = document.querySelector('.form')
  const button = form.querySelector('.form__button-save')
  button.addEventListener('click', ()=>{
  //  console.log( formNewBook() )
    form.classList.remove('form_show')
    //formClear()
  })
}

function editTableElement(id){
  let someBook = bookList.find(function(book) {
    return book.id == id
  })
  formEditBook(someBook)
}

//DELETE ITEM FROM TABLE
function deleteTableItem(id){
  const index = bookList.findIndex(book => book.id === id)
  if(index !== -1){
    bookList.splice(index, 1)
  }
  displayTableList()
}

//DISPLAY TABLE
function displayTableList(){
  const table = document.querySelector('.table')
  const fragment = document.createDocumentFragment()
  table.textContent = null
  bookList.forEach((book, i) => {
    tableItem(book.id || i, book, fragment)
  })
  table.appendChild(fragment)
}

//ITEM FOR TABLE
function tableItem(id, book, fragment){
  const divTableItem = createElement({
    _tag: 'div',
    _class: 'table__item',
    _attr: 'id',
    _attrValue: id,
  })
  const divTableImage = createElement({
    _tag: 'div',
    _class: 'table__image'
  })
  const divTableGroupText = createElement({
    _tag: 'div',
    _class: 'table__group-text'
  })
  const divTableGroupButton = createElement({
    _tag: 'div',
    _class: 'table__group-button'
  })
  //data
  const imgPicture = createElement({
    _tag: 'img',
    _class: 'table__img',
    _attr: 'src',
    _attrValue: book.imgUrl || ''
  })
  const pName = createElement({
    _tag: 'p',
    _class: 'table__name',
    _content: book.name
  })
  const pAuthor = createElement({
    _tag: 'p',
    _class: 'table__author',
    _content: book.author
  })
  const pDate = createElement({
    _tag: 'p',
    _class: 'table__date',
    _content: book.date
  })
  //buttons
  const editButton = createElement({
    _tag: 'button',
    _class: 'table__button-edit',
    _content: 'Редактировать'
  })
  editButton.addEventListener( 'click', ()=>{
    editTableElement(id)
    displayTableList()
  })
  const deleteButton = createElement({
    _tag: 'button',
    _class: 'table__button-delete',
    _content: 'Удалить'
  })
  deleteButton.addEventListener( 'click', ()=>{
    deleteTableItem(id)
    displayTableList()
  })
  appendChild( divTableGroupButton, editButton, deleteButton )
  appendChild( divTableGroupText, pName, pAuthor, pDate)
  appendChild( divTableImage, imgPicture )
  appendChild( divTableItem, divTableImage, divTableGroupText, divTableGroupButton )
  fragment.appendChild(divTableItem)
}

//CLEAR FORM
function formClear(){
  const form = document.querySelector('.form')
  const id = form.querySelector('input[name="id"]').value = ''
  const name = form.querySelector('input[name="name"]').value = ''
  const author = form.querySelector('input[name="author"]').value= ''
  const date = form.querySelector('input[name="date"]').value = ''
  const imgUrl = form.querySelector('input[name="image"]').value = ''
}

//HELPERS
function createElement({_tag, _class, _attr, _attrValue, _content}){
  const element = document.createElement(_tag)
  if (_class) element.classList.add(_class)
  if (_attr) element.setAttribute(_attr, _attrValue)
  if (_content) element.textContent = _content
  return element
}
function appendChild(where, ...elements){
  if(elements && where) {
    elements.forEach((elem)=> where.appendChild(elem))
  }
}
