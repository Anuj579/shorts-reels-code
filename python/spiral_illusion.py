# @anujbuilds

import turtle

screen = turtle.Screen()
screen.setup(width=640, height=1100)
screen.bgcolor("black")
screen._root.geometry("-1290+0")

t = turtle.Turtle()
t.speed(0)
t.width(2)

colors = ["red", "yellow", "green", "blue", "purple", "orange"]

def draw_spiral():
    for i in range(360):
        t.color(colors[i % 6])
        t.forward(i * 3 / 2 + i) 
        t.left(59)

draw_spiral()

t.hideturtle()

turtle.done()