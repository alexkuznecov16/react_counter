import React from 'react';
import './main.scss';

function App() {

  //* Создаём [переменная, меняющиеся при использовании функции] = (начальное число)
  let [count, getCount] = React.useState(0);

  //* По клику функция getCount прибавляет 1 к числу
  const onClickPlus = () => {
    getCount(count+1);
  }

  //* По клику функция getCount отнимает 1 у числа
  const onClickMinus = () => {
    getCount(count-1);
  }

  //* По клику функция getCount сбрасывается до нуля
  const onClickReset = () => {
    getCount(0);
  }

  return (
    <body>
      <div className="counter">
        <div className="counter__inner">
          <h2 className="counter__name">Counter:</h2>
          <h1 className="counter__num">{count}</h1>
          <div className="counter__buttons">
            <button onClick={onClickMinus} className='minus'>-</button>
            <button onClick={onClickReset} className="reset">Reset</button>
            <button onClick={onClickPlus} className='plus'>+</button>
          </div>
        </div>
      </div>
      <footer>
        &copy; Alexander Kuznecov 2023
      </footer>
    </body>
  );
}

export default App;