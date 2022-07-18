const arr_id = ["a", "s", "d", "f", "g", "h", "j", "e", "t", "y", "u", "w"]

document.addEventListener('keydown', function on_presed (event){
    if (arr_id.includes(event.key.toLowerCase())){
        console.log(`The '${event.key.toUpperCase()}' key is pressed.`)
        let sound = new Audio(`./sounds/${event.key.toUpperCase()}.mp3`)
        sound.play()
    }
    else {
        console.log("Undefined key")
    }
})



