# 📘 JavaScript Fundamentals — সম্পূর্ণ গাইড (বাংলায়)

JavaScript শেখার প্রথম ধাপ হলো **JavaScript Fundamentals** ভালোভাবে বোঝা। এই অংশে JavaScript-এর Syntax, Statements, Expressions, Comments, Keywords, Strict Mode, Errors এবং Clean Code সম্পর্কে বিস্তারিত আলোচনা করা হবে।

প্রতিটি টপিকের সঙ্গে থাকবে:
- ✅ সংজ্ঞা ও সহজ ব্যাখ্যা
- ✅ কেন ব্যবহার করা হয়
- ✅ Code Example
- ✅ Output
- ✅ সাধারণ ভুল ও গুরুত্বপূর্ণ নিয়ম

---

# 1. JavaScript Syntax

### JavaScript Syntax কী?

JavaScript Syntax হলো JavaScript কোড লেখার নিয়ম। যেমন, কীভাবে Variable তৈরি করতে হয়, কীভাবে Function লিখতে হয় এবং কীভাবে কোনো নির্দেশনা দিতে হয়—এসব নিয়মকে JavaScript Syntax বলে।

**উদাহরণ:**

```javascript
let name = "Sifat";
let age = 25;

console.log(name);
console.log(age);
```

**Output:**
```text
Sifat
25
```

### কোডটি ব্যাখ্যা

- `let` হলো Variable declaration keyword।
- `name` হলো Variable-এর নাম।
- `"Sifat"` হলো String value।
- `=` হলো Assignment operator।
- `console.log()` দিয়ে Console-এ কোনো Value দেখানো হয়।

### আরও কিছু উদাহরণ

**Example 1: Variable তৈরি করা**

```javascript
let city = "Chattogram";

console.log(city);
```

Output:
```text
Chattogram
```

**Example 2: দুটি সংখ্যার যোগফল**

```javascript
let a = 10;
let b = 20;

console.log(a + b);
```

Output:
```text
30
```

**Example 3: Conditional Statement**

```javascript
let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
}
```

Output:
```text
You are an adult.
```

**Example 4: Function তৈরি করা**

```javascript
function greet() {
    console.log("Hello, JavaScript!");
}

greet();
```

Output:
```text
Hello, JavaScript!
```

**Example 5: Array তৈরি করা**

```javascript
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits);
```

Output:
```text
["Apple", "Mango", "Banana"]
```

### গুরুত্বপূর্ণ নিয়ম

1. JavaScript-এ Variable তৈরি করতে `let`, `const` অথবা `var` ব্যবহার করা যায়।
2. String লিখতে Single Quote (`'...'`), Double Quote (`"..."`) অথবা Template Literal (`` `...` ``) ব্যবহার করা যায়।
3. Code Block তৈরি করতে `{}` ব্যবহার করা হয়।
4. Function তৈরি করতে `function` Keyword অথবা Arrow Function Syntax ব্যবহার করা যায়।
5. JavaScript Case-Sensitive।

---

# 2. Statements and Expressions

JavaScript শেখার ক্ষেত্রে Statement এবং Expression-এর পার্থক্য বোঝা অত্যন্ত গুরুত্বপূর্ণ।

## 2.1 Statement কী?

Statement হলো JavaScript-এর এমন একটি নির্দেশনা, যা কোনো কাজ সম্পাদন করে।

**উদাহরণ:**

```javascript
let age = 20;
```

এটি একটি Variable Declaration Statement।

আরেকটি উদাহরণ:

```javascript
console.log("Hello World");
```

এটি একটি Expression Statement, কারণ এখানে একটি Function Call Expression-কে Statement হিসেবে ব্যবহার করা হয়েছে।

### আরও উদাহরণ

**Example 1: Variable Declaration**

```javascript
let name = "Sifat";
```

**Example 2: Conditional Statement**

```javascript
if (true) {
    console.log("Condition is true");
}
```

**Example 3: Loop Statement**

```javascript
for (let i = 1; i <= 3; i++) {
    console.log(i);
}
```

Output:
```text
1
2
3
```

**Example 4: Return Statement**

```javascript
function getNumber() {
    return 100;
}
```

**Example 5: Block Statement**

```javascript
{
    let x = 10;
    console.log(x);
}
```

Output:
```text
10
```

## 2.2 Expression কী?

Expression হলো এমন একটি কোড, যা Evaluate করলে একটি Value তৈরি হয়।

**উদাহরণ:**

```javascript
10 + 20
```

এর ফলাফল:

```text
30
```

এখানে `10 + 20` একটি Expression।

### Expression-এর বিভিন্ন উদাহরণ

**Example 1: Arithmetic Expression**

```javascript
let result = 10 + 20;

console.log(result);
```

Output:
```text
30
```

**Example 2: Comparison Expression**

```javascript
console.log(10 > 5);
```

Output:
```text
true
```

**Example 3: String Expression**

```javascript
let fullName = "Shibgatullah" + " " + "Sifat";

console.log(fullName);
```

Output:
```text
Shibgatullah Sifat
```

**Example 4: Function Call Expression**

```javascript
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);
```

Output:
```text
30
```

এখানে `add(10, 20)` একটি Function Call Expression।

**Example 5: Ternary Expression**

```javascript
let age = 20;

let status = age >= 18 ? "Adult" : "Minor";

console.log(status);
```

Output:
```text
Adult
```

## Statement বনাম Expression

| বিষয় | Statement | Expression |
|---|---|---|
| অর্থ | কোনো নির্দেশনা সম্পাদন করে | Evaluate করলে Value তৈরি হয় |
| উদাহরণ | `let x = 10;` | `10 + 20` |
| Conditional | `if` Statement | `condition ? a : b` |
| Function | Function Declaration | Function Call |
| ব্যবহার | Program-এর কাজ নিয়ন্ত্রণ করে | Value তৈরি বা গণনা করে |

**মনে রাখবে:** Expression একটি Statement-এর অংশ হতে পারে। যেমন:

```javascript
let result = 10 + 20;
```

এখানে পুরো লাইনটি একটি Declaration Statement, আর `10 + 20` হলো Expression।

---

# 3. Comments

### Comment কী?

Comment হলো কোডের মধ্যে লেখা এমন কিছু Text, যা JavaScript Engine সাধারণত Executable Code হিসেবে বিবেচনা করে না।

Comment ব্যবহার করা হয়:

- কোডের উদ্দেশ্য ব্যাখ্যা করতে।
- জটিল Logic বোঝাতে।
- গুরুত্বপূর্ণ তথ্য লিখে রাখতে।
- সাময়িকভাবে কোডের কোনো অংশ নিষ্ক্রিয় করতে।

JavaScript-এ প্রধানত দুই ধরনের Comment রয়েছে:

1. Single-Line Comment
2. Multi-Line Comment

**উদাহরণ:**

```javascript
// Store the user's age
let age = 20;

console.log(age);
```

Output:
```text
20
```

