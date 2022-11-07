enum RadioMessage {
    message1 = 49434,
    bullet = 22924,
    touch = 28844
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        ennemie = game.createSprite(2, 4)
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendMessage(RadioMessage.bullet)
    bullet = game.createSprite(player.get(LedSpriteProperty.X), 4)
    for (let index = 0; index < 4; index++) {
        basic.pause(100)
        bullet.change(LedSpriteProperty.Y, -1)
        radio.sendValue("bul y", bullet.get(LedSpriteProperty.Y))
        if (bullet.isTouching(enn_bullet)) {
            bullet.delete()
        }
    }
    if (bullet.isTouching(ennemie)) {
        radio.sendMessage(RadioMessage.touch)
        game.addLife(1)
    }
    bullet.delete()
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
    radio.sendValue("enn x", player.get(LedSpriteProperty.X))
})
radio.onReceivedMessage(RadioMessage.touch, function () {
    game.removeLife(1)
})
radio.onReceivedMessage(RadioMessage.bullet, function () {
    enn_bullet = game.createSprite(ennemie.get(LedSpriteProperty.X), 4)
})
input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
    radio.sendValue("enn x", player.get(LedSpriteProperty.X))
})
radio.onReceivedValue(function (name, value) {
    if (name == "enn x") {
        ennemie.set(LedSpriteProperty.X, value)
    }
    if (name == "bul y") {
        enn_bullet.set(LedSpriteProperty.Y, value)
    }
})
let enn_bullet: game.LedSprite = null
let bullet: game.LedSprite = null
let ennemie: game.LedSprite = null
let player: game.LedSprite = null
radio.setGroup(709473029587)
radio.sendNumber(0)
player = game.createSprite(2, 4)
game.setLife(3)
