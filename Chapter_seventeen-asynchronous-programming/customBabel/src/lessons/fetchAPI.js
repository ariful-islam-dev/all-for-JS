const BASE_URL = 'https://jsonplaceholder.typicode.com';

// fetch(`${BASE_URL}/users/1`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         return Promise.resolve('Something')
//     })
//     .then(str=>{
//         console.log(str);
//         return Promise.resolve('Another Promise')
//     })
//     .then(another=>{
//         console.log(another);
//     })
//     .catch(e => {
//         console.log(e.message);
//     })

// function getRequest(url, callback) {
//     const xhr = new XMLHttpRequest()
//     xhr.open('get', url)

//     xhr.onreadystatechange = function (e) {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 let res = JSON.parse(xhr.response)
//                 callback(null, res)
//             } else {
//                 callback(xhr.status, null)
//             }
//         }
//     }
//     xhr.send()
// }

function getRequest(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('get', url)

        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let res = JSON.parse(xhr.response)
                    resolve(res)
                } else {
                    reject(new Error('Error Occurred'))
                }
            }
        }
        xhr.send()
    })
}

let res = getRequest(`${BASE_URL}/users/6`)
    .then(data=>{
        console.log(data);
    })
    .catch(e=>{
        console.log(e.message);
    })
// console.log(res);