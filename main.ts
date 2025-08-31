basic.forever(function () {
    if (input.soundLevel() > 63) {
        input.setSoundThreshold(SoundThreshold.Loud, 52)
        // Envoie le message
        radio.sendString("ALERTE")
        // Pause 1 seconde pour éviter d'envoyer trop de messages
        basic.pause(1000)
        // Remet l'écran à zéro
        basic.clearScreen()
    }
})
