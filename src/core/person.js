import isDecorated from '~/decorators/isDecorated';

@isDecorated
export default class Person {

    name = 'Stranger';

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getAge = async () => new Promise(resolve => resolve(this.age));

};