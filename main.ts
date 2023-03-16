input.onButtonPressed(Button.A, function () {
    servos.P1.run(50)
})
let distance = 0
led.enable(false)
let display = TM1637.create(
DigitalPin.P0,
DigitalPin.P1,
7,
4
)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P14,
    DigitalPin.P13,
    PingUnit.Inches
    )
})
basic.forever(function () {
    servos.P0.setAngle(90)
})
