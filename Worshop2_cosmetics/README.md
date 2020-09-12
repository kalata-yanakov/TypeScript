<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

## Cosmetics shop - OOP Principles Workshop

### 1. Project information

1. run npm install

1. There are several ways of running the project

    - Browse the scripts in `package.json`
      - `npm start`
    - In the debug section choose whether you want to run the project or the tests
    - Now with **Ctrl+F5** you can get the result or with **F5** to debug your application

1. The list of operations is location in `main.ts`. You could comment a line from the list if you want to test partially your solution

1. You do not need to worry about understanding the tests at the moment. They are exclusively for your convenience. Use them!

### 2. Description

The shop already has a working Engine. You do not have to touch anything in it. Just use it.

There should be two types of products for now, Shampoos and Toothpastes. - Each Shampoo has **name, brand, price, gender, milliliters, usage**. - Each Toothpaste has **name, brand, price, gender, ingredients**.

### 3. Goal

Your **task** is to **design an object-oriented class hierarchy** (only two for now) to model the cosmetics shop, **using the best practices for object-oriented design** (OOD) and **object-oriented programming** (OOP). Encapsulate correctly all fields and use validation whenever needed.

1. Shampoo

    - Implements IShampoo
    - It has name, brand, price, gender, milliliters, usage
    - Minimum shampoo name's length is 3 symbols and maximum is 10 symbols.
    - Minimum shampoo brand name's length is 2 symbols and maximum is 10 symbols.
    - Price cannot be negative.
    - Gender type can be **"Men"**, **"Women"** or **"Unisex"**.
    - Milliliters can not be a negative number
    - Usage type can be **"EveryDay"** or **"Medical"**

1. Toothpaste

    - Implements IToothpaste
    - It has name, brand, price, gender, ingredients
    - Minimum toothpaste name's length is 3 symbols and maximum is 10 symbols.
    - Minimum toothpaste brand name's length is 2 symbols and maximum is 10 symbols.
    - Price cannot be negative.
    - Gender type can be **"Men"**, **"Women"** or **"Unisex"**.
    - Ingredients are comma separated values

1. Interfaces
    - All the needed interfaces are provided in the skeleton. **You must use them all** in order to achieve the best OOP design.

What we will exercise:

- defining a class
- encapsulation and validation of properties
- using a base abstract class to reuse logic ans state
- inheriting classes to reuse base class code, and extend it with additional logic and state
- using abstraction (interfaces) to decrease level of coupling between classes and/or types
- using and extending an abstract method in a descendent class to make the method polymorphic (achieve polymorphism through abstraction)

### 4. Constraints

- Look into the example below to get better understanding of the printing format.
- All number type fields should be printed "as is", without any formatting or rounding.
- All properties in the above interfaces are mandatory (cannot be null or empty).
- If a null value is passed to some mandatory property, your program should throw a proper exception.

### 5. Additional notes

- To simplify your work you are given an already built execution engine that exposes a group of methods for creating and handling products and shopping carts. All the operations are stored in `main.ts`, you can comment them in and out to test specific operations and debug your code.
- Please, put your classes in the **models folder**.
- Implement the CosmeticsFactory class in the namespace `core/engine`.
- You are **only allowed** to create classes. 
- You are **not allowed** to **delete the existing interfaces and classes**. 
- You must implement **all** interfaces.

### 6. Operations example

