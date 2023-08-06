let $ = document
 
const colorA = $.querySelector('#color-a')
const colorB = $.querySelector('#color-b')
const arrowBtns = $.querySelectorAll('.buttons button')
const generateBtn = $.querySelector('#submit')
const cssCode = $.querySelector('#code')
const copyBtn = $.querySelector('#copy')

let arrow = null
arrowBtns.forEach(arrowBtn => {

    arrowBtn.addEventListener('click',() => {
        arrow = arrowBtn.dataset.direction

        let activeBtn = $.querySelector('.buttons .active')
        if(activeBtn){
            activeBtn.removeAttribute('class')
        }
        
        arrowBtn.classList.add('active')
    })

})

function generateColor () {
    let firstColor = colorA.value
    let secondColor = colorB.value
    
    if(arrow && firstColor && secondColor) {
        let gradianCode = `linear-gradient(${arrow} , ${firstColor} , ${secondColor})`
        cssCode.textContent = `background-image: ${gradianCode}`
        document.body.style.backgroundImage = gradianCode
    }else{
        alert('please set arrow')
    }
}

function copyCssCode () {
    if(cssCode.textContent){
        window.navigator.clipboard.writeText(cssCode.textContent)
    }else{
        alert('there is no text for copy')
    }
}


generateBtn.addEventListener('click', generateColor)
copyBtn.addEventListener('click', copyCssCode)
