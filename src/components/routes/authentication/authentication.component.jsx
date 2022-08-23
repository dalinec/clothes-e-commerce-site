import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";

import SingUpForm from "../../sing-up-form/sign-up-form.component";
import SingInForm from "../../sing-in-form/sign-in-form.component";

const Authentication = () => {

  
  return (
    <div>
      <h1>Sing in Page</h1>
      <SingInForm />
      <SingUpForm />
    </div>
  );
};

export default Authentication;
