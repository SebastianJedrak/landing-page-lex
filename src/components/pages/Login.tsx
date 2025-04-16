import Button from "../UI/Button";
import Card from "../UI/Card";
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
        
        <div className="login-page__content">
          <Card>
            <h3>Sign Up Now</h3>
            <form>
              <Input />
              <Input />
            </form>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Login;
