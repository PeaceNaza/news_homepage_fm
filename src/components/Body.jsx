import { Image, Box, Title, Text, Grid } from "@mantine/core";
import web from "../assets/images/image-web-3-desktop.jpg";
import webMobile from "../assets/images/image-web-3-mobile.jpg";

export const Body = () => {
  const textContent = [
    { title: "Hydrogen VS Electric Cars", body: "Will hydrogen-fueled cars ever catch up to EVs?" },

    {
      title: "The Downsides of AI Artistry",
      body: "What are the possible adverse effects of on-demand AI image generation?",
    },

    {
      title: "Is VC Funding Drying Up?",
      body: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];

  return (
    <Grid span={12} my={{ base: 10, md: 20 }} px={{ md: 18 }} gutter={40} grow>
      <Grid.Col Grid span={{ base: 12, md: 8, xs: 9 }}>
        <Image src={web} alt="web-3 desktop" className="md:block xs:hidden" />
        <Image src={webMobile} alt="web-3 mobile" className="md:hidden" />
        <Grid mt={30}>
          <Grid.Col span={{ base: 10, md: 6, xs: 9 }}>
            <Title fw={700} c="hsl(240, 100%, 5%)" className="sm:text-6xl xs:text-4xl">
              The Bright Future of Web 3.0?
            </Title>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, xs: 10 }}>
            <Text size="sm" fw={500} className="leading-6 tracking-wider">
              We dive into the next evolution of the web that claims to put the power of the
              platforms back into the hands of the people. But is it really fulfilling its promise?{" "}
            </Text>
            <button className="tracking-[4px] w-[186px] h-10 mt-8 bg-[#F15E50] text-[#00001A] font-extrabold hover:text-[white] hover:bg-[#00001A] text-xs">
              READ MORE
            </button>
          </Grid.Col>
        </Grid>
      </Grid.Col>

      <Grid.Col span={3.5} bg="hsl(240, 100%, 5%)" mx={{ base: 17, md: 2 }} px={20} mt={20} mb={35}>
        <Title c="#E9AB53">New</Title>

        {textContent.map((item, index) => (
          <Box key={index}>
            <Title
              size="20px"
              fw={700}
              mt={15}
              className="leading-10 text-[#fffdfa] hover:text-[#E9AB53] cursor-pointer"
            >
              {item.title}
            </Title>
            <Text fw={400} size="sm" c="#87879c" mb={28} className="leading-6 ">
              {item.body}
            </Text>
            {index !== textContent.length - 1 && <hr className="opacity-35" />}
          </Box>
        ))}
      </Grid.Col>
    </Grid>
  );
};
