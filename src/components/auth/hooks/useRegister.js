import { useState } from "react";

export const useRegister = () => {
  const initialRegisterData = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  };
  const [registerData, setRegisterData] = useState(initialRegisterData);

  const handleChangeRegisterData = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmitRegisterData = () => {
    console.log(registerData);
  };

  return { registerData, handleChangeRegisterData, handleSubmitRegisterData };
};