JavaScript Engine `// Store the user's age` অংশটিকে Comment হিসেবে উপেক্ষা করে।

### কখন Comment ব্যবহার করবে?

ধরা যাক, তুমি একটি Discount Calculator তৈরি করেছ।

```javascript
let price = 1000;
let discount = 10;

// Calculate the discounted price
let finalPrice = price - (price * discount / 100);

console.log(finalPrice);
```

Output:
```text
900
```

Comment দেখে সহজেই বোঝা যায় যে কোডটি Discount হিসাব করছে।

**গুরুত্বপূর্ণ:** প্রতিটি লাইন ব্যাখ্যা করার জন্য Comment লেখার প্রয়োজন নেই। কোড নিজেই পরিষ্কার হলে অতিরিক্ত Comment এড়িয়ে চলা ভালো।

---

# 4. Single-Line Comments

### Single-Line Comment কী?

JavaScript-এ `//` ব্যবহার করে Single-Line Comment লেখা হয়।

`//`-এর পর থেকে ওই লাইনের শেষ পর্যন্ত অংশটি Comment হিসেবে বিবেচিত হয়।

### Syntax

```javascript
// This is a single-line comment
```

### Example 1: সাধারণ Comment

```javascript
// Print a message
console.log("Hello World");
```

Output:
```text
Hello World
```

### Example 2: Variable ব্যাখ্যা করা

```javascript
// Store the user's name
let name = "Sifat";

console.log(name);
```

Output:
```text
Sifat
```

### Example 3: Calculation ব্যাখ্যা করা

```javascript
// Calculate the total price
let price = 500;
let quantity = 3;

let total = price * quantity;

console.log(total);
```

Output:
```text
1500
```

### Example 4: কোড সাময়িকভাবে বন্ধ করা

```javascript
// console.log("This line will not execute");

console.log("This line will execute");
```

Output:
```text
This line will execute
```

### Example 5: লাইনের শেষে Comment

```javascript
let age = 25; // User's age

console.log(age);
```

Output:
```text
25
```

### গুরুত্বপূর্ণ বিষয়

`//`-এর পরে একই লাইনে লেখা কোডও Comment-এর অংশ হয়ে যায়।

```javascript
// console.log("Hello"); console.log("World");
```

এখানে কোনো `console.log()`-ই Execute হবে না।

---

# 5. Multi-Line Comments

### Multi-Line Comment কী?

একাধিক লাইনকে Comment হিসেবে লেখার জন্য `/* ... */` ব্যবহার করা হয়।

### Syntax

```javascript
/*
This is a
multi-line comment.
*/
```

### Example 1: সাধারণ Multi-Line Comment

```javascript
/*
This program
prints a message.
*/

console.log("Hello JavaScript");
```

Output:
```text
Hello JavaScript
```

### Example 2: একাধিক লাইনের ব্যাখ্যা

```javascript
/*
Calculate the total price.
Price = 100
Quantity = 5
*/

let price = 100;
let quantity = 5;

console.log(price * quantity);
```

Output:
```text
500
```

### Example 3: একাধিক লাইন নিষ্ক্রিয় করা

```javascript
/*
console.log("First");
console.log("Second");
console.log("Third");
*/

console.log("Fourth");
```

Output:
```text
Fourth
```

### Example 4: Function-এর ব্যাখ্যা

```javascript
/*
This function takes two numbers
and returns their sum.
*/

function add(a, b) {
    return a + b;
}

console.log(add(5, 10));
```

Output:
```text
15
```

### Example 5: Function-এর আগে Documentation

```javascript
/**
 * Calculates the square of a number.
 * @param {number} number
 * @returns {number}
 */
function square(number) {
    return number * number;
}

console.log(square(5));
```

Output:
```text
25
```

এখানে `/** ... */` হলো Documentation Comment লেখার একটি প্রচলিত পদ্ধতি। অনেক IDE ও Documentation Tool এটি ব্যবহার করে।

### Single-Line বনাম Multi-Line Comment

| বিষয় | Single-Line | Multi-Line |
|---|---|---|
| Syntax | `//` | `/* ... */` |
| ব্যবহার | একটি লাইনের ব্যাখ্যা | একাধিক লাইনের ব্যাখ্যা |
| উদাহরণ | `// User name` | `/* User name and age */` |

**সতর্কতা:** Multi-Line Comment-এর ভেতরে সরাসরি আরেকটি Multi-Line Comment লেখা যায় না, কারণ JavaScript-এ এই Comment Syntax Nested নয়।

---

# 6. Case Sensitivity

### Case Sensitivity কী?

JavaScript Case-Sensitive। অর্থাৎ, বড় হাতের অক্ষর এবং ছোট হাতের অক্ষরকে আলাদা হিসেবে বিবেচনা করা হয়।

উদাহরণ:

```javascript
let name = "Sifat";
let Name = "Rahim";

console.log(name);
console.log(Name);
```

Output:
```text
Sifat
Rahim
```

এখানে `name` এবং `Name` দুটি আলাদা Variable।

### Example 1: Variable-এর ক্ষেত্রে

```javascript
let age = 20;
let Age = 30;

console.log(age);
console.log(Age);
```

Output:
```text
20
30
```

### Example 2: Function-এর ক্ষেত্রে

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

Output:
```text
Hello
```

কিন্তু:

```javascript
function greet() {
    console.log("Hello");
}

Greet();
```

Output:
```text
ReferenceError: Greet is not defined
```

কারণ `greet` এবং `Greet` একই নাম নয়।

### Example 3: Built-in Function-এর ক্ষেত্রে

```javascript
console.log("Hello");
```

সঠিক।

```javascript
Console.log("Hello");
```

সাধারণ JavaScript পরিবেশে এটি `ReferenceError` তৈরি করবে, কারণ `Console` এবং `console` আলাদা Identifier।

### Example 4: String-এর ক্ষেত্রে

```javascript
let language = "JavaScript";

console.log(language === "javascript");
```

Output:
```text
false
```

কারণ String-এর অক্ষরের Case আলাদা।

### Example 5: Property-এর ক্ষেত্রে

```javascript
let user = {
    name: "Sifat",
    age: 25
};

console.log(user.name);
console.log(user.Name);
```

Output:
```text
Sifat
undefined
```

এখানে `Name` নামে কোনো Property নেই।

### গুরুত্বপূর্ণ নিয়ম

- `userName` এবং `username` আলাদা।
- `myFunction()` এবং `myfunction()` আলাদা।
- `console` এবং `Console` আলাদা।
- String Comparison সাধারণত Case-Sensitive।

**Best Practice:** Variable ও Function-এর নাম লেখার ক্ষেত্রে একই Naming Convention অনুসরণ করো।

---

# 7. Semicolons

### Semicolon কী?

JavaScript-এ Semicolon (`;`) একটি Statement-এর সমাপ্তি নির্দেশ করতে ব্যবহৃত হয়।

উদাহরণ:

```javascript
let name = "Sifat";
let age = 25;

console.log(name);
console.log(age);
```

### Example 1: Semicolon ব্যবহার

