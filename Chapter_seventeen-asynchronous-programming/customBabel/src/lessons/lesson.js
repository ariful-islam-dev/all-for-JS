console.log('I am Line One');
setTimeout(() => {
    console.log('I am Line Two');
}, 3000)

setTimeout(() => {
    console.log('I am Line Three');
}, 0)


console.log('I am Line Four');

setTimeout(() => {
    console.log('I am Line Five');
}, 1000)


// setTimeout(()=>{
//     console.log('I have Done');
// }, 5000)