import './globals.css';

export const metadata = {
  title: 'Supply Chain Dashboard',
  description: 'A supply chain dashboard built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}