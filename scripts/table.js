//DISPLAY TABLE
displayTableList()

function displayTableList(){
  const table = document.querySelector('.table')

  table.textContent = null

  const fragment = document.createDocumentFragment()

  bookList.forEach((book, i) => {
    tableItem(book.id || i, book, fragment)
  })

  table.appendChild(fragment)
}

//ITEM TABLE
function tableItem(id, book, fragment){
  const divTableItem = createElement({
    _tag:'div', _class:'table__item', _attr:'id',  _attrValue:id,
  })

  const divTableImage = createElement({
    _tag:'div', _class:'table__image'
  })

  const divTableGroupText = createElement({
    _tag:'div', _class:'table__group-text'
  })

  const divTableGroupButton = createElement({
    _tag: 'div', _class: 'table__group-button'
  })

  const imgPicture = createElement({
    _tag:'img', _class:'table__img', _attr:'src', _attrValue:book.imgUrl || ''
  })

  const pName = createElement({
    _tag:'p', _class:'table__name', _content:book.name
  })

  const pAuthor = createElement({
    _tag:'p', _class:'table__author',_content:book.author
  })
  const pDate = createElement({
    _tag:'p', _class:'table__date', _content:book.date
  })
  //buttons
  const editButton = createElement({
    _tag:'button', _class:'table__button-edit', _content:'Редактировать'
  })

  const deleteButton = createElement({
    _tag:'button', _class:'table__button-delete', _content:'Удалить'
  })

  editButton.addEventListener( 'click', ()=> editTableElement(id) )
  deleteButton.addEventListener( 'click', ()=> deleteTableItem(id) )

  divTableGroupButton.appendChild( editButton )
  divTableGroupButton.appendChild( deleteButton )

  divTableGroupText.appendChild( pName )
  divTableGroupText.appendChild( pAuthor )
  divTableGroupText.appendChild( pDate )

  divTableImage.appendChild( imgPicture )
  divTableItem.appendChild( divTableImage )
  divTableItem.appendChild( divTableGroupText  )
  divTableItem.appendChild( divTableGroupButton )

  fragment.appendChild(divTableItem)
}

function editTableElement(id){
  let someBook = bookList.find(function(book) {
    return book.id == id
  })

  formEditBook(someBook)
}

function deleteTableItem(id){
  const index = bookList.findIndex(book => book.id === id)

  if(index !== -1){
    bookList.splice(index, 1)
  }

  displayTableList()
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
