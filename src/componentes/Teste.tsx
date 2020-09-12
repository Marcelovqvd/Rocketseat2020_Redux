import React, { useState } from 'react';

const Teste = () => {
  const [count, setCount] = useState(0);

  function soma() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={soma}>Somar</button>
      {count}
    </div>
  )
}

export default Teste;