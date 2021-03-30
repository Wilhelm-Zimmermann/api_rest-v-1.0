function hideShow(){
    const formPost = document.getElementById('form_post')
    const post = document.getElementById('posts')
    const header = document.getElementById('header').style
    let show = false
    formPost.style.display = 'none'

    upload.onclick = () => {
        show = !show
        show ? formPost.style.display = 'flex' : formPost.style.display = 'none'
        show ? header.position = 'initial' : header.position = 'fixed'
        show ? post.style.display = 'none' : post.style.display = 'block'
    }
}
hideShow()