```javascript
let a = 10;
let b = 20;

console.log(a + b);
```

Output:
```text
30
```

### Example 2: Semicolon ছাড়া

```javascript
let a = 10
let b = 20

console.log(a + b)
```

Output:
```text
30
```

অনেক ক্ষেত্রে JavaScript Automatic Semicolon Insertion (ASI)-এর মাধ্যমে প্রয়োজনীয় Statement Boundary নির্ধারণ করতে পারে।

তবে সব ক্ষেত্রে Semicolon বাদ দিলে একই ফল পাওয়া যায় না।

### Example 3: Return Statement-এর গুরুত্বপূর্ণ সমস্যা

```javascript
function getNumber() {
    return 10;
}

console.log(getNumber());
```

Output:
```text
10
```

কিন্তু:

```javascript
function getNumber() {
    return
    10;
}

console.log(getNumber());
```

Output:
```text
undefined
```

এখানে `return`-এর পর Newline থাকার কারণে JavaScript স্বয়ংক্রিয়ভাবে `return;` হিসেবে বিবেচনা করে।

### Example 4: Semicolon বাদ দেওয়ার আরেকটি সমস্যা

```javascript
let number = 10;

[number].forEach(function (item) {
    console.log(item);
});
```

Output:
```text
10
```

কিন্তু যদি প্রথম লাইনের পর Semicolon বাদ দেওয়া হয়:

```javascript
let number = 10
[number].forEach(function (item) {
    console.log(item);
});
```

এটি প্রত্যাশিতভাবে কাজ করবে না; JavaScript আগের লাইনের সঙ্গে পরের লাইনকে যুক্ত করে ভিন্নভাবে Parse করার চেষ্টা করতে পারে।

### Example 5: Function Expression

```javascript
const greet = function () {
    console.log("Hello");
};

greet();
```

এখানে Function Expression-এর Assignment Statement-এর শেষে Semicolon ব্যবহার করা হয়েছে।

### Semicolon ব্যবহার করা কি বাধ্যতামূলক?

JavaScript-এ অনেক Statement-এর শেষে Semicolon বাদ দেওয়া যায়। তবে কিছু ক্ষেত্রে Semicolon বাদ দিলে ভুল ফলাফল হতে পারে।

**Best Practice:**
- একটি নির্দিষ্ট Style অনুসরণ করো।
- প্রজেক্টে Semicolon ব্যবহার করা হলে সব জায়গায় ব্যবহার করো।
- `return`-এর পরে Newline দেওয়ার বিষয়ে সতর্ক থাকো।
- নতুন Statement-এর আগে `(`, `[`, বা Backtick দিয়ে শুরু হওয়া Expression থাকলে আগের Statement-এর সমাপ্তি স্পষ্ট করো।

---

# 8. Whitespace

### Whitespace কী?

Whitespace বলতে Space, Tab এবং Newline-এর মতো ফাঁকা জায়গা বোঝায়।

JavaScript-এ Whitespace সাধারণত কোডকে সহজে পড়ার উপযোগী করতে ব্যবহৃত হয়।

### Example 1: সাধারণ Space

```javascript
let name = "Sifat";

console.log(name);
```

### Example 2: অতিরিক্ত Space

```javascript
let       name       =       "Sifat";

console.log(name);
```

Output:
```text
Sifat
```

এই উদাহরণে অতিরিক্ত Space কোডের ফলাফল পরিবর্তন করেনি।

### Example 3: Newline

```javascript
let a = 10;
let b = 20;

console.log(a + b);
```

Output:
```text
30
```

### Example 4: Function-এর ভেতরে Indentation

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

Output:
```text
Hello
```

এখানে Indentation কোডের Structure বোঝাতে সাহায্য করে।

### Example 5: String-এর মধ্যে Whitespace

```javascript
let text = "Hello     World";

console.log(text);
```

Output:
```text
Hello     World
```

String-এর ভেতরের একাধিক Space সংরক্ষিত থাকে।

### Example 6: Whitespace-এর কারণে ফলাফল পরিবর্তন

```javascript
let a = 10;
let b = 20;

console.log(a + b);
```

Output:
```text
30
```

কিন্তু:

```javascript
let a = 10;
let b = 20;

console.log(a + +b);
```

Output:
```text
30
```

এখানে `+ +b` হলো Addition Operator-এর পরে Unary Plus Operator। Whitespace সবসময় অর্থহীন নয়; Operator ও Token কীভাবে আলাদা হচ্ছে, সেটি গুরুত্বপূর্ণ।

### Clean Whitespace-এর নিয়ম

1. Function-এর ভেতরে Indentation ব্যবহার করো।
2. একই প্রজেক্টে একই Indentation Style রাখো।
3. Variable Declaration-এর মধ্যে অপ্রয়োজনীয় Space ব্যবহার করো না।
4. কোডের বিভিন্ন অংশের মধ্যে প্রয়োজনমতো ফাঁকা লাইন রাখো।
5. String-এর মধ্যে Space পরিবর্তন করার আগে নিশ্চিত হও যে সেটি প্রয়োজনীয় নয়।

---

# 9. Identifiers

### Identifier কী?

Identifier হলো JavaScript-এ Variable, Function, Class বা অন্যান্য Named Entity-কে চিহ্নিত করার জন্য ব্যবহৃত নাম।

উদাহরণ:

```javascript
let userName = "Sifat";

function greetUser() {
    console.log("Hello");
}
```

এখানে:
- `userName` হলো Variable Identifier।
- `greetUser` হলো Function Identifier।

### Identifier লেখার নিয়ম

সাধারণভাবে JavaScript Identifier-এর ক্ষেত্রে:

1. অক্ষর (`a-z`, `A-Z`) দিয়ে শুরু করা যায়।
2. Underscore (`_`) দিয়ে শুরু করা যায়।
3. Dollar Sign (`$`) দিয়ে শুরু করা যায়।
4. সংখ্যা দিয়ে শুরু করা যায় না।
5. শুরুতে ব্যবহার করার পর Identifier-এর মধ্যে সংখ্যা থাকতে পারে।
6. সাধারণভাবে Space ব্যবহার করা যায় না।
7. Reserved Keyword-কে সাধারণ Identifier হিসেবে ব্যবহার করা যায় না।

### Example 1: সঠিক Identifier

```javascript
let name = "Sifat";
let userName = "Rahim";
let _age = 25;
let $price = 100;
let score1 = 90;

console.log(name);
console.log(userName);
console.log(_age);
console.log($price);
console.log(score1);
```

### Example 2: ভুল Identifier

```javascript
// let 1name = "Sifat";
// let user name = "Sifat";
// let let = 10;
```

উপরের প্রতিটি লাইন Uncomment করলে Syntax Error তৈরি হবে।

### Example 3: Camel Case

```javascript
let firstName = "Shibgatullah";
let lastName = "Sifat";

console.log(firstName + " " + lastName);
```

Output:
```text
Shibgatullah Sifat
```

