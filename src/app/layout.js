import "./globals.css";

export const metadata = {
  title: "Isaque Melo - Psicoterapia",
  description: "Psicoterapia e Saúde Mental - Isaque Melo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
