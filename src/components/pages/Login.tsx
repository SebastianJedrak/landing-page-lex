import Button from "../UI/Button";
import Input from "../UI/Input";
import Navbar from "../UI/Navbar";
import "./Login.scss";

const Login: React.FC = () => {
  return (
    <div className="login-page">
      <Navbar />
      <main>
        <div className="login-page__content">
          <h2>Generate Awesome Web Pages</h2>
          <h5>
            The most important part of the Startup is the samples. The samples
            form a set of 25 usable pages you can use as is or you can add new
            blocks.
          </h5>
          <Button label="Learn More" />
        </div>

        <div className="login-page__content login-page__card">
          <h3>Sign Up Now</h3>
          <form>
            <Input label="Your email" />
            <Input label="Your password" />
            <Input label="I agree to the Terms of Service." type="checkbox" />
            <Button label="Sign In" />
          </form>
          <div>
            <hr />
            <span>or</span>
            <hr />
          </div>
          <Button label="Login via Twitter" />
          <span>
            Do you have an Account?<span> Sign In</span>
          </span>
        </div>
      </main>
    </div>
  );
};

export default Login;