### Example 4: Boolean Identifier

```javascript
let isLoggedIn = true;
let hasPermission = false;

console.log(isLoggedIn);
console.log(hasPermission);
```

Output:
```text
true
false
```

Boolean Variable-এর নাম `is`, `has` অথবা `can` দিয়ে শুরু করলে অনেক সময় উদ্দেশ্য সহজে বোঝা যায়।

### Example 5: Function Identifier

```javascript
function calculateTotal(price, quantity) {
    return price * quantity;
}

console.log(calculateTotal(100, 3));
```

Output:
```text
300
```

### Identifier Naming Convention

| Convention | উদাহরণ | ব্যবহার |
|---|---|---|
| camelCase | `firstName` | Variable ও Function |
| PascalCase | `UserProfile` | Class ও Constructor |
| UPPER_SNAKE_CASE | `MAX_LIMIT` | প্রচলিতভাবে Constant Configuration Value |
| snake_case | `first_name` | কিছু প্রজেক্টে ব্যবহৃত |

**মনে রাখবে:** `const` দিয়ে তৈরি সব Variable-এর নাম UPPER_SNAKE_CASE হতে হবে, এমন কোনো নিয়ম নেই।

উদাহরণ:

```javascript
const userName = "Sifat";
const MAX_RETRY_COUNT = 3;
```

দুটিই বৈধ। Naming Convention নির্ভর করে প্রজেক্টের Style Guide-এর ওপর।

---

# 10. Keywords

### Keyword কী?

Keyword হলো JavaScript-এর এমন কিছু সংরক্ষিত শব্দ, যেগুলোর নির্দিষ্ট অর্থ ও ব্যবহার রয়েছে।

উদাহরণ:

```javascript
let age = 20;

if (age >= 18) {
    console.log("Adult");
}
```

এখানে `let` এবং `if` হলো Keyword।

### গুরুত্বপূর্ণ JavaScript Keywords

| Keyword | কাজ |
|---|---|
| `let` | Block-scoped Variable তৈরি করে |
| `const` | Block-scoped Binding তৈরি করে, যা পুনরায় Assign করা যায় না |
| `var` | Function-scoped অথবা Global-scoped Variable তৈরি করে |
| `if` | Condition পরীক্ষা করে |
| `else` | বিকল্প Branch নির্ধারণ করে |
| `for` | Loop তৈরি করে |
| `while` | Condition-ভিত্তিক Loop তৈরি করে |
| `function` | Function Declaration লেখে |
| `return` | Function থেকে Value ফেরত দেয় |
| `class` | Class Declaration লেখে |
| `new` | Constructor-কে Call করে Object তৈরি করতে ব্যবহৃত হয় |
| `this` | বর্তমান Execution Context-এর `this` Value নির্দেশ করে |
| `try` | Error Handling-এর জন্য ব্যবহৃত হয় |
| `catch` | Exception Handle করে |
| `throw` | Exception তৈরি করে |
| `switch` | একাধিক Case-এর মধ্যে নির্বাচন করে |
| `break` | Loop বা Switch থেকে বেরিয়ে আসে |
| `continue` | Loop-এর বর্তমান Iteration বাদ দেয় |
| `typeof` | Operand-এর Type-সংক্রান্ত String ফেরত দেয় |
| `import` | Module Import করে |
| `export` | Module থেকে Value Export করে |
| `async` | Async Function Declaration বা Expression-এ ব্যবহৃত হয় |
| `await` | Async Context-এ Promise-এর ফলাফলের জন্য অপেক্ষা করে |
| `yield` | Generator Function-এ Execution সাময়িকভাবে স্থগিত করে |

### Example 1: `let`

```javascript
let age = 20;

console.log(age);
```

### Example 2: `if`

```javascript
let marks = 80;

if (marks >= 40) {
    console.log("Passed");
}
```

Output:
```text
Passed
```

### Example 3: `for`

```javascript
for (let i = 1; i <= 3; i++) {
    console.log(i);
}
```

Output:
```text
1
2
3
```

### Example 4: `function` এবং `return`

```javascript
function multiply(a, b) {
    return a * b;
}

console.log(multiply(4, 5));
```

Output:
```text
20
```

### Example 5: `typeof`

```javascript
console.log(typeof "Hello");
console.log(typeof 100);
console.log(typeof true);
```

Output:
```text
string
number
boolean
```

### গুরুত্বপূর্ণ নিয়ম

Keyword-কে সাধারণ Variable Name হিসেবে ব্যবহার করা যায় না।

```javascript
// let if = 10;
```

এটি Syntax Error তৈরি করবে।

---

# 11. Reserved Words

### Reserved Words কী?

Reserved Words হলো এমন কিছু শব্দ, যেগুলো JavaScript-এর Syntax বা ভবিষ্যৎ ভাষাগত ব্যবহারের জন্য সংরক্ষিত। এগুলোর অনেকগুলো সরাসরি Keyword, আর কিছু শব্দ নির্দিষ্ট Context-এ বিশেষ নিয়মের অধীন।

সাধারণ Variable Name বা Function Name হিসেবে এগুলো ব্যবহার করা যাবে কি না, তা নির্ভর করে শব্দটি এবং ব্যবহারের Context-এর ওপর।

### কিছু গুরুত্বপূর্ণ Reserved Word

```text
if
else
for
while
class
return
function
const
let
var
new
this
switch
try
catch
throw
import
export
```

এগুলো JavaScript-এর গুরুত্বপূর্ণ Keyword-ও বটে।

এ ছাড়া `enum`, `implements`, `interface`, `package`, `private`, `protected`, `public`, `static` ইত্যাদি শব্দও বিশেষ সংরক্ষিত নিয়মের অধীন। বিশেষ করে Strict Mode-এ কিছু Identifier ব্যবহারের সীমাবদ্ধতা রয়েছে।

### Example 1: Reserved Word হিসেবে `if`

```javascript
let age = 20;

if (age >= 18) {
    console.log("Adult");
}
```

এখানে `if` Condition পরীক্ষা করার জন্য ব্যবহৃত হয়েছে।

### Example 2: Keyword-কে Variable Name হিসেবে ব্যবহার

```javascript
// let class = "JavaScript";
```

এটি Syntax Error তৈরি করবে।

সঠিক পদ্ধতি:

```javascript
let className = "JavaScript";

console.log(className);
```

Output:
```text
JavaScript
```

### Example 3: `default` Property Name হিসেবে

Object Property Name হিসেবে অনেক Reserved Word ব্যবহার করা যায়।

```javascript
const settings = {
    default: true
};

console.log(settings.default);
```

Output:
```text
true
```

এখানে `default` Object-এর Property Name হিসেবে ব্যবহৃত হয়েছে।

### Example 4: String হিসেবে Reserved Word

```javascript
let keyword = "return";

console.log(keyword);
```

Output:
```text
return
```

String-এর ভেতরে `return` শব্দটি ব্যবহারে কোনো সমস্যা নেই।

### Example 5: Strict Mode-এর সীমাবদ্ধতা

