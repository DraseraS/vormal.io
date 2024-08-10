const btn = document.getElementById('email')

btn.onclick = () => {
    navigator.clipboard.writeText('devvormal@gmail.com')
}