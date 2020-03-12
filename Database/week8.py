#print('Hello World')
#intro = "intro to Database"
#print('this is',intro)

#name = input('Enter your Name: ')
#age = int(input('Enter your age: '))
#height = float(input('Enter your height in meters: '))

#print('your name is ',name,', your are ',age,' years old \n','and you are ',height,' meters tall')

#temp_cel = int(input('Enter the temperature in Celcius:'))

#temp_fahr = (9/5*temp_cel)+32

#print('{0}C is equal to {1}F'.format(temp_cel,temp_fahr))

choice = int(input('Select 1 to convert Celcius to Fahrenheit\nSelect 2 to convert Fahrenheit to Celcius'))

if choice == 1:
    temp_cel = int(input('Enter the temperature in Celcius:'))
    temp_fahr = (9/5*temp_cel)+32
    print('{0}C is equal to {1}F'.format(temp_cel,temp_fahr))

elif choice == 2:
    temp_fahr = int(input('Enter the temperature in Fahrenheit:'))
    temp_cel = (temp_fahr-32)*(5/9)
    print('{1}F is equal to {0:.1f}C'.format(temp_cel,temp_fahr))

else:
    print('choose only 1 or 2')