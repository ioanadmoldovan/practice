const str = 'hello, world';
const str2 = str.slice(2,9);//start at 2, stops at 9
console.log(str2);

const str3 = str.slice(6); //stops at the end
console.log(str3);

const tags = 'meat, ham, salami';
const tagsArray = tags.split(',');
console.log(tagsArray);


const string = "I'm hungry!";
console.log(string.repeat(10));
console.log(string.startsWith("I'm"));//boolean
console.log(string.startsWith("hun", 4));
console.log(string.endsWith("I'm"));
console.log(string.startsWith("hun", string.length-5));
console.log(string.includes('y'));

const youSay = 'hello';
if (youSay.startsWith("goodbye")) {
    const iSay = "goodbye";
    console.log(iSay);
} else {
    const iSay = "hello";
    console.log(iSay);
}