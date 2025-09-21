'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface MockUser {
  uid: string;
  email: string;
  displayName: string;
}

interface AuthContextType {
  user: MockUser | null;
  loading: boolean;
  signOut: () => Promise<void>;
  signInWithGoogle: () => Promise<MockUser>;
  signInWithGoogleRedirect: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user] = useState<MockUser>({
    uid: 'demo-123',
    email: 'demo@example.com',
    displayName: 'Demo User'
  });
  const [loading] = useState(false);

  const signInWithGoogle = async () => user;
  const signInWithGoogleRedirect = async () => {};
  const signOut = async () => {};

  return (
    <AuthContext.Provider value={{ user, loading, signOut, signInWithGoogle, signInWithGoogleRedirect }}>
      {children}
    </AuthContext.Provider>
  );
};