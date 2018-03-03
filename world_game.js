
var plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];

//************vector***************
function Vector(x,y) {
	this.x = x;
	this.y = y;
}

Vector.prototype.plus = function(other) {  //vector addition
	return new Vector(this.x + other.x, this.y + other.y);
}

//************Grid***************
function Grid(width, height) {
	this.space = new Array(width*height);
	this.width = width;
	this.height = height;
}
Grid.prototype.isInside = function(vector) {
	return vector.x >= 0 && vector.x < this.width &&
		   vector.y >= 0 && vector.y < this.height;
}
Grid.prototype.get = function(vector) {
	return this.space[vector.x + this.width*vector.y];
}
Grid.prototype.set = function(vector, value) {
	this.space[vector.x + this.width*vector.y] = value;
}
//a custom forEach function for Grid
//calls each element in the grid with the given function in the argument
Grid.prototype.forEach = function(f, context) {
	for(var y = 0; y < this.height; y++) {
		for(var x = 0; x < this.width; x++) {
			var el = this.space[x + this.width*y];
			if (el != null)
				f.call(context, el, new Vector(x,y));
		}
	}
}

//directions for the different directions around an element in the grid
const directions = {
	"n": new Vector(0,-1),
	"ne": new Vector(1,-1),
	"e": new Vector(1,0),
	"se": new Vector( 1,  1),
  	"s":  new Vector( 0,  1),
  	"sw": new Vector(-1,  1),
  	"w":  new Vector(-1,  0),
  	"nw": new Vector(-1, -1)
}

//gives a random element between 0 and array.length-1
function randomElement(array) {
	return array[Math.floor(Math.random() * array.length)];
}

var directionNames = "n ne e se s sw w nw".split(" ");

//Creating a constructor for each element in the map
//************BouncingCritter***************

function BouncingCritter() {
	this.direction = randomElement(directionNames); //assigns a random direction to the critter's mouth
}
//a critter moves wherever its direction(which is its mouth) is set

BouncingCritter.prototype.act = function(view) {
	if(view.look(this.direction) != " ")
		this.direction = view.find(" ") || "s"; //the 's' here is ambiguous
	return {type:'move', direction: this.direction};
};

//************Wall***************
function Wall() {}

//************Legend_example***************
const legend = {
	'#': Wall,
	'o': BouncingCritter
};

//converts the ch character to an object that lies in the grid, since
//each element in the grid is an object
function elementFromChar(legend, ch) {
	if(ch == ' ')
		return null;
	var element = new legend[ch]();
	element.originChar = ch; 
	return element;
}

//************World***************
//World is where everything comes to life
function World(map, legend) {
	var grid = new Grid(map[0].length, map.length);
	this.grid = grid;
	this.legend = legend;

	map.forEach(function(line, y) {
		for(var x = 0; x < line.length; x++) {
			grid.set(new Vector(x, y), elementFromChar(legend, line[x]))
		}
	});
}

function charFromElement(element) {
	if(element == null)
		return " ";
	return element.originChar;
}

//to display the map
World.prototype.toString = function() {
	var output = "";
	for(var y = 0; y < this.grid.height; y++) {
		for(var x = 0; x < this.grid.width; x++) {
			var element = this.grid.get(new Vector(x, y));
			output += charFromElement(element);
		}
		output += '\n';
	}
	return output;
};

World.prototype.turn = function() {
	var acted = [];
	this.grid.forEach(function(critter, vector) {
		if(critter.act && acted.indexOf(critter) == -1) {
			acted.push(critter);
			this.letAct(critter, vector);
		}
	}, this);
};

World.prototype.letAct = function(critter, vector) {
	var action = critter.act(new View(this, vector)); // returns action = {type: "move", direction: "s"}
	if(action && action.type == "move") {
		var dest = this.checkDestination(action, vector);
		if(dest && this.grid.get(dest) == null) {
			this.grid.set(vector, null);
			this.grid.set(dest, critter);
		}	
	}
};

World.prototype.checkDestination = function(action, vector) {
  if (directions.hasOwnProperty(action.direction)) {
    var dest = vector.plus(directions[action.direction]);
    if (this.grid.isInside(dest))
      return dest;
  }
};

//*************** View *********************
function View(world, vector) {
	this.world = world;
	this.vector = vector;
}

View.prototype.look = function(dir) {
	var target = this.vector.plus(directions[dir]);
	if(this.world.grid.isInside(target))
		return charFromElement(this.world.grid.get(target));
	else
		return '#';
};

View.prototype.findAll = function(ch) {
	var found = [];
	for(var dir in directions) {
		if(this.look(dir) == ch)
			found.push(dir);
	}
	return found;
}

View.prototype.find = function(ch) {
	var found = this.findAll(ch);
	if(found.length == 0)
		return null;
	else
		return randomElement(found);
}

//************** my world *******************
var world = new World(plan, legend);
for (var i = 0; i < 5; i++) {
  world.turn();
  console.log(world.toString());
}