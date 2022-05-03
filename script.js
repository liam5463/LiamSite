const canvas = document.querySelector("canvas")

const context = canvas.getContext("2d")

const pugDimensions = {width: 710, height: 1000}

const loopingPugs = 30
const offsetDistance = 70

canvas.width = window.innerWidth
canvas.height = window.innerHeight

context.translate(window.innerWidth/2, window.innerHeight/2)

const image = new Image()
image.src = "./assets/duk.jpg"

image.onload = () => {

    startDrawing()

}

function draw(offset) {

    context.drawImage(image, 
    -pugDimensions.width/2 - offset/2,
    -pugDimensions.height/2 - offset/2,
    pugDimensions.width + offset,
    pugDimensions.height + offset)

}

function imageLoop() {

    for (let i = loopingPugs; i >= 0; i--) {

        draw(i * offsetDistance)

    }

    requestAnimationFrame(imageLoop)

}

function startDrawing() {

    requestAnimationFrame(imageLoop)

}