let postForm = document.getElementById('post-form');
let posts = document.getElementById('posts')

let URL = 'https://jsonplaceholder.typicode.com/posts';

postForm.addEventListener('submit', function (e) {
    e.preventDefault()

    let title = this.title.value || undefined
    let body = this.body.value || undefined

    if (title && body) {
        let postObj = {
            userId: 100,
            title,
            body,
        }

        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/JSON'
            },
            body: JSON.stringify(postObj)
        })
            .then(res => res.json())
            .then(data => {
                let item = listItemGenerator(data);
                posts.appendChild(item);
                this.reset();
            })
            .catch(e => {
                console.log(e.message);
            })

    } else {
        alert('Please Provide Every Details')
    }
})

function listItemGenerator (item){
    let li = document.createElement('li');
    li.className='list-group-item';
    li.innerHTML = `${item.id}. ${item.title} By User Id- ${item.userId}`;

    return li
}