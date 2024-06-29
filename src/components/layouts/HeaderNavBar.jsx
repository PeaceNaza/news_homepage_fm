import { Container, Image, Anchor, Group, Burger, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Logo from "../../assets/images/logo.svg";
import classes from "../../Styles/HeaderNavBar.module.css";

const userLinks = [
  { link: "#", label: "Home" },
  { link: "#", label: "New" },
  { link: "#", label: "Popular" },
  { link: "#", label: "Trending" },
  { link: "#", label: "Categories" },
];

const HeaderNavBar = () => {
  const [opened, { toggle }] = useDisclosure(false);

  const secondaryItems = userLinks.map((item) => (
    <Anchor
      href={item.link}
      key={item.label}
      onClick={(event) => event.preventDefault()}
      className={classes.secondaryLink}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <Container fluid mt={50} className={classes.inner}>
      <Image src={Logo} />
      <Box className={classes.links} visibleFrom="sm">
        <Group justify="flex-end" gap={30}>
          {secondaryItems}
        </Group>
      </Box>
      <Burger
        opened={opened}
        onClick={toggle}
        className={classes.burger}
        size="sm"
        hiddenFrom="sm"
      />
    </Container>
  );
};

export default HeaderNavBar;
