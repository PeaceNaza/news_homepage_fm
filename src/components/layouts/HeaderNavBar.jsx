import { Container, Text, Image, Anchor, Group, Box, Overlay } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Logo from "../../assets/images/logo.svg";
import classes from "../../Styles/HeaderNavBar.module.css";
import burger from "../../assets/images/icon-menu.svg";
import xIcom from "../../assets/images/icon-menu-close.svg";

const userLinks = [
  { link: "#", label: "Home" },
  { link: "#", label: "New" },
  { link: "#", label: "Popular" },
  { link: "#", label: "Trending" },
  { link: "#", label: "Categories" },
];

const HeaderNavBar = () => {
  const [opened, { toggle }] = useDisclosure(false);

  const primaryItems = userLinks.map((item) => (
    <Text href={item.link} key={item.label} className={classes.primaryItems}>
      {item.label}
    </Text>
  ));

  const secondaryItems = userLinks.map((item) => (
    <Anchor href={item.link} key={item.label} className={classes.secondaryLink}>
      {item.label}
    </Anchor>
  ));

  return (
    <Container fluid mt={{ base: 10, md: 30 }} className={classes.inner}>
      <Image src={Logo} w={{ base: 60, md: 55 }} ml={{ base: -10, md: 2 }} />
      <Box className={classes.links} visibleFrom="md">
        <Group justify="flex-end" gap={30}>
          {secondaryItems}
        </Group>
      </Box>

      {!opened && (
        <Image
          src={burger}
          onClick={toggle}
          hiddenFrom="md"
          alt="handburger menu icon"
          style={{ cursor: "pointer" }}
        />
      )}

      {opened && (
        <Image
          src={xIcom}
          alt="close menu icon"
          onClick={toggle}
          hiddenFrom="md"
          style={{
            cursor: "pointer",
            zIndex: 20,
            width: "30px",
            height: "32px",
            position: "fixed",
            top: "30px",
            right: "20px",
          }}
        />
      )}

      {opened && (
        <Overlay
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            width: "100%",
            height: "100%",
            zIndex: 10,
          }}
        >
          <Box
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "70%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              background: "white",
              zIndex: 20,
              padding: "20px",
            }}
          >
            {primaryItems}
          </Box>
        </Overlay>
      )}
    </Container>
  );
};

export default HeaderNavBar;
