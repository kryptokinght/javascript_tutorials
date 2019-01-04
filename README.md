# Javascript

Foundation Principles of OOP design:
1. Program to an interface, not implementation


Javascript execution takes place in 2 phases:

1. **Creation phase** - This is the first phase of creating the **Javascript execution context**. The parser goes through the code and sets up memory for functions and variables. The functions are initialized with their definition but the variables are initialized with `undefined`. Due to this functions can be defined anywhere in the program. This is called **`hoisting`**. Though it is recommended to define functions at the top of the program. An [example](hoisting/example.js) of `hoisting`. Also the **global object**, `this` and Outer Environment is created during this phase.
2. **Execution phase** - The execution of the Program takes place line by line. 

Whenever a function is executed its **Execution context** is created and stored on the stack. This *execution context* consists of the *creation phase* where the variables and functions are stored in memory, and the *execution phase* where the lines are execute done by one. Once the function finishes exeution, its execution context is popped off from the stack. All programs initially have a **Global Execution Context** which contains the code of the whole program. 

### Outer Environment
A function's **Outer Environment** is determined by its *lexical context* which means where the function is defined. If a fuction is defined in the **Global Execution Context** then its **outer environment** is the global execution context and thus the function can access any functions that are defined within this global execution context. Or if the function s defined(i don't mean called) within another function then the function's outer environment is that function and so it can access variables that are defined in that outer environment or are accessible in that outer environment.
Here is an [example](examples/outer-environment.js) to show the concept of outer environment. <br/>
Every function in JS has a **reference to outer environment**.  <br/>
**Scope chain** - A function resolves a variable by moving down the scope chain unless it finds it. Here scope chain is a series of outer environments one below the other as if like a downwards staircase.   

### Concurrency model and Event loop
Single threaded frameworks like Node uses event loop and callbaacks to perform slow I/O operations.
* [Philip Roberts - What the heck is the event loop anyway][8] - explains perfectly *Concurrency model and Event Loop* in JS running on **Browsers**.
* [Furthur Adventures of the Event Loop - Erin Zimmer - JSConf EU 2018][9] : Explains the event loop in case of **browsers**, **node** and **webworkers**.
* [Jake Archibald - In the loop][10] : A more example oriented way of explaning event loop. 

### Javascript scope and variable scoping

Before the advent of the `let` keyword, JS did not have block level scopes. That meant variables declared inside an if block or an anonymous `{}` block seeped to its outer parent scope.  

**Do not pollute the global scope**.

**Variable hoisting** - Only variable declarations are hoisted to the top not variable initializations or assignments.

What better than a [Javascript sexy article](http://javascriptissexy.com/javascript-variable-scope-and-hoisting-explained/) on **Variable scope**.




## 'use strict';

### Closures

Closure is not a tangible thing. It is a name given to a JS feature where a nested function exectued after the execution of its outer function can still access the scope of the outer function.
IIFEs along with the power of Closures forms the amazing **module pattern**.

[Learn JS clousres through laws of karma](https://engineering.salesforce.com/learn-javascript-closures-through-the-laws-of-karma-49d32d35b3f7)
* Function as a first class object
* Short intro on scope
* Closure examples
* Module pattern

### IIFE
[Essential JS mastering IIFE](https://medium.com/@vvkchandra/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6) - Great article to understand IIFE
* Function expressions vs Function Definitions
* IIFEs are immediately invoked function expression
* Different ways to denote function expression
* IIFEs are used when you want to define private variables for a scope or return from a scope.
* IIFEs on steriod - Classical Javascript **module pattern**

[IIFE - by Ben Alaman](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)


### Javascript module pattern

[Javascript module pattern in depth](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html)
* Anonymous Closure - the most basic form
* Global Import - concept of implied globals
* Module export - when your module returns an object
* Advanced patterns
    * augmentation - add another method to an already existing module object using IIFE 
    * loose augmentation - add the above thing but in a loose way, when modules are loaded asynchronously
    * tight augmentation - add the above thing in a tight with the option to override methods
    * Other topics(too complex to understand right now for me)

## Linting
Different kind of **Linters** in the order of *how configurable* they are: **JSLint, JSHint, ESLint**. 

## RXjs
**ReactiveX** is an API for asynchronous programming with observable streams.

[8]: https://www.youtube.com/watch?v=8aGhZQkoFbQ
[9]: https://www.youtube.com/watch?v=u1kqx6AenYw
[10]: https://www.youtube.com/watch?v=cCOL7MC4Pl0

