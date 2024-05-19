def on_button_pressed_a():
    global delay, mode, mode_select, bird, start
    if game_over == 0:
        if mode_select == 1:
            delay = 1000
            basic.show_leds("""
                . . . . .
                . . . . .
                # # # # #
                # # # # #
                # # # # #
                """)
            basic.pause(500)
            mode = 1
            mode_select = 0
            bird = game.create_sprite(0, 2)
            bird.set(LedSpriteProperty.BLINK, 300)
        else:
            if start == 1:
                if control2 == 0:
                    bird.change(LedSpriteProperty.Y, 1)
                else:
                    bird.change(LedSpriteProperty.Y, -1)
            else:
                start = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_screen_down():
    global start
    start = 0
input.on_gesture(Gesture.SCREEN_DOWN, on_gesture_screen_down)

def on_button_pressed_ab():
    global control2, start
    if game_over == 0:
        if start == 1:
            control2 += 1
        else:
            start = 1
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global delay, mode, mode_select, bird, start
    if game_over == 0:
        if mode_select == 1:
            delay = 1250
            basic.show_leds("""
                . . . . #
                . . . # #
                . . # # #
                . # # # #
                # # # # #
                """)
            basic.pause(500)
            mode = 2
            mode_select = 0
            bird = game.create_sprite(0, 2)
            bird.set(LedSpriteProperty.BLINK, 300)
        else:
            if start == 1:
                if control2 == 0:
                    bird.change(LedSpriteProperty.Y, -1)
                else:
                    bird.change(LedSpriteProperty.Y, 1)
            else:
                start = 1
input.on_button_pressed(Button.B, on_button_pressed_b)

emptyObstacleY = 0
ticks = 0
bird: game.LedSprite = None
delay = 0
game_over = 0
control2 = 0
start = 0
mode = 0
mode_select = 0
mode_select = 1
mode = 0
start = 0
control2 = 0
index = 0
obstacles: List[game.LedSprite] = []

def on_forever():
    global control2
    if control2 == 2:
        control2 = 0
basic.forever(on_forever)

def on_forever2():
    global delay
    if (0) == (1):
        if mode == 2:
            delay = delay - 25
            basic.pause(1000)
basic.forever(on_forever2)

def on_forever3():
    global emptyObstacleY, ticks
    if start == 1:
        while len(obstacles) > 0 and obstacles[0].get(LedSpriteProperty.X) == 0:
            obstacles.remove_at(0).delete()
            game.set_score(game.score() + 1)
        for obstacle2 in obstacles:
            obstacle2.change(LedSpriteProperty.X, -1)
        if ticks % 3 == 0:
            emptyObstacleY = randint(0, 4)
            for index2 in range(5):
                if index2 != emptyObstacleY:
                    obstacles.append(game.create_sprite(4, index2))
        for obstacle3 in obstacles:
            if obstacle3.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) and obstacle3.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y):
                game.set_score(game.score() / 4)
                game.game_over()
        ticks += 1
        basic.pause(delay)
basic.forever(on_forever3)
