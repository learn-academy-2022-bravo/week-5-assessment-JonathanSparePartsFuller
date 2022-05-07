# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.
# PsuedoCode
# Make a method called just_two_letters with array and letter as the param
# Use the .select method to select specifically 'o' and 't'
# Return just_two_letters with beverages_array and each letter variable as arguements.

# Make a conditional statement to see if the word in the array contains an o or a t (didn't work)
# Use  the .join to take the strings out of the array (didn't work)



beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def just_two_letters array, letter
    array.select {|word| word.include? letter}
end

p just_two_letters(beverages_array, letter_o)
p just_two_letters(beverages_array, letter_t)

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

# Make a method called sums_of_nums with array as the param
# Use the .sum method to add everything inside the array
# Return sum_of_nums with each variable as the arguement

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def sum_of_nums array
    array.sum
end
p sum_of_nums nums_array1
p sum_of_nums nums_array2
# 76
# 100

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# Make a class called Bike 
# Make a method that is initialized with model, wheels, and current_speed as the objects
# Wheels = 2
# Current_speed = 0
# Make a variable called my_bike that returns all the info with the given sentence
# Return bike_info and have it equall Bike.new with the arguements
# Print bike_info and my_bike with arguements

class Bike
    def initialize(model, wheels, current_speed)
     @model = model
     @wheels = 2
     @current_speed = current_speed
    end
  
    def my_bike(model, wheels, current_speed)
        "The #{model} bike has #{wheels} and is going #{current_speed} mph."
    end
  end
 bike_info = Bike.new("Trek", 2, 0)
 p bike_info.what_bike('Trek', 2, 0)
#  "The Trek bike has 2 and is going 0 mph."


# def show_vehicle_info
#     "This is a #{@year} #{@make} #{@model}."
#   end
# end


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Copy code block from question 3a and paste below
# Make two new methods called pedal_faster adn brake
# Make an increase_speed and decrease_speed params for the two new methods respectfully
# Have the @current_speed += and -= for the increase and decrease speed params
# Return with the original answers in 3a
# Print each test cases

class Bike
    def initialize(model, wheels, current_speed)
     @model = model
     @wheels = 2
     @current_speed = current_speed
    end
  
    def my_bike(model, wheels, current_speed)
        "The #{model} bike has #{wheels} and is going #{current_speed} mph."
    end

    def pedal_faster(increase_speed)
        @current_speed += increase_speed
    end

    def brake(decrease_speed)
        @current_speed -= decrease
    end
end

# Stuck: What it says in the terminal '`<main>': undefined local variable or method `my_bike' for main:Object (NameError)'
bike_info = Bike.new("Trek", 2, 0)
bike_info.my_bike('Trek', 2, 0)
p my_bike.pedal_faster(10) 
p my_bike.pedal_faster(18) 
p my_bike.brake(5) 
p my_bike.brake(25) 
# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
