const form = document.getElementById('form')
const resp = document.getElementById('resp')
const modal = document.getElementById('modal')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    resp.textContent = document.querySelector('input[name="resp"]:checked').value
    form.classList.add('display')
    modal.classList.remove('display')
})