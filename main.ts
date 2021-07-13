touchbit.on(touchbit.TouchPad.b, touchbit.TouchEvent.pressed, function () {
    music.playTone(330, music.beat(BeatFraction.Double))
})
touchbit.on(touchbit.TouchPad.d, touchbit.TouchEvent.pressed, function () {
    music.playTone(392, music.beat(BeatFraction.Whole))
})
touchbit.on(touchbit.TouchPad.right, touchbit.TouchEvent.pressed, function () {
    music.playTone(440, music.beat(BeatFraction.Whole))
})
touchbit.on(touchbit.TouchPad.left, touchbit.TouchEvent.pressed, function () {
    music.playTone(262, music.beat(BeatFraction.Double))
})
touchbit.on(touchbit.TouchPad.c, touchbit.TouchEvent.pressed, function () {
    music.playTone(349, music.beat(BeatFraction.Whole))
})
touchbit.on(touchbit.TouchPad.a, touchbit.TouchEvent.pressed, function () {
    music.playTone(294, music.beat(BeatFraction.Double))
})
