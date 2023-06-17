import * as THREE from "three"
import FOG from "vanta/dist/vanta.fog.min"


const section = document.getElementsByTagName("section")[0]

FOG({
    el:section ,
    THREE,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00
})


const button = document.querySelector("button")

let speed = 1.5

button.addEventListener("click" , () => {
    speed = speed ===1.5 ? 4.5 :1.5

    effect.setOptions({
        speed,
    })
})