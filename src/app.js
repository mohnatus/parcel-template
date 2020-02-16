import hello from './js/components/hello';

const John = {
    name: "John",
    age: 28
};

console.log(hello(John));

setTimeout(() => {
    import('./js/components/bye')
        .then(mod => mod.default)
        .then(bye => console.log(bye(John)));
}, 2000);
