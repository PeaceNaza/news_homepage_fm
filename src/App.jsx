import { Container, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import HeaderNavBar from "./components/layouts/HeaderNavBar";
import { Body } from "./components/Body";
import Gadgets from "./components/layouts/Gadgets";

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalCSS>
      <Container fluid className="px-5 pb-20 md:px-20">
        <HeaderNavBar />
        <Body />
        <Gadgets />
      </Container>
    </MantineProvider>
  );
};

export default App;
