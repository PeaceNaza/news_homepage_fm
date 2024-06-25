import { Box, MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalCSS>
     <div>
         <Box c="blue" className="text-center text-4xl mt-6">News Homepage</Box>
    </div>
 
    </MantineProvider>
     );
}

export default App;