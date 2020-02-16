import icon from './icons/thumb.svg';
import { Button } from './js/components/button';
import hello from './js/components/hello';
import './scss/app.scss';
import './scss/postcss.test.scss';



const img = new Image();
img.src = icon;
document.body.appendChild(img);



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

const button = Button("Click me!");
document.body.appendChild(button);
