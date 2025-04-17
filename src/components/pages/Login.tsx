import { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Navbar from "../UI/Navbar";
import "./Login.scss";
import { useAuth } from "../store/AuthContext";

const Login: React.FC = () => {
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");
  const [inputCheckbox, setInputCheckbox] = useState<boolean>(false);

  const { isLoggedIn, login } = useAuth();

  const handleInputChange = (value: string | boolean, type: string) => {
    switch (type) {
      case "email":
        setInputEmail(value as string);
        break;
      case "password":
        setInputPassword(value as string);
        break;
      case "checkbox":
        setInputCheckbox(value as boolean);
        break;
      default:
        break;
    }
  };

  const handleSubmit =  (event: React.FormEvent) => {
    event.preventDefault();
    login(inputEmail, inputPassword).then((result) => {
      if (result) {
        console.log("Login successful!");
      } else {
        console.log("Login failed.");
      }
    });
    
  };

  return (
    <div className="login-page">
      <Navbar />
      <main>
        <div className="login-page__content login-page__left">
          <h2>Generate Awesome Web Pages</h2>
          <h5>
            The most important part of the Startup is the samples. The samples
            form a set of 25 usable pages you can use as is or you can add new
            blocks.
          </h5>
          <Button label="Learn More" variant="tertiary" />
        </div>

        <div className="login-page__content login-page__card">
          <div className="login-page__card__container">
            <h3>Sign Up Now</h3>
            <form onSubmit={handleSubmit}>
              <Input
                value={inputEmail}
                label="Your email"
                type="email"
                autoFocus
                required
                onChange={handleInputChange}
              />
              <Input
                value={inputPassword}
                label="Your password"
                type="password"
                onChange={handleInputChange}
                required
              />
              <Input
                value={inputCheckbox}
                label="I agree to the Terms of Service."
                type="checkbox"
                onChange={handleInputChange}
                required
              />
              <Button label="Sign In" type="submit" variant="secondary" fullWidth />
            </form>
            <div className="or-divider">
              <hr />
              <span className="paragraph">or</span>
              <hr />
            </div>
            <Button label="Login via Twitter" variant="twitter" fullWidth />
            <div className="sign-in article">
              <span className="sign-in__span">Do you have an Account?</span>
              <span className="sign-in__link">Sign In</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
