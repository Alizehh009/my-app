// src/app/layout.jsx
import './globals.css';
import ClientLayout from './ClientLayout';

export const metadata = {
  title: 'Supply Chain Dashboard',
  description: 'A supply chain dashboard built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
