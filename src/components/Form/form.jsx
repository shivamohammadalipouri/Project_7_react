import React, { useState } from "react";

import "./Form.css";

const Formcomponent = () => {


  const [userNameValue, setUserNameValue] = useState("");
  const [passValue, setPassValue] = useState("");

  function clear() {
    setUserNameValue("");
    setPassValue("");
  }

  return (
    <div className="header-form">

      <button onClick={clear}>clear</button>

      <form onSubmit={(e) => { e.preventDefault(); console.log(userNameValue, passValue) }}>
        <input
          type="text"
          placeholder="نام کاربری"
          style={{ marginTop: "10px" }}
          value={userNameValue}
          onChange={(e) => setUserNameValue(e.target.value)}
        />

        <input
          type="password"
          placeholder="رمز عبور"
          value={passValue}
          onChange={(e) => setPassValue(e.target.value)}
        />

        <button>ورود به بخش مدیریت وبلاگ</button>
        <a href="#">کلمه عبور خود را فراموش کردم</a>
      </form>
      
    </div>
  );
};

export default Formcomponent;