```javascript
"use strict";

// let interface = "JavaScript";
```

Strict Mode-এ `interface`-এর মতো নির্দিষ্ট Reserved Identifier ব্যবহার করলে Syntax Error হতে পারে।

### Keyword ও Reserved Word-এর পার্থক্য

- **Keyword:** ভাষার Syntax-এ নির্দিষ্ট অর্থে ব্যবহৃত শব্দ।
- **Reserved Word:** সাধারণ Identifier হিসেবে ব্যবহারে ভাষার নিয়ম দ্বারা সীমাবদ্ধ শব্দ।

শিক্ষানবিশ হিসেবে সবচেয়ে নিরাপদ পদ্ধতি হলো JavaScript-এর Keyword এবং Reserved Word-কে Variable Name হিসেবে ব্যবহার না করা।

---

# 12. Strict Mode (`"use strict"`)

### Strict Mode কী?

Strict Mode হলো JavaScript-এর এমন একটি Execution Mode, যা ভাষার কিছু পুরোনো বা ঝুঁকিপূর্ণ আচরণ সীমাবদ্ধ করে এবং নির্দিষ্ট কিছু ভুলকে Error হিসেবে শনাক্ত করে।

Strict Mode চালু করতে ব্যবহার করা হয়:

```javascript
"use strict";
```

এটি একটি বিশেষ String Literal Directive।

### Strict Mode কেন ব্যবহার করা হয়?

1. কিছু সাধারণ Programming Error শনাক্ত করতে।
2. অনিচ্ছাকৃতভাবে Global Variable তৈরি হওয়া আটকাতে।
3. কিছু অস্পষ্ট বা ঝুঁকিপূর্ণ Syntax নিষিদ্ধ করতে।
4. JavaScript-এর কিছু পুরোনো আচরণ এড়াতে।

### Example 1: Strict Mode ছাড়া Undeclared Variable

```javascript
function test() {
    x = 10;

    console.log(x);
}

test();
```

সাধারণ Non-Strict Script-এ `x` আগে Declare না করা থাকলে Assignment-এর ফলে Global Property তৈরি হতে পারে।

**সতর্কতা:** এ ধরনের কোড লেখা উচিত নয়।

### Example 2: Strict Mode-এ Undeclared Variable

```javascript
"use strict";

function test() {
    x = 10;

    console.log(x);
}

test();
```

Output:
```text
ReferenceError: x is not defined
```

কারণ `x` Declare করা হয়নি।

সঠিক পদ্ধতি:

```javascript
"use strict";

function test() {
    let x = 10;

    console.log(x);
}

test();
```

Output:
```text
10
```

### Example 3: Duplicate Parameter

Non-Strict সাধারণ Function-এ কিছু ক্ষেত্রে Duplicate Parameter Name অনুমোদিত হতে পারে।

```javascript
function add(a, a) {
    return a;
}

console.log(add(10, 20));
```

Output:
```text
20
```

কিন্তু Strict Mode-এ:

```javascript
"use strict";

function add(a, a) {
    return a;
}
```

এটি Syntax Error তৈরি করবে।

### Example 4: `this`-এর আচরণ

Non-Strict Mode-এ সাধারণ Function Call-এর ক্ষেত্রে `this` সাধারণত Global Object-এ রূপান্তরিত হয়।

Strict Mode-এ:

```javascript
"use strict";

function showThis() {
    console.log(this);
}

showThis();
```

Output:
```text
undefined
```

এখানে সাধারণ Function Call-এর সময় `this` হলো `undefined`।

### Example 5: Strict Mode-এ Read-Only Property পরিবর্তন

```javascript
"use strict";

const user = {};

Object.defineProperty(user, "name", {
    value: "Sifat",
    writable: false
});

user.name = "Rahim";
```

এখানে `user.name` পরিবর্তন করার চেষ্টা করলে `TypeError` হবে।

### Strict Mode চালু করার নিয়ম

**সাধারণ Script-এ:**

```javascript
"use strict";

let age = 20;

console.log(age);
```

**Function-এর ভেতরে:**

```javascript
function calculate() {
    "use strict";

    let result = 10 + 20;

    return result;
}

console.log(calculate());
```

Output:
```text
30
```

### ES Modules-এ Strict Mode

JavaScript ES Module স্বয়ংক্রিয়ভাবে Strict Mode-এ চলে।

উদাহরণ:

```javascript
// app.js

export function greet() {
    console.log("Hello");
}
```

এখানে আলাদাভাবে `"use strict"` লিখতে হয় না।

**মনে রাখবে:** আধুনিক JavaScript Module-এ Strict Mode স্বয়ংক্রিয়ভাবে কার্যকর। তবে পুরোনো Script বুঝতে `"use strict"` জানা গুরুত্বপূর্ণ।

---

# 13. Code Blocks

### Code Block কী?

Code Block হলো `{}`-এর মধ্যে লেখা এক বা একাধিক JavaScript Statement-এর সমষ্টি।

এটি বিভিন্ন Statement-কে একটি নির্দিষ্ট Structure-এর মধ্যে রাখতে ব্যবহৃত হয়।

### Syntax

```javascript
{
    // Statements
}
```

### Example 1: সাধারণ Code Block

```javascript
{
    let name = "Sifat";

    console.log(name);
}
```

Output:
```text
Sifat
```

### Example 2: `if`-এর মধ্যে Code Block

```javascript
let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
    console.log("You can vote if otherwise eligible.");
}
```

Output:
```text
You are an adult.
You can vote if otherwise eligible.
```

### Example 3: `for` Loop-এর মধ্যে Code Block

```javascript
for (let i = 1; i <= 3; i++) {
    console.log("Number:", i);
}
```

Output:
```text
Number: 1
Number: 2
Number: 3
```

### Example 4: Function Body

```javascript
function greet() {
    let message = "Hello World";

    console.log(message);
}

greet();
```

Output:
```text
Hello World
```

Function-এর `{}`-এর ভেতরে Function Body থাকে।

### Example 5: Block Scope

```javascript
{
    let age = 25;

    console.log(age);
}
```

Output:
```text
25
```

কিন্তু:

```javascript
{
    let age = 25;
}

console.log(age);
```

Output:
```text
ReferenceError: age is not defined
```

কারণ `let` দিয়ে Declare করা `age` শুধু ওই Block-এর ভেতরে Accessible।

### Example 6: `var` এবং Block Scope

```javascript
{
    var age = 25;
}

console.log(age);
```

Output:
```text
25
```

কারণ `var` সাধারণ Block দ্বারা Scoped হয় না। এটি Function Scope অথবা Global Scope অনুসরণ করে।

### গুরুত্বপূর্ণ পার্থক্য

| বিষয় | `let` | `const` | `var` |
|---|---|---|---|
| Block-scoped | হ্যাঁ | হ্যাঁ | না |
| পুনরায় Assign করা যায় | হ্যাঁ | না | হ্যাঁ |
| একই Scope-এ পুনরায় Declare | সাধারণভাবে না | সাধারণভাবে না | কিছু ক্ষেত্রে হ্যাঁ |
| আধুনিক কোডে সুপারিশ | প্রয়োজনমতো | সম্ভব হলে | সাধারণত এড়ানো ভালো |

