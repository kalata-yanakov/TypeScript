<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

## Cosmetics shop - Defining Classes Workshop

### 1. Project information

1. run npm install

1. There are two ways of running the project

   - In the debug section choose whether you want to run the project or the tests
   - Now with **Ctrl+F5** you can get the result or with **F5** to debug your application

1. The commands are stored in `main.ts`. You can comment in and comment out commands for testing.

1. You do not need to worry about understanding the tests at the moment. They are exclusively for your convenience. Use them!

### 2. Description

The shop already has a working Engine. You do not have to touch anything in it. Just use it.
Each product has **name, brand, price and gender** (men, women, unisex).
There are **categories** of products. Each **category** has **name** and products can be **added to or removed** from a category. The same product can be added to a category more than once. There is also a **shopping cart**. Products can be **added to or removed** from it. The same product can be added to the shopping cart more than once. The shopping cart can calculate the **total price** of all products in it.

### 3. Goal

Your **task** is to **design an object-oriented class hierarchy** to model the cosmetics shop, **using the best practices for object-oriented design** (OOD) and **object-oriented programming** (OOP). Encapsulate correctly all fields and use validation whenever needed.

What we will exercise:

- defining a class
- how to create fields and properties:
  - fields are the state - the part that holds the data
  - properties expose fields through getters and setters - a property can have both getter and setter, only a getter, or only a setter
- how to encapsulate the class - fields should be private (or protected) and should be exposed through properties that are validated
- how to use validation in properties
- when to make a method public or private - only methods used outside the class should be public, everything else should be private or protected
- how to manage the state of the class:
  - through encapsulated fields, exposed through validated properties
  - through dedicated methods (also validated whenever necessary)

Field:

```typescript
private _name: string;
```

Property:

```typescript
public get name(): string {
  return this._name;
}
public set name(value: string) {
  if (value && value.length > 6) {
    this._name = value;
  }
}
```

### 4. Categories

- Adding the same product to one category more than once is allowed.
- Minimum category name's length is 2 symbols and maximum is 15 symbols.
- Products in each category must be sorted by brand in ascending order, and then - if they have the same brand name - by price in descending order.
- When removing product from category, if the product is not found you should throw an exception.
- Category's print method should return text in the following format:

```txt
#Category: {category name}
 #Name Brand
 #Price: {price}
 #Gender: {genderType}
 ===
 #Name Brand
 #Price: {price}
 #Gender: {genderType}
 ===
```

```txt
#Category: Shampoos
 #No product in this category
```

### 5. Products

- Minimum product name's length is 3 symbols and maximum is 10 symbols.
- Minimum brand name's length is 2 symbols and maximum is 10 symbols.
- Price cannot be negative.
- Gender type can be **"Men"**, **"Women"** or **"Unisex"**.

### 6. Shopping cart

- Adding the same product more than once is allowed.
- Do not check if the product exists, when removing it from the shopping cart.

### 7. Constraints

- Look into the example below to get better understanding of the printing format.
- All number type fields should be printed "as is", without any formatting or rounding.
- All properties in the above interfaces are mandatory (cannot be null or empty).
- **If a null value is passed to some mandatory property, your program should throw a proper exception.**

### 8. Additional notes

- To simplify your work you are given an already built execution engine with methods already using the classes and interfaces in your project (**see the skeleton folder**).
- Please, use the classes in the models folder.
- Implement the `CosmeticsFactory` class in the folder `core/engine`
- You are **only allowed** to modify `model` and `factory` classes. You are **not allowed** to **modify the existing interfaces and classes** in the **core folder** except the **cosmetics-factory** class.

### Commands example

```typescript
const start: () => void = (): void => {
  const engine: IEngine = Engine.INSTANCE;

  engine.createProduct('MyMan', 'Nivea', 10.99, GenderType.Men);
  engine.createProduct('MyWoman', 'Nivea', 20.99, GenderType.Women);
  engine.createProduct('Shampoo', 'Abc', 20.99, GenderType.Unisex);
  engine.createCategory('Shampoos');
  engine.addToCategory('Shampoos', 'MyMan');
  engine.addToCategory('Shampoos', 'MyWoman');
  engine.addToCategory('Shampoos', 'Shampoo');
  engine.addToShoppingCart('MyMan');
  engine.showCategory('Shampoos');
  engine.totalPrice();
  engine.removeFromCategory('Shampoos', 'MyMan');
  engine.showCategory('Shampoos');
  engine.removeFromShoppingCart('MyMan');
  engine.totalPrice();

  engine.printReports();
};

start();
```

### Output Example

```txt
Product with name MyMan was created!
Product with name MyWoman was created!
Product with name Shampoo was created!
Category with name Shampoos was created!
Product MyMan added to category Shampoos!
Product MyWoman added to category Shampoos!
Product Shampoo added to category Shampoos!
Product MyMan was added to the shopping cart!
#Category: Shampoos
#Shampoo Abc
 #Price: $20.99
 #Gender: 2
 ===
#MyWoman Nivea
 #Price: $20.99
 #Gender: 1
 ===
#MyMan Nivea
 #Price: $10.99
 #Gender: 0
 ===
$10.99 total price currently in the shopping cart!
Product MyMan removed from category Shampoos!
#Category: Shampoos
#Shampoo Abc
 #Price: $20.99
 #Gender: 2
 ===
#MyWoman Nivea
 #Price: $20.99
 #Gender: 1
 ===
Product MyMan was removed from the shopping cart!
No product in shopping cart!
```

### 9. Unit Tests

- You have been given unit tests (not real unit test for now) to keep track off your progress.

## Step by step guide

### **Hint**: You don't need to take care of the cosmetics-engine class and the main method but of course you could try to understand how they work

### **Hint**: Use the Unit tests whenever you finish a task

1. You are given a skeleton of the Cosmetics shop. Please take a look at it carefully before you try to do anything. Try to understand all the classes and interfaces and how the engine works. (You should not touch the engine at all).

1. Just run the project and look at the errors.

1. There errors in the **product, shopping-cart and category** classes

   - **Hint** (Initialize, validate and encapsulate all the fields)

     ```typescript
     public get price(): string {
         return this._price;
     }
     ```

   - Do not implement the methods until you are sure you have done these steps

1. Think about the validations and what is missing in the constructor

1. Let's go and have a look to the **cosmetics-factory class**

   - Implement the methods **createProduct**. Look at the **shoppingCart** method for ideas.

1. Finish **ShoppingCart** class

   - Initialize the collection!!!
   - The other methods are just manipulating the collection
   - Encapsulate it!

     ```typescript
     constructor {
         this.productList = [];
     }
     ```

   - contains and remove methods must search for a product by its name

1. Finish **Category** class

   - Initialize the collection!!!
   - The other methods are just manipulating the collection

     ```typescript
     public get products(): Product[] {
         return this.products;
     }
     ```

   - remove method must search for a product by its name

1. As you saw we don't need to look at the Engine class and the Main method at all.
