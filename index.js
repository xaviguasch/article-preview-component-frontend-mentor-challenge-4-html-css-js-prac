const shareBtns = document.querySelectorAll('.share-btn')
const shareArea = document.querySelector('.share-area')

shareBtns.forEach((shareBtn) => {
  shareBtn.addEventListener('click', () => {
    shareArea.classList.toggle('visible')
  })
})
