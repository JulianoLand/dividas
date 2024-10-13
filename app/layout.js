import NavBar from "@/components/NavBar";
import "./globals.css";

export const metadata = {
  title: "CRUD",
  description: "Projeto para entender melhor sobre banco de dados",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <div className="max-w-3xl mx-auto p-4">
          <NavBar />
          <div className="mt-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
