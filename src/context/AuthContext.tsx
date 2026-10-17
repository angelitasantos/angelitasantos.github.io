import { createContext, useContext, useState, type ReactNode } from 'react';
import { demoAccessCredentials } from '../data/access';
import type { AuthSession, LoginFormData } from '../types';

const SESSION_STORAGE_KEY = 'angelita-portfolio-session';

interface AuthContextValue {
  session: AuthSession | null;
  isAuthenticated: boolean;
  login: (formData: LoginFormData) => boolean;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function getStoredSession(): AuthSession | null {
  const storedSession = sessionStorage.getItem(SESSION_STORAGE_KEY);

  if (!storedSession) {
    return null;
  }

  try {
    return JSON.parse(storedSession) as AuthSession;
  } catch {
    sessionStorage.removeItem(SESSION_STORAGE_KEY);
    return null;
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [session, setSession] = useState<AuthSession | null>(getStoredSession);

  function login(formData: LoginFormData): boolean {
    const isValidLogin =
      formData.username === demoAccessCredentials.username &&
      formData.password === demoAccessCredentials.password &&
      formData.token === demoAccessCredentials.token;

    if (!isValidLogin) {
      return false;
    }

    const newSession: AuthSession = {
      username: formData.username,
      authenticatedAt: new Date().toISOString(),
    };

    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(newSession));

    setSession(newSession);

    return true;
  }

  function logout(): void {
    sessionStorage.removeItem(SESSION_STORAGE_KEY);
    setSession(null);
  }

  return (
    <AuthContext.Provider
      value={{
        session,
        isAuthenticated: Boolean(session),
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider.');
  }

  return context;
}
