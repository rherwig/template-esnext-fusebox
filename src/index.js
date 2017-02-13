import Person from './core/person';

function sayHello(name = 'stranger') {
    console.info(`Hello ${name}`);
}

const person = new Person('Maximilian', 33);

export const test = {
    sayHello,
    classes: {
        Person
    }
};

global.test = test;