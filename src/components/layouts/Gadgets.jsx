import { Grid, Title, Image, Text } from "@mantine/core";
import laptop from "../../assets/images/image-top-laptops.jpg";
import retro from "../../assets/images/image-retro-pcs.jpg";
import game from "../../assets/images/image-gaming-growth.jpg";

const Gadgets = () => {
  const gadgetsContent = [
    {
      image: <Image src={retro} alt="retro-pcs" />,
      num: "01",
      title: "Reviving Retro PCs",
      text: "What happens when old PCs are given modern upgrades? ",
    },
    {
      image: <Image src={laptop} alt="top-laptops" />,
      num: "02",
      title: "Top 10 Laptops of 2022",
      text: "Our best picks for various needs and budgets.",
    },
    {
      image: <Image src={game} alt="gaming-growth" />,
      num: "03",
      title: "The Growth of Gaming",
      text: "How the pandemic has sparked fresh opportunities.",
    },
  ];

  return (
    <Grid span={12} ml={{md: "md"}}>
      {gadgetsContent.map((content, index) => (
        <Grid.Col key={index} span={{base: 12, lg: 4, md:6 }}>
          <Grid gutter={30}>
            <Grid.Col span={{base: 4, md: 3, lg: 3.7, xs: 2.7 }}>{content.image}</Grid.Col>
            <Grid.Col span={{base: 8, md: 7, xs: 5.5 }}>
              <Title fw={700} size={25} c="#F15E50" className="leading-6">
                {content.num}
              </Title>
              <Text fw={800} c="#00001A" className="leading-10 mt-1">
                {content.title}
              </Text>
              <Text size="sm" className="leading-6">
                {content.text}
              </Text>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default Gadgets;
