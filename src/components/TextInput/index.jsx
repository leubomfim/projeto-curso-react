import './styles.css'

export const TextInput = ({inputValue, actionFn, type, placeholder}) => (
    <input 
    value={inputValue}
    onChange={actionFn}
    type={type}
    placeholder={placeholder} 
  />
)