```typescript
engine.createShampoo('MyMan', 'Nivea', 10.99, GenderType.Men, 1000, UsageType.EveryDay),
engine.createShampoo('MyGeneric', 'Abc', 10.99, GenderType.Men, 1000, UsageType.EveryDay),
engine.createShampoo('MyWoman', 'Abc', 20.99, GenderType.Women, 1000, UsageType.EveryDay),
engine.createToothpaste('White', 'Colgate', 10.99, GenderType.Men, ['calcium', 'fluoride']),
engine.createCategory('Shampoos'),
engine.createCategory('Toothpastes'),
engine.addToCategory('Shampoos', 'MyMan'),
engine.addToCategory('Shampoos', 'MyGeneric'),
engine.addToCategory('Shampoos', 'MyWoman'),
engine.addToCategory('Toothpastes', 'White'),
engine.addToShoppingCart('MyMan'),
engine.addToShoppingCart('White'),
engine.showCategory('Shampoos'),
engine.showCategory('Toothpastes'),
engine.getTotalPrice(),
engine.removeFromCategory('Shampoos', 'MyMan'),
engine.showCategory('Shampoos'),
engine.removeFromShoppingCart('MyMan'),
engine.getTotalPrice(),
```

### 7. Output Example

```text
Shampoo with name MyMan was created!
Shampoo with name MyGeneric was created!
Shampoo with name MyWoman was created!
Toothpaste with name White was created!
Category with name Shampoos was created!
Category with name Toothpastes was created!
Product MyMan added to category Shampoos!
Product MyGeneric added to category Shampoos!
Product MyWoman added to category Shampoos!
Product White added to category Toothpastes!
Product MyMan was added to the shopping cart!
Product White was added to the shopping cart!
#Category: Shampoos
#MyWoman Abc
 #Price: $20.99
 #Gender: Women
 #Milliliters: 1000
 #Usage: EveryDay
 ===
#MyGeneric Abc
 #Price: $10.99
 #Gender: Men
 #Milliliters: 1000
 #Usage: EveryDay
 ===
#MyMan Nivea
 #Price: $10.99
 #Gender: Men
 #Milliliters: 1000
 #Usage: EveryDay
 ===
#Category: Toothpastes
#White Colgate
 #Price: $10.99
 #Gender: Men
 #Ingredients: calcium, fluoride
 ===
$21.98 total price currently in the shopping cart!
Product MyMan removed from category Shampoos!
#Category: Shampoos
#MyWoman Abc
 #Price: $20.99
 #Gender: Women
 #Milliliters: 1000
 #Usage: EveryDay
 ===
#MyGeneric Abc
 #Price: $10.99
 #Gender: Men
 #Milliliters: 1000
 #Usage: EveryDay
 ===
Product MyMan was removed from the shopping cart!
$10.99 total price currently in the shopping cart!
```

### 8. Unit Tests

- You are given unit tests to keep track of your progress.

## Step by step guide

### **Hint**: Use the Unit tests whenever you finish a task

1. You are given a skeleton of the Cosmetics shop. Please take a look at it carefully before you try to do anything. Try to understand all the classes and interfaces and how the engine works. (You should not touch the engine at all).

1. Just run the tests and look at the errors.

    - The errors are part of the unit tests project but they show you what you need to start with.
      - **HINT** finish the ICart interface with all the needed methods (**add, remove, contains** and the property **productList**)

1. Create the classes.

1. Validate all the fields. Yes, again!

1. Think about the Product class. Could it be a base class? (abstract or not?)

1. Implement all the interfaces.

    - Look at the contracts folder in `src/common` and decide how to use any of the interfaces there.
    - Everything must use interface instead of class implementation

1. Let's go and have a look to the CosmeticFactory class

    - Implement all the methods. You already know what to do here.
    - But decide on the return types of the methods.
      - Do you think you could improve something? (interfaces FTW!)

1. Did you notice the repeating code in the Shampoo and Toothpaste classes. What could you do in order to avoid it?

1. **print()** method. What do you need to do in order to avoid repetition?

    - **HINT** use abstract method to enable polymorphism

1. **ADVANCED TASK**
    - Implement new product and its creation in the engine class
    - Cream (name, brand, price, gender, scent)
      - name minimum 3 symbols and maximum 15
      - brand minimum 3 symbols and maximum 15
      - price greater than zero
      - gender (men, women, unisex)
      - scent (lavender, vanilla, rose)
    - Implement product creation in the Factory and the Engine
      - Just look at the other products
    - Test it if it works correctly
