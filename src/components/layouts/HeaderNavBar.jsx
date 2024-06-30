import { Container, Grid, Text, Image, Anchor, Group, Box, Overlay } from "@mantine/core";
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
  
  const primaryItems = userLinks.map((item) => (
    <Text
    href={item.link}
    key={item.label}
    className={classes.primaryItems}
    >
      {item.label}
    </Text>
  ));

  const secondaryItems = userLinks.map((item) => (
    <Anchor
      href={item.link}
      key={item.label}
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
       
      <>
      <Image src={opened ? xIcom : burger}
      onClick={toggle}
      style={{cursor: "pointer", position: "absolute", right: 20, top: 40, zIndex: 20, display: "block", width: 45, height: 20}}
    
      /> 
       
      {opened ?  (
      <Grid>
          <Image src={xIcom} style={{cursor: "pointer", position: "absolute", right: 20, top: 40, zIndex: 20, display: "block", width: 45, height: 20}}
          
           />
      <Overlay style={{position: "fixed", top: 0, left: 0, right: 0, width: '100%', height: '100%', display: "flex", alignItems: "", justifyContent: "center"}}> 
      
        <Box
        style={{display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", background: "white", zIndex: 20, padding: 20, width: "50vw" , borderRadius: "10px"}}
        >
          <Text>
            {primaryItems}
          </Text>
        </Box>
      </Overlay>
      </Grid>
      
      
      ) : null}
      </>
      
    </Container>
  );
};

export default HeaderNavBar;
