function writeCards(names, events) {
    let array = []
    for (let i = 0; i < names.length; i++) {
        array.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`)
    }
    console.log(array)
    return array
}

function countDown(num) {
    while (num >= 0) {
        console.log(num)
        num--
    }
}