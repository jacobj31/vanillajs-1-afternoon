let board = []




function play(clickedId){
    const clickedElement = document.getElementById(clickedId)
    const playerSpan = document.getElementById('player')
    if (playerSpan.innerText === 'X'){
        board[clickedId] = 'X'
        clickedElement.innerText = 'X'
        playerSpan.innerText = 'O'
    }else {playerSpan.innerText = 'X'
        clickedElement.innerText = 'O'
        board[clickedId] = 'O'
}
const topLeft = board[0];
const topCenter = board[1];
const topRight = board[2];
const middleLeft = board[3];
const middleCenter = board[4];
const middleRight = board[5];
const bottomLeft = board[6];
const bottomCenter = board[7];
const bottomRight = board[8];

if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight){
    alert(`winner is ${topLeft}`)
    return
}
if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight){
    alert(`winner is ${topLeft}`)
    return
}
if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
    alert(`winner is ${topLeft}`)
    return
}
if (topRight !== undefined && topRight === middleCenter && topRight === bottomLeft){
    alert(`winner is ${topRight}`)
    return
}
if (topRight !== undefined && topRight === middleRight && topRight === bottomRight){
    alert(`winner is ${topRight}`)
    return
}
if (bottomRight !== undefined && bottomRight === bottomCenter && bottomRight === bottomCenter){
    alert(`winner is ${bottomRight}`)
    return
}
if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter){
    alert(`winner is ${topCenter}`)
    return
}
if (middleRight !== undefined && middleRight === middleCenter && middleRight === middleLeft){
    alert(`winner is ${middleRight}`)
    return
}

let boardFull = true
for(i = 0; i < 9; i++){
    if (board[i] === undefined){
        boardFull = false
    }
}
if (boardFull === true){
    window.alert("cat's game")

}

}
