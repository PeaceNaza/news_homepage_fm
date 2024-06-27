import { Grid, Title, Image, Text } from '@mantine/core';
import laptop from "../../assets/images/image-top-laptops.jpg"
import retro from "../../assets/images/image-retro-pcs.jpg"
import game from "../../assets/images/image-gaming-growth.jpg"

const Gadgets = () => {
  const gadgetsContent = [
    {
      image: <Image src={retro} alt='retro-pcs' />,
      num : "01",
      title: "Reviving Retro PCs",
      text: "What happens when old PCs are given modern upgrades? ",
    }, 
    {
      image: <Image src={laptop} alt='top-laptops' />,
      num : "02",
      title: "Top 10 Laptops of 2022",
      text: "Our best picks for various needs and budgets.",
    },
    {
      image: <Image src={game} alt='gaming-growth' />,
      num : "03",
      title: "The Growth of Gaming",
      text: "How the pandemic has sparked fresh opportunities.",
    }
  ]

  return (
    
    <Grid span={12}> 
        {gadgetsContent.map((content, index) => (   
          <Grid.Col key={index} span={4}>
          <Grid>

            <Grid.Col span={4}>
              {content.image},
            </Grid.Col>
            <Grid.Col span={7}>
             <Title>{content.num}</Title> 
             <Text fw={700} className='leading-6'>{content.title}</Text> 
             <Text size='sm'>{content.text}</Text> 
            
            </Grid.Col>

            

            </Grid>
            </Grid.Col>
         
        ))}
            
            
           
            </Grid>
     
    
  )
}

export default Gadgets