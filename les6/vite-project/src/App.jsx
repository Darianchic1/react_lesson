import { useState } from "react";
import UserInfo from "./UserInfo/UserInfo";
import Timer from "./Timer/Timer";

const App = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [showUserInfo, setShowUserInfo] = useState(true);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setGreet(true);
    setName("");
  };

  return (
    <div>
      <h1>Введите ваше имя</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          placeholder="Ваше имя"
        />
        <button type="submit">Приветствовать</button>
      </form>
      <h2>Привет, {name}</h2>

      <div>
        <h1>Счетчик: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Увеличить</button>
        <button onClick={() => setCount(count - 1)}>Уменьшить</button>
        <button onClick={() => setCount(0)}>Сбросить</button>
      </div>

      <div>

        <button onClick={() => setShowUserInfo(!showUserInfo)}>
          {showUserInfo ? "Скрыть" : "Показать"} информацию о пользователе
        </button>

        {showUserInfo && <UserInfo />}
      </div>
      <Timer/>
    </div>
  );
};

export default App;
