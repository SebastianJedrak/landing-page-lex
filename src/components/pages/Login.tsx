import Button from "../UI/Button";
import Input from "../UI/Input";
import Navbar from "../UI/Navbar";
import "./Login.scss";

const Login: React.FC = () => {
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
            <form>
              <Input label="Your email" autoFocus required />
              <Input label="Your password" required />
              <Input
                label="I agree to the Terms of Service."
                type="checkbox"
                required
              />
              <Button label="Sign In" variant="primary" fullWidth />
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
