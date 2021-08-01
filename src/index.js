"use strict";
exports.__esModule = true;
var enums_1 = require("./enums");
var isOpen = false;
var myName = 'Scott';
var myAge = 41;
var list = [0, 1, 2];
// Tuple
var me = ['Brian', 41, false];
var job = enums_1["default"].WebDev;
var phone = 'iPhone';
var tablet = 3;
// Other types: null, undefined, never, object
// Functions in TypeScript
// const sayWord = (word?: string): string => { // ? makes parameter optional
//   console.log(word || 'Hello');
//   return word || 'Hello' ;
// }
// Default Params
var sayWord = function (word) {
    if (word === void 0) { word = 'Hello'; }
    var otherStuff = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherStuff[_i - 1] = arguments[_i];
    }
    console.log(word, otherStuff);
    return word;
};
sayWord('Brian', 'Scott');
sayWord();
// Implicit Types
var newName = 'Brian';
newName = 'Scott';
// newName = 10; // will error because implicit type is a string.
var newNameTwo = newName;
newName = 'Gary';
// Union types with |
var newerName = 'Brian';
newerName = 'Scott';
newerName = 10;
var newerNameTwo = newerName;
newerName = 20;
var makeMargin = function (x) {
    return "margin: " + x + "px";
};
makeMargin(10);
makeMargin('brian');
// makeMargin(false); // Will error
// Null Types - type checker assumes null and undefined are assignable to anything.
var dog;
dog = null;
// Could enable strict null checking if you don't want to allow null by default.
dog = 'ruger';
dog = null;
var sayName = function (_a) {
    var name = _a.name, age = _a.age;
    console.log(name);
    return name;
};
// This works too!
// const sayName = ({ name, age }: Person): Person => {
//   console.log(name);
//   return { name, age };
// }
sayName({ name: 'Brian' });
sayName({ age: 41, name: 'Brian' });
// Enums
// Numeric Enum
var Type;
(function (Type) {
    Type[Type["Video"] = 0] = "Video";
    Type[Type["BlogPost"] = 1] = "BlogPost";
    Type[Type["Quiz"] = 2] = "Quiz"; // 2
})(Type || (Type = {}));
console.log('Type', Type.Quiz);
var createContent = function (contentType) { };
createContent(Type.Quiz);
var createContent2 = function (contentType2) { };
createContent2(enums_1.Type2.Quiz);
// Won't work
// createContent2('QUIZ');
console.log('Type2', enums_1.Type2.Quiz);
// Classes
var Team = /** @class */ (function () {
    // public teamName: string; this is the same as above
    // private teamName: string; prevents outside usage
    //  readonly teamName: string; prevents from being changed
    function Team(teamName) {
        this.teamName = teamName;
    }
    Team.prototype.score = function () {
        console.log(this.teamName);
        return 'goal';
    };
    return Team;
}());
var redWings = new Team('Red Wings');
redWings.score();
redWings.teamName;
