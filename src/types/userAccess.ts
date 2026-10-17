export interface DemoAccessCredentials {
  username: string;
  password: string;
  token: string;
}

export interface AuthSession {
  username: string;
  authenticatedAt: string;
  expiresAt?: string;
}

export interface LoginFormData {
  username: string;
  password: string;
  token: string;
}
