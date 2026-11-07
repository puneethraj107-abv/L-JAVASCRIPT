//03-11-2026
learnt about variables
* javascript is dynamically typed

VARIABLE RULES
* variable name is case sensitive
* cannot add [space] in between
* only letters,digits,(_),($) is allowed
* _fullName, $fullName is allowed
* 124fullname is not allowed
* using reserved words in javascript is not allowed
* fullName - camel case is used in programming
* by default any value declared under let is equal to undefined
* const declarations must be initialised

let, const & var
var is not used from ES6

let : Variable cannot be redeclared but can be updated. A block scope variable
let fullName="puneeth R";

const : Variable cannot be redeclared or updated. A block scope variable. {used more}
* { code } - is a block

//06-11-2026
Data type
'typeof variable' - used for finding type of data type a variable holds

* number
* boolean
* string
* undefined
* null
* bigint
* symbol

generally objects are defined by const 

const student = {
    nname: "puneeth R",
    age: 26,
    cgpa: 8.2,
}//collection of different items

//console.log(student.age); - to access the value
/*student['age']=student['age']+1 - for updating the object*/

note: variable defined by 'let' can be updated, but 'const' cannot be updated except if its a key value under an object.