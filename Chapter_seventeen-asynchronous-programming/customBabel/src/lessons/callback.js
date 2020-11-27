function getRequest(url, callback) {

}

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

getRequest(`${BASE_URL}/posts/1`, (err, res) => {
    if (err) {
        throw new Error('Error Occurred')
    }

    let { userId } = res

    getRequest(`${BASE_URL}/users/${userId}`, (err, res) => {
        if (err) {
            throw new Error('Error Occurred')
        }

        getRequest(`${BASE_URL}/posts/1/comments/${res.id}`, (err, res)=>{
            if(err){
                throw new Error('Error Occurred')
            }
            console.log(res);
        })
        
    })
})