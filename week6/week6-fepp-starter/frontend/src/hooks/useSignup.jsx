import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useSignup = function (setIsAuthenticated) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (password === password2) {
      try {
        const response = await fetch("/api/users/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const user = await response.json();
          sessionStorage.setItem("user", JSON.stringify(user));
          console.log("User signed up successfully!");
          setIsAuthenticated(true);
          navigate("/");
        } else {
          console.error("Signup failed", response);
        }
      } catch (error) {
        console.error("Error during signup:", error);
      }
    }
    else {
      console.error("Passwords have to match!")
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    password2,
    setPassword2,
    handleSignup,
  };
};

export default useSignup;