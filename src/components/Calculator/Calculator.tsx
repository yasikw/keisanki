import React, { useState } from 'react';
import { Display } from './Display';
import { Button } from './Button';
import { evaluate } from '../../utils/calculator';

export function Calculator() {
  const [display, setDisplay] = useState('');
  const [expression, setExpression] = useState('');
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);

  const handleNumber = (num: string) => {
    if (shouldResetDisplay) {
      setDisplay(num);
      setShouldResetDisplay(false);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (op: string) => {
    setShouldResetDisplay(true);
    setExpression(display + ' ' + op);
  };

  const handleEqual = () => {
    if (expression && display) {
      const result = evaluate(expression + ' ' + display);
      setDisplay(result.toString());
      setExpression('');
      setShouldResetDisplay(true);
    }
  };

  const handleClear = () => {
    setDisplay('');
    setExpression('');
  };

  return (
    <div className="w-[320px] bg-white/20 backdrop-blur-md p-6 rounded-3xl shadow-xl">
      <Display value={display} expression={expression} />
      
      <div className="grid grid-cols-4 gap-3">
        <Button value="C" onClick={handleClear} variant="operator" />
        <Button value="±" onClick={() => setDisplay(display.startsWith('-') ? display.slice(1) : '-' + display)} variant="operator" />
        <Button value="%" onClick={() => setDisplay((parseFloat(display || '0') / 100).toString())} variant="operator" />
        <Button value="÷" onClick={() => handleOperator('÷')} variant="operator" />

        <Button value="7" onClick={handleNumber} />
        <Button value="8" onClick={handleNumber} />
        <Button value="9" onClick={handleNumber} />
        <Button value="×" onClick={() => handleOperator('×')} variant="operator" />

        <Button value="4" onClick={handleNumber} />
        <Button value="5" onClick={handleNumber} />
        <Button value="6" onClick={handleNumber} />
        <Button value="-" onClick={() => handleOperator('-')} variant="operator" />

        <Button value="1" onClick={handleNumber} />
        <Button value="2" onClick={handleNumber} />
        <Button value="3" onClick={handleNumber} />
        <Button value="+" onClick={() => handleOperator('+')} variant="operator" />

        <Button value="0" onClick={handleNumber} className="col-span-2" />
        <Button value="." onClick={handleNumber} />
        <Button value="=" onClick={handleEqual} variant="action" />
      </div>
    </div>
  );
}