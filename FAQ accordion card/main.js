const questions = document.querySelectorAll('.faq-question')

questions.forEach((el) => {
    el.addEventListener('click', (e) => {
        questions.forEach(el => {
            el.textContent !== e.target.textContent ? el.parentElement.removeAttribute('open') : ''
        })
    })
})
