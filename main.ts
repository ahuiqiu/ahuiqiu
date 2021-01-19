let i = 0
basic.forever(function () {
    i = input.temperature()
    basic.showNumber(i)
    while (i >= 31) {
        i = input.temperature()
        soundExpression.giggle.playUntilDone()
    }
})
