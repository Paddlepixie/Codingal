print("Hello, AI!")
name = input("What is your name? ")
print("Hello", name)
mood = input("Are you feeling good or bad?")
mood = mood.lower()
if mood=="good" :
    print("Yay")
elif mood=="bad" :
    print("Oh no")
else: 
    print("Please enter a valid string")