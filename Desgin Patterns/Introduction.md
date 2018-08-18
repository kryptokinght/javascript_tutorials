## Object Oriented approach in Javascript
"Each pattern represents our current best guess to what arrangement of the enironment will work to solve the problem presented" - Christopher ALexander

- **Designing service layer** - Separates the data manipulation code from the controller. MODULE PATTERN. We create a little package called module which deals with manipulating the data, while the controller can utilize this module to do some task.
- **Overly Complicated Object Interfaces** - DOM is an example of a overly complicated object interface. DOM contains a lot of object and interfaces by which you can modify, add or delete objects. To simplify this, we use FACADE PATTERN. Jquery is a very good example of this.
- **Observer Pattern**


### Creational Design Pattern
- Deal with the creation of new objects and instances
- Types: Module, Constructor, Singleton, Factory

 
### Structural Design Pattern
- Deal with the creation of the structure of an object
- Types: Decorator, Facade, Lightweight

### Behavioral Design Pattern
- How object relate to each other and how objects operate(like getting an instance)
- Types: Command, Mediator, Observer
  
Pattern of the course: 
1. Objects in Javascript(Bracket notation, Object.create, ...)
2. Each Pattern is described in a separate section of videos
3. Describing a pattern - we will talk about the problem each pattern solves and how the pattern will solve that problem, Rules of each pattern
4. Implement the pattern in **node**.

### Creational Design Pattern

#### Create a new object
`var obj = {}`

`var nextObj = Object.create(Object.prototype)`

`var lastObj = new Object()`

#### Patterns
1. Constructor Pattern - 


