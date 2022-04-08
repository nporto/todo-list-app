import { useState } from 'react'
import { Box, Text, Stack, Button } from '@chakra-ui/react'
import { SettingsIcon, CheckCircleIcon, DeleteIcon } from '@chakra-ui/icons'
import { useTaskMainContext } from '../contexts/TaskMainContext'
import UrgencyColorsModal from './UrgencyColorsModal'

function TaskBox(props) {

  const { handleDeleteClick } = useTaskMainContext()

  //const [locked, setLockedState] = useState(false)
  const [taskColor, setTaskColor] = useState("red.500")
  const [buttonsColor, setButtonsColor] = useState("orange.300")
  const [colorsModal, setColorsModal] = useState(false)

  const handleCheckedClick = (e) => {
    if (taskColor == "green.300") {
      setTaskColor("red.500")
      setButtonsColor("orange.300")
    } else {
      setTaskColor("green.300")
      setButtonsColor("blue.200")
    }
  }

  const handleSettingsClick = (e) => {
      setColorsModal(!colorsModal)
    }

  return (
    <Stack 
    backgroundColor={taskColor} 
    data-id={props.id}
    onClick={handleDeleteClick}
    borderRadius="0.4rem" 
    py="0.4rem" 
    pr="0.9rem" 
    pl="0.9rem" 
    width={{ base: '100%', md: '80%', lg: '80%' }} 
    display="flex" 
    direction="row" 
    alignItems="center" 
    spacing={3} 
    justifyContent="space-between">
      <Box maxWidth={{ base: '30%', md: '80%', lg: '85%' }}><Text fontWeight="bold" fontSize="xl">{props.text}</Text></Box>
      <Stack display="flex" direction="row" maxWidth="100%">
            <Button 
            onClick={handleSettingsClick} 
            maxW="0.5rem" 
            backgroundColor={buttonsColor}><SettingsIcon />{colorsModal && <UrgencyColorsModal setTaskColor={setTaskColor} />}</Button>
            <Button onClick={handleCheckedClick} maxW="0.5rem" backgroundColor={buttonsColor}><CheckCircleIcon /></Button>
            <Button onClick={handleDeleteClick} data-id={props.id} maxW="0.5rem" backgroundColor={buttonsColor}><DeleteIcon /></Button>
      </Stack>
    </Stack>
  )
}

export default TaskBox