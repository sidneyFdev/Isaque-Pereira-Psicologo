import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "Isaque Melo - Psicoterapia",
  description: "Psicoterapia e Saúde Mental - Isaque Melo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
      >
        {children}
      </body>
    </html>
  );
}
