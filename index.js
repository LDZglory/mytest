var body = document.querySelector('body');
var colorarr = ['red', 'orange', 'yellow', 'green', 'cayn', 'blue', 'purple']
setInterval(() => {
    body.style.backgroundColor = colorarr[Math.floor(Math.random() * 7)]
}, 200)