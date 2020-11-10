
// var isRunning = true

// while (isRunning) {
//     var rand = Math.floor(Math.random() * 10 + 1)
//     if (rand === 9) {
//         console.log('Winer Winner Chicken Dinner');
//         isRunning = false;
//     } else {
//         console.log('you have got ' + rand);
//     }
// }

for (; ;) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand === 9) {
        console.log('Winer Winner Chicken Dinner');
        break;
    } else {
        console.log('you have got ' + rand);
    }
}