import { ReactNode } from 'react';
import LanguageProvider from './language';

export default function ContextsProvider({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  )
}
