# Learning-node
Node js is a javascript runtime environment that allows developers to run javascript on the server side. 
It takes .js file and gave to v8 engine. V8 engine is a c++ engine that converts the code into machine code. the code is read by the v8 engine and then it is executed by the os.
# module :- 
A module is a file that contains a set of related functions, variables, and classes that can be used by other programs.

Module will protect their variables and functions from leaking.

Common js modules
- by default use in node js.
- older way.
- synchronous.
- runs in non Strict mode. 

Es 6 modules
- default in react js an other frameworks.
- newer way.
- asynchronous.
- runs in strict mode.

# Nested modules
- a module can import another module.
- a module can import a function from another module.

# meaking folder as a module
- a folder can be treated as a module.
- a folder can contain a package.json file.

:- Importing data.json file.
:- module.exports is an empty object.


# some more about modules
- when require("./path ) is called it returns the module.exports object. All the codes of the module is wraped inside a function . (IIFE - immediate invoked function expression).
- (function(){
    // code here
})();
- immerdiate invoke the function 
- keep variables and function safe 
# how are variables and function private in different modules ?
- through IIFE and require(statement).

# how do you get access to module.exports ?
- through node js parameter (module) as a parameter to the IIFE.

# require(./path)
1. resolving the module 
2. loading the module 
3. wrap inside IIFE
4. evaluation 
5. caching

# Syncronous and asynchronous 
- synchronous: the code is executed line by line.
- task is executed immediately .

- asynchronous: the code is executed line by line but the execution is paused and resumed at a later time.
- task is executed in the background.
# how to make a function asynchronous ?
- using callbacks.
- using promises.
- using async/await.
- asynchronous task is not directly executed . 
- it uses libuv for i/o operations .

# libuv
- libuv is a c library.
- it is used for i/o operations.
- it is used for asynchronous operations.

# blocking i/o 
- blocking i/o is a synchronous i/o operation.
- it is a blocking operation.
- it will block the maion thread until the operation is completed.



