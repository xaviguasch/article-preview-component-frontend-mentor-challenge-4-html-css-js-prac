const shareBtns = document.querySelectorAll('.share-btn')
const authorArea = document.querySelector('.author-area')
const shareArea = document.querySelector('.share-area')

shareBtns.forEach((shareBtn) => {
  shareBtn.addEventListener('click', () => {
    authorArea.classList.toggle('hidden')
    shareArea.classList.toggle('visible')
  })
})
