import SingUpForm from "../../sing-up-form/sign-up-form.component";
import SingInForm from "../../sing-in-form/sign-in-form.component";

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="auth-container">
      <SingInForm />
      <SingUpForm />
    </div>
  );
};

export default Authentication;
