basic.forever(function () {
    if (input.soundLevel() < 100) {
        basic.showIcon(IconNames.SmallHeart)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
