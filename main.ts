input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.compassHeading())
    basic.pause(200)
    if (0 == input.compassHeading()) {
        basic.showString("N")
        music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 120)
    } else {
        if (45 == input.compassHeading()) {
            basic.showString("NE")
            music.playMelody("B B B B B B B B ", 120)
        } else {
            if (90 == input.compassHeading()) {
                basic.showString("E")
                music.playMelody("A A A A A A A A ", 120)
            } else {
                if (135 == input.compassHeading()) {
                    basic.showString("SE")
                    music.playMelody("G G G G G G G G ", 120)
                } else {
                    if (180 == input.compassHeading()) {
                        basic.showString("S")
                        music.playMelody("F F F F F F F F ", 120)
                    } else {
                        if (225 == input.compassHeading()) {
                            basic.showString("WS")
                            music.playMelody("E E E E E E E E ", 120)
                        } else {
                            if (270 == input.compassHeading()) {
                                basic.showString("W")
                                music.playMelody("D D D D D D D D ", 120)
                            } else {
                                if (315 == input.compassHeading()) {
                                    basic.showString("WN")
                                    music.playMelody("C C C C C C C C ", 120)
                                } else {
                                    basic.showIcon(IconNames.No)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    input.calibrateCompass()
})