---

# 14. JavaScript Errors-এর প্রাথমিক ধারণা

### Error কী?

JavaScript-এ Error হলো এমন একটি সমস্যা, যার কারণে কোড প্রত্যাশিতভাবে কাজ করতে ব্যর্থ হয়।

সাধারণভাবে JavaScript Error তিনটি গুরুত্বপূর্ণ শ্রেণিতে বোঝা যায়:

1. Syntax Error
2. Runtime Error
3. Logical Error

এ ছাড়া JavaScript-এ `TypeError`, `ReferenceError`, `RangeError` ইত্যাদি নির্দিষ্ট Error Type রয়েছে।

## 14.1 Syntax Error

Syntax Error ঘটে যখন কোড JavaScript-এর Grammar বা Syntax Rules অনুসরণ করে না।

### Example 1

```javascript
// let age = ;
```

এখানে Value অসম্পূর্ণ হওয়ায় Syntax Error হবে।

### Example 2

```javascript
// if (age > 18 {
//     console.log("Adult");
// }
```

এখানে `if`-এর Condition-এর Closing Parenthesis `)` অনুপস্থিত।

### Example 3

```javascript
// function greet( {
//     console.log("Hello");
// }
```

এখানেও Syntax অসম্পূর্ণ।

**সমাধান:** Bracket, Parenthesis, Quote এবং Statement-এর Structure পরীক্ষা করো।

---

## 14.2 ReferenceError

ReferenceError সাধারণত এমন Identifier ব্যবহার করার সময় ঘটে, যা বর্তমান Scope-এ উপলব্ধ নয়।

### Example 1

```javascript
console.log(userName);
```

যদি `userName` Declare করা না থাকে এবং Scope-এ উপলব্ধ না হয়, তাহলে `ReferenceError` হবে।

### Example 2

```javascript
{
    let age = 25;
}

console.log(age);
```

এখানে `age` Block-এর বাইরে ব্যবহার করা হয়েছে।

### Example 3

```javascript
function greet() {
    let message = "Hello";
}

console.log(message);
```

এখানে `message` Function-এর বাইরে উপলব্ধ নয়।

**সমাধান:**
- Variable Declare করা হয়েছে কি না পরীক্ষা করো।
- Variable সঠিক Scope-এ আছে কি না দেখো।
- Variable Name-এর Case ঠিক আছে কি না যাচাই করো।

---

## 14.3 TypeError

কোনো Value-এর ওপর অনুপযুক্ত Operation করার চেষ্টা করলে TypeError হতে পারে।

### Example 1: `null` থেকে Property পড়া

```javascript
let user = null;

console.log(user.name);
```

Output:
```text
TypeError
```

কারণ `null`-এর `name` Property পড়া যায় না।

### Example 2: Constant Reassign করা

```javascript
const age = 20;

age = 25;
```

Output:
```text
TypeError: Assignment to constant variable.
```

### Example 3: Function নয় এমন Value-কে Function হিসেবে Call করা

```javascript
let number = 10;

number();
```

Output:
```text
TypeError: number is not a function
```

**সমাধান:**
- Value-এর Type পরীক্ষা করো।
- Object বা Variable `null` অথবা `undefined` কি না দেখো।
- Function Call করার আগে নিশ্চিত হও যে Value-টি Function।

---

## 14.4 Logical Error

Logical Error হলো এমন ভুল, যেখানে কোড Execute হয়, কিন্তু ফলাফল প্রত্যাশিত হয় না।

### Example

```javascript
let price = 100;
let quantity = 5;

let total = price + quantity;

console.log(total);
```

Output:
```text
105
```

কিন্তু আমাদের উদ্দেশ্য যদি মোট মূল্য বের করা হয়, তাহলে সঠিক Operation হবে Multiplication।

সঠিক কোড:

```javascript
let price = 100;
let quantity = 5;

let total = price * quantity;

console.log(total);
```

Output:
```text
500
```

এখানে প্রথম কোডে কোনো Syntax Error ছিল না। সমস্যা ছিল Logic-এ।

### Logical Error এড়ানোর উপায়

1. Expected Output আগে নির্ধারণ করো।
2. ছোট ছোট Test Case ব্যবহার করো।
3. Variable-এর Value Console-এ পরীক্ষা করো।
4. Edge Case বিবেচনা করো।
5. প্রয়োজন অনুযায়ী Debugger ব্যবহার করো।

---

## 14.5 `try...catch` দিয়ে Error Handle করা

JavaScript-এ অনেক Runtime Exception `try...catch` দিয়ে Handle করা যায়।

```javascript
try {
    let user = null;

    console.log(user.name);
} catch (error) {
    console.log("An error occurred.");
}
```

Output:
```text
An error occurred.
```

এখানে `try`-এর মধ্যে Exception ঘটেছে, তাই `catch` Block Execute হয়েছে।

Error-এর বিস্তারিত দেখতে:

```javascript
try {
    let user = null;

    console.log(user.name);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}
```

সাধারণত Output হবে:

```text
TypeError
Cannot read properties of null (reading 'name')
```

Error Message JavaScript Engine বা Environment অনুযায়ী সামান্য ভিন্ন হতে পারে।

### Custom Error তৈরি করা

```javascript
function withdraw(balance, amount) {
    if (amount > balance) {
        throw new Error("Insufficient balance");
    }

    return balance - amount;
}

try {
    console.log(withdraw(1000, 1500));
} catch (error) {
    console.log(error.message);
}
```

Output:
```text
Insufficient balance
```

এখানে `throw` দিয়ে Custom Error তৈরি করা হয়েছে।

**গুরুত্বপূর্ণ:** `try...catch` সব ধরনের Error স্বয়ংক্রিয়ভাবে Handle করে না। বিশেষ করে সাধারণ Syntax Error সাধারণত কোড Execute হওয়ার আগেই শনাক্ত হয়। Asynchronous Operation-এর Error Handle করতে সংশ্লিষ্ট Promise বা `async/await`-এর Error Handling নিয়ম অনুসরণ করতে হয়।

---

# 15. Clean Code-এর মৌলিক নিয়ম

### Clean Code কী?

Clean Code হলো এমন কোড, যা সহজে পড়া যায়, বোঝা যায়, পরিবর্তন করা যায় এবং Maintain করা যায়।

একজন ভালো Developer শুধু কোড লিখতে জানেন না; তিনি এমন কোডও লেখেন, যা অন্য Developer সহজে বুঝতে পারেন।

## 15.1 Meaningful Variable Name ব্যবহার করো

❌ খারাপ:

```javascript
let x = 500;
let y = 3;

console.log(x * y);
```

এখানে `x` এবং `y` কী বোঝাচ্ছে, তা পরিষ্কার নয়।

✅ ভালো:

