scene.onOverlapTile(SpriteKind.Projectile, assets.tile`
        poison pit
    `, function on_overlap_tile(sprite: Sprite, location: tiles.Location) {
    tiles.setWallAt(location, false)
    tiles.setTileAt(location, assets.tile`
        transparency16
    `)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function on_up_pressed() {
    simplified.gravity_jump(mySprite, 50)
    animation.runImageAnimation(mySprite, assets.animation`
        jump
    `, 150, false)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function on_b_pressed() {
    
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
    animation.runImageAnimation(projectile, assets.animation`
        splode
    `, 100, false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), true)
    tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), assets.tile`
            bounce
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    animation.runImageAnimation(mySprite, assets.animation`
            walk left
        `, 150, false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        orange bauble
    `, function on_overlap_tile2(sprite2: Sprite, location2: tiles.Location) {
    
    tiles.setTileAt(location2, assets.tile`
        transparency16
    `)
    score += 1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    animation.runImageAnimation(mySprite, assets.animation`
            walk right
        `, 150, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function on_on_overlap(sprite3: Sprite, otherSprite: Sprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`
        skyblock
    `, function on_overlap_tile3(sprite4: Sprite, location3: tiles.Location) {
    tiles.setWallAt(location3, false)
    tiles.setTileAt(location3, assets.tile`
        transparency16
    `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        chest2
    `, function on_overlap_tile4(sprite5: Sprite, location4: tiles.Location) {
    game.over(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        chest1
    `, function on_overlap_tile5(sprite6: Sprite, location5: tiles.Location) {
    scene.setBackgroundImage(assets.image`
        background2
    `)
    tiles.setTilemap(tilemap`
        level2
    `)
    animation.runMovementAnimation(mySprite, animation.animationPresets(animation.flyToCenter), 2000, false)
    mySprite.say("Level 2!", 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        poison pit
    `, function on_overlap_tile6(sprite7: Sprite, location6: tiles.Location) {
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`
        bounce
    `, function on_overlap_tile7(sprite8: Sprite, location7: tiles.Location) {
    tiles.setWallAt(location7, false)
    tiles.setTileAt(location7, assets.tile`
        transparency16
    `)
})
let projectile : Sprite = null
let mySprite : Sprite = null
let score = 0
scene.setBackgroundImage(assets.image`
    background
`)
tiles.setTilemap(tilemap`
    level1
`)
mySprite = sprites.create(assets.image`
    stand
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 50
scene.cameraFollowSprite(mySprite)
