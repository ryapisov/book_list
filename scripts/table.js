const table = document.querySelector('.table')

function tableList(books) {
  table.textContent = ''

  const fragment = document.createDocumentFragment()

  books.forEach((book) => {
    fragment.appendChild(tableItem(book))
  })
  table.appendChild(fragment)
}

function tableItem(book) {
  const {
    id,
    name,
    author,
    date,
    imgUrl
  } = book

  const tableItem = document.createElement('div')
  tableItem.classList.add('table__item')
  tableItem.setAttribute('id', id)

  const tableImage = document.createElement('div')
  tableImage.classList.add('table__image')

  const image = document.createElement('img')
  image.classList.add('table__img')
  image.setAttribute('src', imgUrl)
  image.setAttribute('alt', 'нет фото')

  tableImage.appendChild(image)
  tableItem.appendChild(tableImage)

  const tableGroupText = document.createElement('div')
  tableGroupText.classList.add('table__group-text')

  const tableName = document.createElement('p')
  tableName.classList.add('table__name')
  tableName.textContent = name

  const tableAuthor = document.createElement('p')
  tableAuthor.classList.add('table__author')
  tableAuthor.textContent = author

  const tableDate = document.createElement('p')
  tableDate.classList.add('table__date')
  tableDate.textContent = date

  tableGroupText.appendChild(tableName)
  tableGroupText.appendChild(tableAuthor)
  tableGroupText.appendChild(tableDate)
  tableItem.appendChild(tableGroupText)

  const tableGroupButton = document.createElement('div')
  tableGroupButton.classList.add('table__group-button')

  const buttonEdit = document.createElement('button')
  buttonEdit.classList.add('table__button-edit')
  buttonEdit.textContent = "Редактировать"

  buttonEdit.addEventListener('click', () => {
    buttonEdit.disabled = true
    formNew(book)
  })

  const buttonDelete = document.createElement('button')
  buttonDelete.classList.add('table__button-delete')
  buttonDelete.textContent = "Удалить"

  buttonDelete.addEventListener('click', () => {
    const tableItemDelete = table.querySelector(`div[id="${id}"]`)
    table.removeChild(tableItemDelete)
    deleteBook(id)
  })

  tableGroupButton.appendChild(buttonEdit)
  tableGroupButton.appendChild(buttonDelete)
  tableItem.appendChild(tableGroupButton)

  return tableItem
}

function deleteBook(id) {
  const index = bookList.findIndex(n => n.id == id)
  if (index !== -1) {
    bookList.splice(index, 1)
    console.log(bookList)
  }
}

tableList(bookList)
