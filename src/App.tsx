import { useRef, useState } from 'react';
import './App.css';

export const sum = (a: number, b: number) => {
  return a + b;
};

export const minus = (a: number, b: number) => {
  return a - b;
};

export const multiply = (a: number, b: number) => {
  return a * b;
};

export const divide = (a: number, b: number) => {
  return a / b;
};

const App = () => {
  const num1Ref = useRef<number>(0);
  const num1 = num1Ref.current;

  const num2Ref = useRef<number>(0);
  const num2 = num2Ref.current;

  const [result, setResult] = useState<number | null>(null);
  const handleCalculation = (
    operation: (a: number, b: number) => number,
    a: number,
    b: number
  ) => {
    const result = operation(a, b);

    setResult(result);
  };

  return (
    <div>
      <div>
        <input
          type="number"
          defaultValue={0}
          onChange={(e) => (num1Ref.current = Number(e.target.value))}
          placeholder="첫 번째 숫자"
        />
        <input
          type="number"
          defaultValue={0}
          onChange={(e) => (num2Ref.current = Number(e.target.value))}
          placeholder="두 번째 숫자"
        />
      </div>
      <button onClick={() => handleCalculation(sum, num1, num2)}>더하기</button>
      <button onClick={() => handleCalculation(minus, num1, num2)}>빼기</button>
      <button onClick={() => handleCalculation(multiply, num1, num2)}>
        곱하기
      </button>
      <button onClick={() => handleCalculation(divide, num1, num2)}>
        나누기
      </button>
      <p>결과 : {result}</p>
    </div>
  );
};

export default App;
