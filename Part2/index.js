const idInput = document.getElementById('idInput')
const colorInput = document.getElementById('colorInput')


function setCard(){
    const card = document.getElementById(idInput.value)
    card.style.color = colorInput.value
}
function refresh(){
    const cardone = document.getElementById("hearts")
    const cardtwo = document.getElementById("diamonds")
    const cardthree = document.getElementById("clubs")
    const cardfour = document.getElementById("spades")
    cardone.style.color = null
    cardtwo.style.color = null
    cardthree.style.color = null
    cardfour.style.color = null
}