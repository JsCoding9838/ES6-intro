const priya     = 'Asif Akbar';
const meye      = "meye tumi ki dukkho chino";
const Kobita    = `Kobita tumi sopno charini`;
const multiLine = 'This is my first line. \n' + 
'this is my  second line. \n' + 
'third line text here \n' + 
'fourth line text here';

const multiLineNew = `this is multiline
this is second line 
this is third line 
fourth line
`;
// console.log(multiLineNew);

const friends = ['abul', 'babul', 'kabul', 'sabul'];
const count   = 5;
const old     = '<h3 class="friend-name">Friend-5</h3>';
const old2    = '<h3 class="friend-name">Friend-'+ count +'</h3>';
const old0    = `<h3 class="friend-name">Friend-${count}</h3>`;
const new1    = `<h3 class="friend-name">Friend-${friends.length}</h3>`;

const first   = 'Mamun';
const last    = 'Chowdhury';
const fullOld = first + ' ' + last;
const fullNew = `This Person Name is: ${first} ${last}. Has money ${(friends.length + 10) * 500}. He lives is Dhaka`;

console.log(fullNew);