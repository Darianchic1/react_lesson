import { useState } from 'react';


function UserInfo() {
  const [age, setAge] = useState(30); 
  const name = "Иван"; 

  const changeAge = () => {
    const randomAge = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
    setAge(randomAge);
  };

  return (
    <div style={{ margin: '20px', border: '1px solid #ccc', padding: '10px' }}>
      <h2>Информация о пользователе</h2>
      <p>Имя: {name}</p>
      <p>Возраст: {age}</p>
      <button onClick={changeAge}>Сменить возраст</button>
    </div>
  );
}

export default UserInfo