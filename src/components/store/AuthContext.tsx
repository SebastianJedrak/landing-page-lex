import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    const storedState = sessionStorage.getItem("isLoggedIn");
    return storedState ? JSON.parse(storedState) : false;
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    sessionStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Validation
      if (email.split("@").length !== 2) {
        throw new Error("Invalid email format");
      }
      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters long.");
      }

      setIsLoggedIn(true);

      return true;
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = (): void => {
    setIsLoggedIn(false);
    sessionStorage.removeItem("isLoggedIn");
  };

  const value: AuthContextType = {
    isLoggedIn,
    isLoading,
    error,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
