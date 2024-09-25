import { useState } from 'react';
import './Greeting.css'

function Greeting(){
  const [name, setName] = useState('');
  const change = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>Введите ваше имя:</h1>
      <input
        className='name_input'
        type="text"
        value={name}
        onChange={change}
        placeholder="  Ваше имя"
      />
      {name && <h2>Привет, {name}!</h2>}
    </div>
  );
};

export default Greeting;