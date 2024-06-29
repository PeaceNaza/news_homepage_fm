import { Container, Image, Anchor, Group, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Logo from "../../assets/images/logo.svg";
import classes from "../../Styles/HeaderNavBar.module.css";
import burger from "../../assets/images/icon-menu.svg"
import xIcom from "../../assets/images/icon-menu-close.svg"

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
    <Container fluid mt={{base: 10, md: 30}} className={classes.inner}>
      <Image src={Logo} w={{base: 50, md: 55}} ml={{base: -10, md: 2}} />
      <Box className={classes.links} visibleFrom="sm" >
        <Group justify="flex-end" gap={30} >
          {secondaryItems}
        </Group>
      </Box>
      <Image 
        src={burger}
        opened={opened}
        onClick={toggle}
        hiddenFrom="sm"
      />
      <Image 
        src={xIcom}
        opened={opened}
        onClick={toggle}
        hiddenFrom="sm"/>
    </Container>
  );
};

export default HeaderNavBar;
