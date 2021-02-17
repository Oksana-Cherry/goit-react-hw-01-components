import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'modern-normalize/modern-normalize.css';
//import './index.css';
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*function randColor(elem) {
/*СОЗДАЕМ ПЕРЕМЕННЫЕ
elem - элемент которому будем менять задний фон
code_color - получаем элемент в который будет выводить код цвета
r,g,b - отвечают за кодировку и вместе выводят цвет
color - в нее записываем полную строку значения цвета
*/
           /* var element = document.querySelector(elem),
                code_color = document.querySelector('.code_color'),
                r = Math.floor(Math.random() * (256)),
                g = Math.floor(Math.random() * (256)),
                b = Math.floor(Math.random() * (256)),
                color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

            element.style.background = color;
            code_color.innerText = color;
        }
randColor(element);
    <div class="code_color">#ffffff</div>
    <button onclick="randColor('.example')">Нажми</button>*/

