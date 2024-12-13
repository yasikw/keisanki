import React from 'react';

interface DisplayProps {
  value: string;
  expression: string;
}

export function Display({ value, expression }: DisplayProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl w-full mb-4">
      <div className="text-gray-500 text-right h-6 mb-1 font-mono">
        {expression || '\u00A0'}
      </div>
      <div className="text-4xl text-right font-mono tracking-wider">
        {value || '0'}
      </div>
    </div>
  );
}