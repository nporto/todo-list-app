import { Grid, GridItem } from '@chakra-ui/react'

function UrgencyColorsModal({setTaskColor}) {

      const handleYellow500Click = (e) => {
            setTaskColor("yellow.500")
      }

      const handleOrange500Click = (e) => {
            setTaskColor("orange.500")
      }

      const handleRed500Click = (e) => {
            setTaskColor("red.500")
      }

      const handleYellow400Click = (e) => {
            setTaskColor("yellow.400")
      }

      const handlePurple400Click = (e) => {
            setTaskColor("purple.400")
      }

      const handlePurple500Click = (e) => {
            setTaskColor("purple.500")
      }

      const handleCyan300Click = (e) => {
            setTaskColor("cyan.300")
      }

      const handleBlue300Click = (e) => {
            setTaskColor("blue.300")
      }

      const handleBlue500Click = (e) => {
            setTaskColor("blue.500")
      }

      return (
      <Grid templateColumns="repeat(3, 1fr)" gap={2} height="100px" width="100px" p={1.5} borderRadius="0.7rem" backgroundColor="white" placeItems="center" position="absolute" bottom="40px">
            <GridItem onClick={handleYellow500Click} colSpan={1} height="1.4rem" width="1.4rem" backgroundColor="yellow.500" borderRadius="50%" cursor="pointer"></GridItem>
            <GridItem onClick={handleOrange500Click} colSpan={1} height="1.4rem" width="1.4rem" backgroundColor="orange.500" borderRadius="50%" cursor="pointer"></GridItem>
            <GridItem onClick={handleRed500Click} colSpan={1} height="1.4rem" width="1.4rem" backgroundColor="red.500" borderRadius="50%" cursor="pointer"></GridItem>
            <GridItem onClick={handleYellow400Click} colSpan={1} height="1.4rem" width="1.4rem" backgroundColor="yellow.400" borderRadius="50%" cursor="pointer"></GridItem>
            <GridItem onClick={handlePurple400Click} colSpan={1} height="1.4rem" width="1.4rem" backgroundColor="purple.400" borderRadius="50%" cursor="pointer"></GridItem>
            <GridItem onClick={handlePurple500Click} colSpan={1} height="1.4rem" width="1.4rem" backgroundColor="purple.500" borderRadius="50%" cursor="pointer"></GridItem>
            <GridItem onClick={handleCyan300Click} colSpan={1} height="1.4rem" width="1.4rem" backgroundColor="cyan.300" borderRadius="50%" cursor="pointer"></GridItem>
            <GridItem onClick={handleBlue300Click} colSpan={1} height="1.4rem" width="1.4rem" backgroundColor="blue.300" borderRadius="50%" cursor="pointer"></GridItem>
            <GridItem onClick={handleBlue500Click} colSpan={1} height="1.4rem" width="1.4rem" backgroundColor="blue.500" borderRadius="50%" cursor="pointer"></GridItem>
      </Grid>
      )
}

export default UrgencyColorsModal