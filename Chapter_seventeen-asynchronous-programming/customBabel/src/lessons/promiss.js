// let p1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 5000, 'One')
// })

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, 'Two')
// })
// // console.log(p1);
// // console.log(p2);

// p1.then((v) => {
//     console.log(v);
// })

// p2.then((v) => {
//     console.log(v);
// })


function getIphone(isPassed){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(isPassed){
                resolve('I have Got an I-Phone')
            }else{
                reject(new Error('You have Failed'))
            }
        }, 2000)
    })
}

// console.log(getIphone(false));

getIphone(false)
    .then((res)=>{
        console.log(res);
    })
    .catch((e)=>{
        console.log(e.message);
    })