# IIFE 

An Immediately Invoked Function Expression is a good way at protecting the scope of your function and the variables within it.

```JavaScript
(function () {
    // logic here
})();
```

The pattern is called an immediately invoked function expression, or IIFE (pronounced "iffy").

In JavaScript functions can be created either through a function declaration or a function expression. A function declaration is the "normal" way of creating a named function.

```JavaScript
// Named function declaration
function myFunction () { /* logic here */ }
```
On the other hand, if you are assigning a function to a variable or property, you are dealing with a function expression.

```JavaScript
// Assignment of a function expression to a variable
var myFunction = function () { /* logic here */ };

// Assignment of a function expression to a property
var myObj = {
    myFunction: function () { /* logic here */ }
};
```

A function created in the context of an expression is also a function expression. For example:

```JavaScript
// Anything within the parentheses is part of an expression
(function () { /* logic here */ });

// Anything after the not operator is part of an expression
!function () { /* logic here */ };
```

The key thing about JavaScript expressions is that they return values. In both cases above the return value of the expression is the function.

That means that if we want to invoke the function expression right away we just need to tackle a couple of parentheses on the end. Which brings us back to the first bit of code we looked at.

```JavaScript
(function () {
    // logic here
})();
```

Now we know what the code is doing, but the question "Why?" still remains.

**The primary reason to use an IIFE is to obtain data privacy. Because JavaScript's var scopes variables to their containing function, any variables declared within the IIFE cannot be accessed by the outside world.**

```JavaScript
(function () {
    var foo = "bar";

    // Outputs: "bar"
    console.log(foo);
})();

// ReferenceError: foo is not defined
console.log(foo);
```

Of course, you could explicitly name and then invoke a function to achieve the same ends.

```JavaScript
function myImmediateFunction () {
    var foo = "bar";

    // Outputs: "bar"
    console.log(foo);
}

myImmediateFunction();

// ReferenceError: foo is not defined
console.log(foo);
```

However, this approach has a few downsides.

1. It unnecessarily takes up a name in the global namespace, increasing the possibility of name collisions.
2. The intentions of this code aren't as self-documenting as an IIFE.
3. Because it is named and isn't self-documenting it might accidentally be invoked more than once.

It is worth pointing out that you can easily pass arguments into the IIFE as well.

```JavaScript
var foo = "foo";

(function (innerFoo) {
    // Outputs: "foo"
    console.log(innerFoo);
})(foo);
```

## The natural function definition

```JavaScript
function sayHi() {
    alert("Hello, World!");
}

sayHi(); // shows "Hello, World!" as alert in browser.
```

This way of creating a function is called *“a function definition”* or *“a function declaration”* or *“a function statement”*.

*These function definitions always start with the function keyword and are always followed by a name for the function. You can’t omit the name as it’s invalid syntax.*

## Function expressions

```JavaScript
var msg = "Hello, World!";
var sayHi = function() {
    alert(msg);
};

sayHi(); // shows "Hello, World!" as alert in browser.
```

*Basically, in lines 2–4 we assigned a value that’s of function type to a variable named sayHi.*

*In the above example, the function on the right-hand side of the assignment operator is often called a “function expression.” They are everywhere in JavaScript. Most callbacks you might have written are often function expressions.*

## Anonymous function expressions

The above example was an anonymous function expression. They are anonymous because they don’t have a name following the function keyword.

## Named function expressions

Function expressions can have names. The most boring and universally explained usage of these named function expressions is with recursion. Don’t worry much about these now as you can master IIFE without understanding named function expressions.

```JavaScript
var fibo = function fibonacci() {
    // you can use "fibonacci()" here as this function expression has a name.
};

// fibonacci() here fails, but fibo() works.
```

So the difference here is that the function expression has a name “fibonacci” that can be used inside that function expression to call itself recursively.

## IIFE Example - 1st Variation

```JavaScript
!function() {
    alert("Hello from IIFE!");
}();
// Shows the alert "Hello from IIFE!"
```

When you copy this code and try in a browser’s console, you will see the alert from code on line 2. And that’s pretty much it. No one can ever get this alert to show up again.

*That’s a function that died immediately after it came to life.*

Now let’s understand that not so intuitive syntax: I know you spotted that “!” on line 1; If you did not, no worries, you would have spotted it now!

1. As we saw before, a function statement always starts with the function keyword. Whenever JavaScript sees function keyword as the first word in a valid statement, it expects that a function definition is going to take place. So to stop this from happening, we are prefixing “!” in-front of the function keyword on line 1. 

2. This basically enforces JavaScript to treat whatever that’s coming after “!” as an expression.
But the most interesting stuff happens on line 3 where we execute that function expression immediately.

*So we have a function expression that’s immediately invoked after it’s created. And that’s, my friends, is called an IIFE irrespective of the stylistic variation used to achieve this effect.*

The above stylistic variation can be used by replacing *“!” with “+”, “-”, or even “~”* as well. Basically any unary operator can be used.

## Classical IIFE style

```JavaScript
(function() {
    alert("I am not an IIFE yet!");
});
```

In the above code, a function expression is wrapped in parentheses in lines 1–3. It’s not yet an IIFE as that function expression is never ever executed. Now to convert that code into an IIFE, we have following two stylistic variations:

```JavaScript

// Variation 1
(function() {
    alert("I am an IIFE!");
}());

// Variation 2
(function() {
    alert("I am an IIFE, too!");
})();
```

Now we have got two IIFEs in action. It might be really tough to notice the difference between Variation 1 and Variation 2. So let me explain that.

