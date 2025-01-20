import "./globals.css";
import { TriggerProvider } from '@/context/TriggerContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <TriggerProvider>
        {children}
        </TriggerProvider>
      </body>
    </html>
  );
}
