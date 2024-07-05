import { Container, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import HeaderNavBar from "./components/layouts/HeaderNavBar";
import { Body } from "./components/Body";
import Gadgets from "./components/layouts/Gadgets";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalCSS>
      <Container fluid className="px-5 md:px-20">
        <HeaderNavBar />
        <Body />
        <Gadgets />
        <Footer />
      </Container>
    </MantineProvider>
  );
};

export default App;
