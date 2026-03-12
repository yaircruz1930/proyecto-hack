// ══════════════════════════════════════════════
//  src/contexts/AuthContext.tsx — Proveedor mínimo (sin login)
// ══════════════════════════════════════════════

"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { UserProfile } from "@/types";

interface AuthContextValue {
  user: UserProfile | null;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <AuthContext.Provider value={{ user: null }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth debe usarse dentro de <AuthProvider>");
  }
  return ctx;
}
