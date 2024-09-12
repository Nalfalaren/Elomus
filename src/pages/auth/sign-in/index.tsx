import { useNavigate } from 'react-router-dom';

import Button from '@/components/base/Button';
import Input from '@/components/base/Input';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/', { replace: true });
  };
  return (
    <div>
      <div>
        <Input placeholder="Your email" autoFocus />
      </div>

      <div>
        <Input placeholder="Your password" />
      </div>

      <Button onClick={() => handleLogin()} variant="primary">
        Sign in
      </Button>
    </div>
  );
}
export default Login;
