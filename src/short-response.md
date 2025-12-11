# Short Responses

For this assessment, aim to write a response with the following qualities:
- [ ] Addresses all parts of the prompt
- [ ] Accurately uses relevant technical terminology
- [ ] Is free of grammar and spelling mistakes
- [ ] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Consider the code below which has a bug. Instead of printing the correct letter grade, it always prints `"Your grade is: undefined"`.

```js
const getLetterGrade = (score) => {
  let letter;
  if (score >= 90) {
    let letter = "A";
  } else if (score >= 80) {
    let letter = "B";
  } else if (score >= 70) {
    let letter = "C";
  } else {
    let letter = "F";
  }

  return "Your grade is: " + letter;
}

console.log(getLetterGrade(95)); // This should print "Your grade is: A"
console.log(getLetterGrade(82)); // This should print "Your grade is: B"
console.log(getLetterGrade(74)); // This should print "Your grade is: C"
console.log(getLetterGrade(65)); // This should print "Your grade is: F"
```

**Part A**: Explain why this bug is occurring. Use proper technical terminology.

**Part B**: Then, explain how you would fix it.

### Response 1

**Part A:**

This bug is occurring because they are creating the same variables again and again in the if statement which the computer can't receive because it is in the if statement scope. So the `letter` variable never gets reassigned to a value. This is why we get `undefined`

**Part B:**

The way to fix this is just to remove the let keyword in the if statements. This would make the variable `letter` outside of the if scope change and the return would refer to the only variable `letter` that is now reassigned to which ever statement is correct. 

---

## Prompt 2

Read the following code:

```js
const originalSettings = { volume: 50, brightness: 80 };
const newSettings = originalSettings;
newSettings.volume = 75;
console.log(originalSettings.volume);
```

**Part A:** What will be logged to the console? Why does this happen? Be sure to use precise technical terminology in your answer.

**Part B:** How would you modify the code so that changing `newSettings.volume` does NOT affect `originalSettings.volume`? Write the corrected code below your explanation.

### Response 2

**Part A:**

`75` will be logged to the console. This is because newSettings is holding originalSettings, or referring to `originalSettings` so when you run `newSettings.volume = 75` you are actually changing `originalSettings` volume to 75. Thus when you `console.log(originalSettings.volume)` you will get 75 and not 50.

**Part B:**

The way to modify the code so that changing `newSettings.volume` does Not affect `originalSettings.volume` is just to use the spread operator on the `newSettings` variable, so it would just look like this `{...originalSettings}`.

**Corrected Code:**

```js
// Fix this code so newSettings is a true copy
const originalSettings = { volume: 50, brightness: 80 };
const newSettings = originalSettings;
newSettings.volume = 75;
console.log(originalSettings.volume);
```

---

## Prompt 3

Given this array of products and the code using `filter`:
```js
const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 700, inStock: false },
  { name: "Watch", price: 300, inStock: true },
  { name: "Tablet", price: 500, inStock: true },
];

const itemsInStock = products.filter((product) => {
  return product.inStock
});
```

Walk through what happens in the first iteration of filter:
- What is the value of `product`?
- What gets returned from the callback?
- What happens with that returned value?

### Response 3

- The value of `product` is just each element, in the array, which in this case is each object in the array. 
- What gets returned from the callback is every object in the array that has the `inStock` value set to `true` this is because in the `filter` method has the `return` value of `product.inStock` which by default is going to check if it is set to `true`.
- The `returned` value will just be stored in `itemsInStock` and if you `console.log(itemsInStock)` then you will receive all the objects with the `inStock` value set to `true` 
