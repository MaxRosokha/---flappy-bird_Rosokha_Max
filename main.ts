input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (game_over == 0) {
        if (mode_select == 1) {
            delay = 1000
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.pause(500)
            mode = 1
            mode_select = 0
            bird = game.createSprite(0, 2)
            bird.set(LedSpriteProperty.Blink, 300)
        } else if (start == 1) {
            if (control2 == 0) {
                bird.change(LedSpriteProperty.Y, 1)
            } else {
                bird.change(LedSpriteProperty.Y, -1)
            }
            
        } else {
            start = 1
        }
        
    }
    
})
input.onGesture(Gesture.ScreenDown, function on_gesture_screen_down() {
    
    start = 0
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    if (game_over == 0) {
        if (start == 1) {
            control2 += 1
        } else {
            start = 1
        }
        
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (game_over == 0) {
        if (mode_select == 1) {
            delay = 1250
            basic.showLeds(`
                . . . . #
                . . . # #
                . . # # #
                . # # # #
                # # # # #
                `)
            basic.pause(500)
            mode = 2
            mode_select = 0
            bird = game.createSprite(0, 2)
            bird.set(LedSpriteProperty.Blink, 300)
        } else if (start == 1) {
            if (control2 == 0) {
                bird.change(LedSpriteProperty.Y, -1)
            } else {
                bird.change(LedSpriteProperty.Y, 1)
            }
            
        } else {
            start = 1
        }
        
    }
    
})
let emptyObstacleY = 0
let ticks = 0
let bird : game.LedSprite = null
let delay = 0
let game_over = 0
let control2 = 0
let start = 0
let mode = 0
let mode_select = 0
mode_select = 1
mode = 0
start = 0
control2 = 0
let index = 0
let obstacles : game.LedSprite[] = []
basic.forever(function on_forever() {
    
    if (control2 == 2) {
        control2 = 0
    }
    
})
basic.forever(function on_forever2() {
    
    if ((0 as any) == (1 as any)) {
        if (mode == 2) {
            delay = delay - 25
            basic.pause(1000)
        }
        
    }
    
})
basic.forever(function on_forever3() {
    
    if (start == 1) {
        while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
            obstacles.removeAt(0).delete()
            game.setScore(game.score() + 1)
        }
        for (let obstacle2 of obstacles) {
            obstacle2.change(LedSpriteProperty.X, -1)
        }
        if (ticks % 3 == 0) {
            emptyObstacleY = randint(0, 4)
            for (let index2 = 0; index2 < 5; index2++) {
                if (index2 != emptyObstacleY) {
                    obstacles.push(game.createSprite(4, index2))
                }
                
            }
        }
        
        for (let obstacle3 of obstacles) {
            if (obstacle3.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && obstacle3.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)) {
                game.setScore(game.score() / 4)
                game.gameOver()
            }
            
        }
        ticks += 1
        basic.pause(delay)
    }
    
})