1. In Variation 1, on line 4, parentheses () for invoking the function expression is contained inside the outer parentheses. Again outer parentheses are needed to make a function expression out of that function.
2. In Variation 2, on line 9, parentheses () for invoking the function expression is outside the wrapping parentheses for the function expression.

We will start naming our IIFEs from now as using anonymous functions is usually never a good idea.

```JavaScript
// Valid IIFE
(function initGameIIFE() {
    // All your magical code to initalize the game!
}());

// Following two are invalid IIFE examples
function nonWorkingIIFE() {
    // Now you know why you need those parentheses around me!
    // Without those parentheses, I am a function definition, not an expression.
    // You will get a syntax error!
}();

function () {
    // You will get a syntax error here as well!
}();
```

*Remember this! You need a function expression to form an IIFE. Function statements/definitions are never used for creating IIFEs.*

## IIFEs and private variables

One thing that IIFEs are really good at is to do with their ability to create a function scope for the IIFE.

*Any variables declared inside the IIFE are not visible to the outside world.*

```JavaScript
(function IIFE_initGame() {
    // Private variables that no one has access to outside this IIFE
    var lives;
    var weapons;
    
    init();

    // Private function that no one has access to outside this IIFE
    function init() {
        lives = 5;
        weapons = 10;
    }
}());
```

***Next time whenever you are creating a bunch of variables and functions in global scope that no one uses outside your code, just wrap all of that in an IIFE and get a lot of good JavaScript karma for doing that. Your code will continue to work, but now you are not polluting global scope. Also you are shielding your code from someone who may change your globals accidentally, or sometimes intentionally!***

## IIFEs with a return value

If you don’t need a return value from an IIFE, then you could always use the first stylistic IIFE variation that we saw with unary operators like !, +, void, and etc.

*But another really important and powerful feature of IIFEs is that they can return a value that can be assigned to a variable.*

```JavaScript
var result = (function() {
    return "From IIFE";
}());

alert(result); // alerts "From IIFE"
```

1. In this variation, we have an IIFE that has a return statement on line 2.
2. When we execute the above code, line 5 shows the alert with the return value from the IIFE.

## IIFEs with parameters

Not only IIFEs can return values, but IIFEs can also take arguments while they are invoked.

```JavaScript
(function IIFE(msg, times) {
    for (var i = 1; i <= times; i++) {
        console.log(msg);
    }
}("Hello!", 5));
```

1. In the above example, on line 1, IIFE has two formal parameters named msg, times respectively.
2. When we execute the IIFE on line 5, instead of the empty parentheses () we have seen so far, we are now passing arguments to the IIFE.
3. Lines 2 and 3 use those parameters inside the IIFE.

This is a really powerful pattern and we see this often in jQuery code and in other libraries as well.

```JavaScript
(function($, global, document) {
    // use $ for jQuery, global for window
}(jQuery, window, document));
```

In the above example, we are passing **jQuery, window,** and **document** as arguments to the IIFE on line 3. The code inside the IIFE can refer to them as ***$, global, document*** respectively.

Here are a few advantages of passing these to the IIFE.

1. JavaScript always does scope lookups from the current function’s scope and keeps searching in higher scopes until it finds an identifier. When we pass document on line 3, that’s the only time when we are doing a scope lookup beyond local scope for the document. Any references in the IIFE to document will never need to be looked up beyond the local scope of the IIFE. Same applies to jQuery as well. Performance gain by this may not be huge based on how trivial or complex the IIFE code is, but still it’s a useful trick to know.
2. Also, JavaScript minifiers can safely minify the parameter names declared in a function. If we did not pass these as parameters, minifiers don’t minify direct references to document or jQuery as they are outside the scope of this function.

## Classical JavaScript module pattern

A classic Sequence singleton object that works seamlessly without anyone being able to accidentally corrupt the current sequence value.

```JavaScript

var Sequence = (function sequenceIIFE() {

// Private variable to store current counter value.
    var current = 0;

    // Object that's returned from the IIFE.
    return {
    };

}());

alert(typeof Sequence); // alerts "object"
```

1. In the above example, we have an IIFE that returns an object. See line 7 and 8.
2. We also have a local variable in the IIFE named current.
3. The return value of the IIFE, which is an object in this example is assigned to the Sequence variable. Line 12 properly alerts “object” since we are returning an object from the IIFE.

```JavaScript
var Sequence = (function sequenceIIFE() {

    // Private variable to store current counter value.
    var current = 0;

    // Object that's returned from the IIFE.
    return {
        getCurrentValue: function() {
            return current;
        },

        getNextValue: function() {
            current = current + 1;
            return current;
        }
    };

}());

console.log(Sequence.getNextValue()); // 1
console.log(Sequence.getNextValue()); // 2
console.log(Sequence.getCurrentValue()); // 2
```

Since current variable is private to the IIFE, no one but the functions that have access to it through closure can modify or access the current variable.

## When you can omit parentheses

Parentheses around the function expression basically force the function to become an expression instead of a statement.

But when it’s obvious to the JavaScript engine that it’s a function expression, we don’t technically need those surrounding parentheses as shown below.

```JavaScript
var result = function() {
    return "From IIFE!";
}();
```

In the above example, function keyword isn’t the first word in the statement. So JavaScript doesn’t treat this as a function statement/definition. Similarly there are other places where you can omit parenthesis when you know it’s an expression.

But I always prefer to use the parentheses even in this case. Using parentheses improves readability by stylistically hinting the reader on the first line that the function is going to be an IIFE. They don’t have to scroll to the last line of the function to realize what they just read through was an IIFE after all!