```javascript
let price = 500;
let quantity = 3;

let totalPrice = price * quantity;

console.log(totalPrice);
```

Output:
```text
1500
```

এখানে Variable-এর নাম থেকেই তাদের কাজ বোঝা যায়।

---

## 15.2 সঠিক Naming Convention অনুসরণ করো

JavaScript-এ Variable ও Function-এর জন্য সাধারণত camelCase ব্যবহার করা হয়।

❌ খারাপ:

```javascript
let First_Name = "Sifat";

function Calculate_Total() {
    return 100;
}
```

✅ ভালো:

```javascript
let firstName = "Sifat";

function calculateTotal() {
    return 100;
}
```

---

## 15.3 `const` এবং `let` সঠিকভাবে ব্যবহার করো

আধুনিক JavaScript-এ সাধারণত `const` দিয়ে শুরু করা ভালো, যদি Variable-টিকে পুনরায় Assign করার প্রয়োজন না হয়। Reassignment প্রয়োজন হলে `let` ব্যবহার করো।

❌ অপ্রয়োজনীয়ভাবে `var` ব্যবহার:

```javascript
var name = "Sifat";
var age = 25;
```

✅ আধুনিক পদ্ধতি:

```javascript
const name = "Sifat";
let age = 25;

age = 26;

console.log(name);
console.log(age);
```

Output:
```text
Sifat
26
```

**মনে রাখবে:** `const` Object বা Array-এর ভেতরের Value পরিবর্তন করা থেকে বিরত রাখে না; এটি Variable Binding-কে পুনরায় Assign করা থেকে বাধা দেয়।

---

## 15.4 সঠিক Indentation ব্যবহার করো

❌ খারাপ:

```javascript
function greet(){
console.log("Hello");
if(true){
console.log("Welcome");
}
}
```

✅ ভালো:

```javascript
function greet() {
    console.log("Hello");

    if (true) {
        console.log("Welcome");
    }
}

greet();
```

Output:
```text
Hello
Welcome
```

Indentation কোডের Structure সহজে বুঝতে সাহায্য করে।

---

## 15.5 অপ্রয়োজনীয় Comment এড়িয়ে চলো

❌ খারাপ:

```javascript
// Declare a variable
let age = 20;

// Print the age
console.log(age);
```

এখানে Comment ছাড়াও কোড সহজে বোঝা যায়।

তবে জটিল Business Logic ব্যাখ্যা করতে Comment উপকারী।

✅ ভালো:

```javascript
const TAX_RATE = 0.15;

function calculateTax(price) {
    // Tax is calculated on the original price.
    return price * TAX_RATE;
}

console.log(calculateTax(1000));
```

Output:
```text
150
```

---

## 15.6 Function ছোট ও নির্দিষ্ট উদ্দেশ্যের রাখো

❌ খারাপ:

```javascript
function process() {
    let price = 500;
    let quantity = 3;

    let total = price * quantity;

    console.log(total);

    if (total > 1000) {
        console.log("Expensive");
    } else {
        console.log("Affordable");
    }
}
```

এখানে একটি Function একাধিক কাজ করছে।

✅ ভালো:

```javascript
function calculateTotal(price, quantity) {
    return price * quantity;
}

function getPriceCategory(total) {
    return total > 1000 ? "Expensive" : "Affordable";
}

const total = calculateTotal(500, 3);

console.log(total);
console.log(getPriceCategory(total));
```

Output:
```text
1500
Expensive
```

এখানে প্রতিটি Function-এর নির্দিষ্ট দায়িত্ব রয়েছে।

---

## 15.7 Magic Numbers এড়িয়ে চলো

Magic Number হলো এমন সংখ্যা, যার অর্থ কোডে স্পষ্টভাবে বোঝা যায় না।

❌ খারাপ:

```javascript
let finalPrice = 1000 - (1000 * 15 / 100);

console.log(finalPrice);
```

Output:
```text
850
```

✅ ভালো:

```javascript
const originalPrice = 1000;
const discountPercentage = 15;

const discountAmount = originalPrice * discountPercentage / 100;
const finalPrice = originalPrice - discountAmount;

console.log(finalPrice);
```

Output:
```text
850
```

এখানে প্রতিটি Value-এর উদ্দেশ্য পরিষ্কার।

---

## 15.8 অপ্রয়োজনীয় Code পুনরাবৃত্তি এড়িয়ে চলো

❌ খারাপ:

```javascript
console.log(10 * 5);
console.log(20 * 5);
console.log(30 * 5);
```

✅ ভালো:

```javascript
function multiplyByFive(number) {
    return number * 5;
}

console.log(multiplyByFive(10));
console.log(multiplyByFive(20));
console.log(multiplyByFive(30));
```

Output:
```text
50
100
150
```

একই Logic বারবার লেখার পরিবর্তে Function ব্যবহার করলে কোড সহজে Maintain করা যায়।

---

## 15.9 Boolean Expression সহজ রাখো

❌ অপ্রয়োজনীয়:

```javascript
const isAdult = age >= 18 ? true : false;
```

✅ সহজ:

```javascript
const isAdult = age >= 18;
```

সম্পূর্ণ উদাহরণ:

```javascript
const age = 20;
const isAdult = age >= 18;

console.log(isAdult);
```

Output:
```text
true
```

---

## 15.10 Consistent Code Style বজায় রাখো

❌ অসংগত Style:

```javascript
const firstName="Sifat";
let age=25;

function greet_user(){
console.log("Hello");
}
```

✅ Consistent Style:

```javascript
const firstName = "Sifat";
let age = 25;

function greetUser() {
    console.log("Hello");
}
```

একই প্রজেক্টে ধারাবাহিকভাবে:
- Naming Convention অনুসরণ করো।
- Indentation বজায় রাখো।
- Operator-এর চারপাশে প্রয়োজনমতো Space রাখো।
- Function ও Code Block পরিষ্কারভাবে সাজাও।
- প্রয়োজনে ESLint এবং Prettier-এর মতো Tool ব্যবহার করো।

---

# 🎯 Bonus: JavaScript Fundamentals — একটি বাস্তব উদাহরণ

এবার উপরের বিষয়গুলো একসঙ্গে ব্যবহার করে একটি ছোট Program তৈরি করি।

### Project: Student Result Calculator

**Requirements:**
1. শিক্ষার্থীর নাম সংরক্ষণ করতে হবে।
2. তিনটি বিষয়ের নম্বর সংরক্ষণ করতে হবে।
3. মোট নম্বর হিসাব করতে হবে।
4. গড় নম্বর বের করতে হবে।
5. Pass অথবা Fail নির্ধারণ করতে হবে।
6. কোড Clean এবং Readable হতে হবে।

### সম্পূর্ণ কোড

