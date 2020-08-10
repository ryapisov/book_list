// OPEN FORM new BOOK
const openNewFormBook = document.querySelector('.addBookButton')
openNewFormBook.addEventListener('click', ()=>{
  formClear()
  formNewBook()
})


// function saveBook(){
//   const form = document.querySelector('.form')
//   const button = form.querySelector('.form__button-save')
//   button.addEventListener('click', ()=>{
//   //  console.log( formNewBook() )
//     form.classList.remove('form_show')
//     //formClear()
//   })
// }
//
