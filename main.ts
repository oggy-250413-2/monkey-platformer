scene.onOverlapTile(SpriteKind.Projectile, assets.tile`poison pit`, function (sprite, location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    simplified.gravity_jump(mySprite, 50)
    animation.runImageAnimation(
    mySprite,
    assets.animation`jump`,
    150,
    false
    )
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, 0)
    projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
    animation.runImageAnimation(
    projectile,
    assets.animation`splode`,
    100,
    false
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), true)
    tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), assets.tile`bounce`)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`bounce`, function (sprite8, location7) {
    tiles.setWallAt(location7, false)
    tiles.setTileAt(location7, assets.tile`transparency16`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walk left`,
    150,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`orange bauble`, function (sprite2, location2) {
    tiles.setTileAt(location2, assets.tile`transparency16`)
    score += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`poison pit`, function (sprite7, location6) {
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite3, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walk right`,
    150,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`chest1`, function (sprite6, location5) {
    scene.setBackgroundImage(assets.image`background2`)
    tiles.setTilemap(tilemap`level2`)
    animation.runMovementAnimation(
    mySprite,
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
    mySprite.say("Level 2!", 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`chest2`, function (sprite5, location4) {
    game.over(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`skyblock`, function (sprite4, location3) {
    tiles.setWallAt(location3, false)
    tiles.setTileAt(location3, assets.tile`transparency16`)
})
info.onLifeZero(function () {
    game.over(false, effects.melt)
})
let score = 0
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`background`)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`stand`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 50
scene.cameraFollowSprite(mySprite)
