/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Maria Varghese
 * Created on: Sep 2024
 * This program uses servo motors
*/

//variable
const servoNumber1 = robotbit.Servos.S1

//setup 
basic.showIcon(IconNames.Happy)

//when button A is pressed
input.onButtonPressed(Button.A,function(){
    robotbit.Servo(servoNumber1, 10)
    basic.showNumber(10)
    basic.clearScreen()
    basic.showIcon(IconNames.Square)
    basic.clearScreen()
})

//when button B is pressed
input.onButtonPressed(Button.B, function () {
    robotbit.Servo(servoNumber1, 180)
    basic.showNumber(180)
    basic.clearScreen()
    basic.showIcon(IconNames.Diamond)
    basic.clearScreen()
})

//cleanup
basic.clearScreen()
basic.showIcon(IconNames.Happy)
