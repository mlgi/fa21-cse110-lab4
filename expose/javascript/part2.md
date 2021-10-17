1. it will print 3 because `i` still persists after the for loop since it uses the `var` keyword, letting it exists throughout the entire function scope
2. it prints 150 because that was the value of `discountedPrice` at the final iteration of the for loop. it still exists in the function scope for the same reason as question 1
3. it prints 150 because that was the value of `finalPrice` at the final iteration of the for loop. it exists in the code block's scope even outside of the for loop because it was declared in line 4.
4. it returns a list of prices `[50, 100, 150]`, each created by a iteration of the for loop.
5. an error occurs because `i`, using the `let` keyword, only exists in the scope of the for loop.
6. an error occus becuase `discountedPrice`, using the `let` keyword, only exists in the scope of the for loop
7. the code prints out 150 since that was the value of `finalPrice` at the end of the for loop. line 14 can access it because it was declared in the same scope , within function block at line 4 
8. the function returns a list of prices `[50, 100, 150]`, each created by an iteration of the for loop 
9. an error occurs because `i`, using the `let` keyword, only exists in the scope of the for loop
10. it prints out 3 because that is the length of the prices list passed into the function at line 17
11. it gives a list of the discounted prices `[50, 150, 150]` that was pushed into the list iteratively during line 8 of the for loop 
12. notation
    - student.name
    - student['Grad Year']
    - student.greeting()
    - student.greeting()['Favorite Teacher']
    - student.courseLoad[0]
13. arithmetic
    - '32' since integers map to their exact string representation
    - 1 since '3' was converted to the integer 3
    - 3 because null was treated as 0
    - '3null' because '3' and null were treated as strings
    - 4 because true maps to 1
    - 0 because both false and null map to 0
    - '3undefined' because both were treated as strings
    - NaN since undefined does not map to a number
14. comparison
    - true since '2' maps to integer 2
    - false since either string or integer comparison maps '2' less than '12'
    - true since they are mapped to same datatype
    - false because === checks equality without type conversion
    - false since true maps to 1
    - true because Boolean(2) returns 1
15. the `===` operator does not do automatic type conversions and compares the values as they are. `==` does automatic type conversion before comparisons
16. see file
17. `[2,4,6]` The for loop applies the callback function to each element in the array. the callback function returns its input multiplied by 2.
18. see file
19. this prints out 
```
1
4
3
2
```
1 and 4 are printed out directly while 2 and 3 are printed out with a delay