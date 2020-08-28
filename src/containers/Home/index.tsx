import React, { useState } from "react";
import Headline from "../../components/Headline";
import Button from "../../components/Button";
import Input from "../../components/Input";
import "../../App.css";
import logo from "../../logo.svg";

const Home = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([] as string[]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    if (value) setList(list.concat(value));

    setValue("");

    event.preventDefault();
  };

  const handleDelete = (value) => {
    setList(list.filter((item) => item !== value));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Headline title={"TODO Task App"} />
        <Input value={value} onChange={handleChange} />
        <br />
        <Button label={"Add"} type={"submit"} onClick={handleSubmit} />
        <br />
        <ul>
          {list.map((item) => (
            <li>
              {item}
              <Button
                label={"Delete"}
                type={"button"}
                onClick={() => handleDelete(item)}
              />
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default Home;
