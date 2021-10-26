import React, { useState } from "react";

import "./App.css";
import { Card } from "./Components/Card";
import { Input } from "./Components/Input";

interface UserProps {
  nome: string;
  hobby: string;
  age: number;
}

function App() {
  const [list, setList] = useState<UserProps[]>([]);
  const [nome, setNome] = useState<string>("");
  const [hobby, setHobby] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  const creatUser = (nome: string, hobby: string, age: number) => {
    const user = {
      nome,
      hobby,
      age,
    };
    setList([...list, user]);
  };

  return (
    <div className="App">
      <Input
        placeholder={"Nome"}
        type={"text"}
        onChange={(event) => setNome(event.target.value)}
      />
      <Input
        placeholder={"Hobby"}
        type={"text"}
        onChange={(event) => setHobby(event.target.value)}
      />
      <Input
        placeholder={"Idade"}
        type={"number"}
        onChange={(event) => setAge(Number(event.target.value))}
      />
      <button onClick={() => creatUser(nome, hobby, age)}>Cadastrar</button>

      <div className="list">
        {list.map((item, index) => (
          <li className="listItem" key={index}>
            <Card item={item} />
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
