
import { Group, Button, Image, Box, Title, Text, Grid, } from '@mantine/core';
import web from "../assets/images/image-web-3-desktop.jpg"

export const Body = () => {

  const textContent = [
    { title: 'Hydrogen VS Electric Cars', 
      body: 'Will hydrogen-fueled cars ever catch up to EVs?' 
    },

    { title: 'The Downsides of AI Artistry', 
      body: 'What are the possible adverse effects of on-demand AI image generation?' 
    },

    { title: 'Is VC Funding Drying Up?', 
      body: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.' 
    },
  ];

  return (
    
      <Grid span={12} my={40} px={18} gutter={40} grow>
        <Grid.Col Grid span={8.2}>
        <Image src={web} alt='web-3 desktop'/>
        <Grid mt={30}>
          <Grid.Col span={6}>
          <Title fw={700} c="hsl(240, 100%, 5%)" className='text-6xl'>The Bright Future of Web 3.0?</Title>
          </Grid.Col>
          <Grid.Col span={6}><Text size='sm' className='leading-6 tracking-wider'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise? </Text>
          <Button w={190} h={35} mt={30} color=" hsl(5, 85%, 63%)" c="hsl(240, 100%, 5%)" size="xs" radius="0" className='tracking-[4px] hover:text-[white] hover:bg-[hsl(5, 85%, 63%)]' >READ MORE</Button>
          
          </Grid.Col>
        </Grid>
        </Grid.Col>
        
        <Grid.Col span={3.6} bg="hsl(240, 100%, 5%)" px={20} mt={20} mb={35}>
           <Title c="hsl(35, 77%, 62%)">
            New
           </Title>
            
              {textContent.map((item, index) => (
                <Box key={index}>
                  <Title size="20px" fw={700} c="#fffdfa" mt={15} className='leading-10 hover:text-[hsl(35, 77%, 62%)]'>{item.title}</Title>
                  <Text fw={400} size='sm' c="#87879c" mb={28} className='leading-6'>{item.body}</Text>
                  { index !== textContent.length -1 && <hr className='opacity-35'/>}
                </Box>
              ))}
            
        </Grid.Col>
      </Grid>
    
  )
}
