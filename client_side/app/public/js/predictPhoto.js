function predictPhoto(){
    const file = document.getElementById('file')
    const txt = document.getElementById('txt')

    file.onchange = () => {
        let render = file.files[0]

        let img = document.getElementById('img')
        let reader = new FileReader()

        reader.onload = (e) => {
            img.setAttribute('src',e.target.result)
        }
        txt.style.display = 'none'
        img.style.display = 'block'
        reader.readAsDataURL(render)
    }
}

predictPhoto()