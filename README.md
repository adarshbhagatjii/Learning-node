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

# phases of code compilation
1. lexical analysis
2. syntax analysis
3. semantic analysis
4. code generation
5. optimization
6. code emission

- lexical analysis( tokenization) -> syntax analysis(abstract syntax tree) -> semantic analysis ->ignition interpreter -> bytecode -> execution.

- ignition interpreter -> Turbofan compiler -> optimized machine code ->execution. 

# deep about libuv 
. event loop 
. thread pool
. callback queue


# event loop 
- event loop is a mechanism to handle asynchronous operations`
- it willl mange the task in callback queue and put the task in call stack in correct time and correct order. 

# ThreadPool
- thread pool is a mechanism to handle multiple tasks concurrently.
- its defalt size is 4 bytecode.
we can change the size of thread pool using process.env.UV_HTREADPOOL_SIZE = 4 ; function.

# Is node js is a single threaded or multithreaded. 
- node js is a single threaded but it can handle multiple tasks concurrently using event loop and thread pool.
- it can handle multiple tasks concurrently using libuv.

# http server 
- http server is a server that can handle http requests.

# learned about database 
- database is a collection of data.
- database is a collection of data that is stored in a structured way and can be accessed and manipulated 

# learned about mongoDB 
perforning operatons on mongodb like insert data, find data, update data, delete data 
- insert data: db.collection.insertOne()
- find data: db.collection.find()
- find data: db.collection.updateOne()
- find data: db.collection.deleteOne()

