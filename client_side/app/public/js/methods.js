window.onload = () => {
        

    function loadPosts(){
        const http = new XMLHttpRequest()
        http.open('GET','http://localhost:8080/posts')

        http.onload = () => {
            const response = JSON.parse(http.responseText)
            response.map(single => {
                const post = document.getElementById('posts')
                post.innerHTML += 
                '<div class="single_post">'+
                    '<h2>'+single.title+'</h2>'+
                    '<img src="http://localhost:8080/uploads/'+single.img_url+'"/>'+
                    `<div class='comentarios' id='all-coments_${single._id}'></div>`+
                    '<div class="coment_field">'+
                     `<input type='text' id='coment_${single._id}' placeholder='Type here...'/>`+
                     `<button value='${single._id}' class='btn_coment'>Coment</button>`+
                     '</div>'+
                '</div>'

                if(single.coments != undefined){
                    let coments = single.coments
                    let comentContainer = document.getElementById('all-coments_'+single._id)

                    coments.forEach(i => {
                        comentContainer.innerHTML +=
                        '<div class="txt_coment">'+
                            '<p>'+i.coment+'</p>'+
                            '<button class="btn_remove" id="btn_remove" value="del_'+i.id_coment+'">X</button>'
                        '</div>'
                    })
                }

                let btn_remove = document.querySelectorAll('.btn_remove')

                for(let j = 0; j < btn_remove.length; j++){
                    btn_remove[j].onclick = (e) => {
                        let value = e.target.value
                        btn_remove[j].parentNode.remove()
                        let id = value.split('_')
                        id = id[1]
                        console.log(id)

                        let http = new XMLHttpRequest()

                        http.open('DELETE','http://localhost:8080/posts/'+id+'/delete')
                        http.send()
                    }
                }



                let btn_coment = document.querySelectorAll('.btn_coment')
                for(let i = 0; i< btn_coment.length;i++){
                    btn_coment[i].onclick = (e) => {
                        let id = e.target.value
                        let coment = document.getElementById('coment_'+id).value
                        
                        const http = new XMLHttpRequest()

                        let formData = new FormData()

                        formData.append('coment',coment)

                        http.onreadystatechange = () => {
                            if(http.readyState === 4){
                                window.location.href = 'http://localhost:80'
                            }
                        }


                        http.open('PUT','http://localhost:8080/posts/'+id)
                        http.send(formData)
                        
                    }
                }
            })
        }
        
        http.send()
    }

    loadPosts()

    function addPost(){
        const btn_post = document.getElementById('btn_post')

        btn_post.onclick = () => {
            const title = document.getElementById('title').value
            const file = document.getElementById('file').files[0]

            let formData = new FormData()

            formData.append('title',title)
            formData.append('file',file)

            const http = new XMLHttpRequest()

            http.onreadystatechange = () => {
                if(http.readyState === 4){
                    let res = JSON.parse(http.responseText)
                    if(res.msg == 4){
                        alert('There are fields empty')
                    }else{
                        window.location.href = 'http://localhost'
                    }
                }
            }

            http.open('POST','http://localhost:8080/posts')
            http.send(formData)

        }
    }

    addPost()
}