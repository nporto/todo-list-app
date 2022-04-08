import { Box, Text } from '@chakra-ui/react'
import { SettingsIcon, CheckCircleIcon, DeleteIcon } from '@chakra-ui/icons'

function ExplanationModal(props) {

  return (
        <Box display="flex" flexDirection="column" color="black" height="auto" width="300px" p={2} borderRadius="0.7rem" backgroundColor="white" position="absolute" bottom="50px" right="1px">
              <Text maxWidth="100%">Click <SettingsIcon color="yellow.500" /> to change the color of the task</Text>
              <Text maxWidth="100%">Click <CheckCircleIcon color="green.500" /> to mark the task as completed</Text>
              <Text maxWidth="100%">Click <DeleteIcon color="orange.500" /> to delete the task</Text>
        </Box>
  )
}

export default ExplanationModal