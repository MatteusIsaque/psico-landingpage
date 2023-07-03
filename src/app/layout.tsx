import Footer from "../../components/footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
