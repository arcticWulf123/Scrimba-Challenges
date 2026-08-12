import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
import Header from "./header";
import MainContent from "./MainContent";
import Footer from "./Footer";

/**
 * Challenge: move the MainContent and Footer components to their own
 * separate files.
 */

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

root.render(<Page />);