```javascript
"use strict";

// Student information
const studentName = "Sifat";

const marks = {
    javascript: 85,
    react: 90,
    html: 80
};

// Calculate total marks
function calculateTotal(marks) {
    return marks.javascript + marks.react + marks.html;
}

// Calculate average marks
function calculateAverage(total, subjectCount) {
    return total / subjectCount;
}

// Determine result
function getResult(average) {
    return average >= 40 ? "Pass" : "Fail";
}

// Main program
const totalMarks = calculateTotal(marks);
const averageMarks = calculateAverage(totalMarks, 3);
const result = getResult(averageMarks);

// Display result
console.log("Student:", studentName);
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);
console.log("Result:", result);
```

### Output

```text
Student: Sifat
Total Marks: 255
Average Marks: 85
Result: Pass
```

### এই প্রজেক্টে কোন বিষয়গুলো ব্যবহার হয়েছে?

| বিষয় | কোডের উদাহরণ |
|---|---|
| Syntax | সম্পূর্ণ Program |
| Statements | `const studentName = "Sifat";` |
| Expressions | `marks.javascript + marks.react + marks.html` |
| Comments | `// Student information` |
| Single-Line Comments | `// Calculate total marks` |
| Multi-Line Comments | প্রয়োজনে `/* ... */` |
| Case Sensitivity | `studentName` এবং `StudentName` আলাদা |
| Semicolons | Statement-এর শেষে `;` |
| Whitespace | Indentation ও ফাঁকা লাইন |
| Identifiers | `studentName`, `calculateTotal` |
| Keywords | `const`, `function`, `return` |
| Reserved Words | `return`-এর মতো Keyword সঠিকভাবে ব্যবহার |
| Strict Mode | `"use strict";` |
| Code Blocks | Function-এর `{}` |
| Error Handling | পরবর্তী সংস্করণে Validation যোগ করা যাবে |
| Clean Code | Meaningful Names ও ছোট Function |

**নোট:** এই উদাহরণে প্রতিটি বিষয়ের পূর্ণ ব্যবহার দেখানো সম্ভব নয়। বিশেষ করে Error Handling এবং Reserved Words-এর আরও বিস্তারিত ব্যবহার আলাদাভাবে অনুশীলন করতে হবে।

---

# 📝 Practice Set — নিজের দক্ষতা যাচাই করো

নিচের প্রশ্নগুলো নিজে সমাধান করার চেষ্টা করো।

### Beginner Level

**প্রশ্ন ১:** `name`, `age` এবং `country` নামে তিনটি Variable তৈরি করে Console-এ দেখাও।

**প্রশ্ন ২:** দুটি সংখ্যার যোগফল বের করার Program লেখো।

**প্রশ্ন ৩:** Single-Line এবং Multi-Line Comment ব্যবহার করে একটি Program লেখো।

**প্রশ্ন ৪:** `userName` এবং `username` দুটি Variable তৈরি করে তাদের Value দেখাও।

**প্রশ্ন ৫:** `const` এবং `let`-এর মধ্যে পার্থক্য দেখানোর জন্য একটি Program লেখো।

### Intermediate Level

**প্রশ্ন ৬:** তিনটি বিষয়ের নম্বর নিয়ে মোট এবং গড় হিসাব করো।

**প্রশ্ন ৭:** একটি সংখ্যা জোড় নাকি বিজোড়, তা নির্ধারণ করো।

**প্রশ্ন ৮:** একটি Function তৈরি করো, যা দুটি সংখ্যার গুণফল ফেরত দেবে।

**প্রশ্ন ৯:** একটি Code Block-এর ভেতরে `let` Variable তৈরি করে Block-এর বাইরে ব্যবহার করার চেষ্টা করো। কী Error হয়, তা ব্যাখ্যা করো।

**প্রশ্ন ১০:** Strict Mode ব্যবহার করে একটি Undeclared Variable-এ Value Assign করার চেষ্টা করো। কী Error হয়, তা ব্যাখ্যা করো।

### Advanced Practice

**প্রশ্ন ১১:** নিচের কোডের Output কী হবে? ব্যাখ্যা করো।

```javascript
let x = 10;
let X = 20;

console.log(x + X);
```

**প্রশ্ন ১২:** নিচের কোডে সমস্যা কোথায়?

```javascript
function getValue() {
    return
    100;
}

console.log(getValue());
```

**প্রশ্ন ১৩:** নিচের কোডটি কেন Error তৈরি করে?

```javascript
"use strict";

function test() {
    value = 100;
}

test();
```

**প্রশ্ন ১৪:** নিচের কোডে Statement এবং Expression চিহ্নিত করো।

```javascript
const price = 100;
const quantity = 5;
const total = price * quantity;

console.log(total);
```

**প্রশ্ন ১৫:** Student Result Calculator-এ এমন Validation যোগ করো, যাতে নম্বর `0` থেকে `100`-এর বাইরে হলে Error Message দেখায়।

---

# ✅ JavaScript Fundamentals — Quick Revision

| Topic | মনে রাখার বিষয় |
|---|---|
| JavaScript Syntax | কোড লেখার নিয়ম |
| Statements | Program-এর নির্দেশনা |
| Expressions | Evaluate করলে Value তৈরি হয় |
| Comments | কোডের ব্যাখ্যা |
| `//` | Single-Line Comment |
| `/* ... */` | Multi-Line Comment |
| Case Sensitivity | `name` ও `Name` আলাদা |
| Semicolons | Statement-এর সমাপ্তি স্পষ্ট করে |
| Whitespace | কোডকে Readable করে |
| Identifiers | Variable, Function ইত্যাদির নাম |
| Keywords | নির্দিষ্ট অর্থযুক্ত ভাষাগত শব্দ |
| Reserved Words | সাধারণ Identifier হিসেবে ব্যবহারে সীমাবদ্ধ শব্দ |
| `"use strict"` | JavaScript-এর কিছু কঠোর নিয়ম সক্রিয় করে |
| Code Blocks | `{}`-এর মধ্যে Statements |
| Errors | Syntax, Runtime ও Logical সমস্যা |
| Clean Code | Readable, Maintainable ও Consistent Code |

## শেখার সঠিক ক্রম

এই ১৫টি বিষয় ভালোভাবে শেখার পর নিচের ক্রমে এগিয়ে যাওয়া ভালো:

1. **Variables:** `var`, `let`, `const`
2. **Data Types:** String, Number, Boolean, Undefined, Null, Symbol, BigInt, Object
3. **Type Conversion এবং Type Coercion**
4. **Operators:** Arithmetic, Comparison, Logical, Assignment
5. **Conditional Statements:** `if`, `else`, `switch`
6. **Loops:** `for`, `while`, `do...while`
7. **Functions:** Declaration, Expression, Arrow Function
8. **Scope:** Global, Function, Block Scope
9. **Arrays এবং Objects**
10. **Modern JavaScript (ES6+)**

**পরামর্শ:** প্রতিটি Topic শেখার সময় শুধু কোড পড়বে না—নিজে লিখবে, Output অনুমান করবে, তারপর Browser Console বা Node.js-এ চালিয়ে যাচাই করবে। এভাবে অনুশীলন করলে JavaScript-এর ভিত্তি অনেক শক্ত হবে।