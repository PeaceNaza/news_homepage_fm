import { Container, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import HeaderNavBar from "./components/layouts/HeaderNavBar";
import { Body } from "./components/Body";
import Gadgets from "./components/layouts/Gadgets";

const App = () => {
  const customTheme = {
    breakpoints: {
      xs: 320,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  };

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
