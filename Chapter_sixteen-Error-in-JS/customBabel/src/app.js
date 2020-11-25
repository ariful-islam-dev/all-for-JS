// let n = 10
// if(n>5){
//     throw new Error('N is Greater Than 5')
// }

// let n = 56
// if (n > 50) {
//     throw new RangeError('The Number is To Long')
// }

// console.log(a);

//******************if else Error Handling******** */

// function changeToInt(v){
//     let result = Number.parseInt(v)
//     // console.log(result);
//     if(!result){
//         return'Please Provide a Value which is able to convert in Interger'
//     }

//     return result
// }

// let result = changeToInt('aere;e86.26wseirew')
// console.log(result);

//*****************Try Catch Error Handling*********** */

// function makeWords(text) {
//     try {
//         let str = text.trim()
//         let words = str.split(' ')

//         return words
//     } catch (e) {
//         //    console.log(e.message);
//         console.log('please provie a valid test');
//     }
//     // let str = text.trim()
//     // let words = str.split(' ')

//     // return words
// }

// let words = makeWords(86)
// console.log(words);

class CustomError extends Error
{
    constructor(msg){
        super(msg)

        if(Error.captureStackTrace){
            Error.captureStackTrace(this, CustomError)
        }                    
    }
}
try {

    console.log('I am Line 1');
    throw new CustomError('I am your Error')
    console.log('I am Line 2');
    console.log('I am Line 3');
    console.log('I am Line 4');
    console.log('I am Line 5');
} catch (e){
    console.dir(e);
    console.log('This is a Custom Error Message');
} finally {
    console.log('I am Finall Block');
}