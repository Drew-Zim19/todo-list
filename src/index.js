import toDate from 'date-fns/toDate';
import Task from './objects.js';

// const date = toDate(new Date(2014, 1, 11, 11, 30, 30));
// console.log(date);

let task1 = new Task('fred');
console.log(task1);
console.log(task1.title);
console.log(task1.priority);