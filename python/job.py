# Anuj Builds

import random

number = random.randint(1, 500)
guess = int(input("Choose a number between 1 to 500: "))

if guess == number:
    print("Congratulations! You have been selected ✅")
else:
    print("Unfortunately, your application has been rejected ❌")

