import { Box, Input, Button, Heading, Stack } from '@chakra-ui/react'
import TaskBox from './Components/TaskBoxLogic'
import { useTaskMainContext } from './contexts/TaskMainContext'
import ExplanationButton from './Components/ExplanationButton'

function App() {

  const { inputValue, handleAddClick, handleClearClick, handleInputChange, handleKeyDown, categories, shouldDisplayButton } = useTaskMainContext()

  return (
    <Box p={10} minHeight="100%">
      <Box w="100%" display="flex" justifyContent="center" marginBottom="1rem">
        <Heading fontSize="5xl">To Do List App</Heading>
      </Box>
      <Box display="flex" flexDirection="row" gap="1rem">
        <Input type="text" value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} placeholder="Enter category"></Input>
        {shouldDisplayButton && <Button type="submit" backgroundColor="whiteAlpha.200" onClick={handleAddClick}>Add</Button>}
      </Box>
      {shouldDisplayButton && <Button m={4} backgroundColor="whiteAlpha.200" onClick={handleClearClick}>Clear</Button>}
      <Stack marginTop={6} spacing={3} minW="100%" display="flex" justifyContent="center" alignItems="center">
            {categories.map((category) => <TaskBox key={category['id']} id={category['id']} text={category['text']}></TaskBox>)}
      </Stack>
      <ExplanationButton></ExplanationButton>
    </Box>
  )
}

export default App
