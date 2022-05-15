let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/gato.png') {
      miImage.setAttribute('src','images/cat.png');
    } else {
      miImage.setAttribute('src', 'images/gato.png');
    }
}