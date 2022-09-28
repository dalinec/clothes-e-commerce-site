import SingUpForm from '../../sing-up-form/sign-up-form.component';
import SingInForm from '../../sing-in-form/sign-in-form.component';

import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SingInForm />
      <SingUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
