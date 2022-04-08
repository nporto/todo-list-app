import React, { useContext, useState, createContext } from 'react'
import useLocalStorage from '../Hooks/useLocalStorage'
import { v4 as uuidV4 } from 'uuid'

const TaskMainContext = createContext()

export function useTaskMainContext() {
     return useContext(TaskMainContext)
}

export const TaskMainProvider = ({ children }) => {

      const [inputValue, setInputValue] = useState("")
      const [categories, setCategory] = useLocalStorage("categories", [])

      const handleInputChange = (event) => {
            setInputValue(event.target.value)
      }

      const handleClearClick = () => {
            setInputValue("")
      }

      const shouldDisplayButton = inputValue.length > 0

      const handleAddClick = (event) => {
            const newCategory = {
            id: uuidV4(),
            text: inputValue,
            }

            setCategory([...categories].concat(newCategory))
            setInputValue("")
      }

      const handleKeyDown = (event) => {
            if (event.key === 'Enter' && inputValue.length >= 1) {
                  const newCategory = {
                        id: uuidV4(),
                        text: inputValue,
                        //state: taskState,
                        //color: taskColor
                  }
                  setCategory([...categories].concat(newCategory))
                  setInputValue("")
            }
      }

      const handleCheckedClick = (event) => {
            //const clickedCategory = categories.filter(category => category['id'] == event.target.dataset.id)[0]
            //const newCategory = clickedCategory.state
            //setCategory(categories.filter(category => category['id']))
      }

      const handleDeleteClick = (event) => {
            setCategory(categories.filter(category => category['id'] !== event.target.dataset.id))
          }

      return (
            <TaskMainContext.Provider value={{
                  handleInputChange,
                  handleClearClick,
                  handleAddClick,
                  handleKeyDown,
                  inputValue,
                  setInputValue,
                  //taskId,
                  //setTaskId,
                  categories,
                  setCategory,
                  shouldDisplayButton,
                  handleDeleteClick
            }}>
                  {children}
            </TaskMainContext.Provider>
      )
}