const like_btn = document.querySelector('.like-btn')
const reaction_icon_arr = document.querySelectorAll('.reaction-icon')
like_btn.addEventListener('mouseenter', () => {
  reaction_icon_arr.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('show')
    }, i*100)
  })
  
})
like_btn.addEventListener('mouseleave', () => {
  reaction_icon_arr.forEach((el, i) => 
      el.classList.remove('show'))
})