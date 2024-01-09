import "./globals.css";

import ContactRibbon from "@/app/component/contact-ribbon";
import Navbar from "./component/navbar";
import Footer from "./component/footer";

export const metadata = {
  title: "Sivector",
  description: "semiconductor chip design and testing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContactRibbon />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
