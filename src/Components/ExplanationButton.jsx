import { useState } from 'react'
import { Button } from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'
import ExplanationModal from './ExplanationModal'

function ExplanationButton(props) {

  const [explanationModalState, setExplanationModalState] = useState(false)

  const handleExplanationButtonClick = () => {
      setExplanationModalState(!explanationModalState)
  }

  return (
        <Button onClick={handleExplanationButtonClick} backgroundColor="whiteAlpha.200" position="absolute" bottom="20px" right="20px">
              <InfoIcon />
              {explanationModalState && <ExplanationModal />}
        </Button>
  )
}

export default ExplanationButton