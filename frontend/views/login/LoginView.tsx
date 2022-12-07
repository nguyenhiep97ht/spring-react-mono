import { useState } from 'react';
import { login as userLogin } from '../../auth';
import { LoginOverlay } from '@hilla/react-components/LoginOverlay.js';

export default function LoginView() {
  const [error, setError] = useState(false);
  // the url to redirect to after a successful login
  const [returnUrl, setReturnUrl] = useState('');

  const onSuccess = (result: any) => {
    // If a login redirect was initiated by opening a protected URL, the server knows where to go (result.redirectUrl).
    // If a login redirect was initiated by the client router, this.returnUrl knows where to go.
    // If login was opened directly, use the default URL provided by the server.
    // As we do not know if the target is a resource or a Hilla view or a Flow view, we cannot just use Router.go
    window.location.href = result.redirectUrl || returnUrl || result.defaultUrl || '/';
  };

  const login = async (event: any) => {
    setError(false);
    // use the login helper method from auth.ts, which in turn uses
    // Vaadin provided login helper method to obtain the LoginResult
    const result = await userLogin(event.detail.username, event?.detail?.password);
    setError(result.error);

    if (!result.error) {
      onSuccess(result);
    }

    return result;
  };

  const onAfterEnter = (location: any) => {
    setReturnUrl(location.redirectFrom);
  };

  return <LoginOverlay opened error={error} onLogin={login} />;
}
