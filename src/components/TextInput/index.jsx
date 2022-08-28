import './styles.css'

export const TextInput = ({inputValue, handleChange, type, placeholder}) => (
    <input 
    value={inputValue}
    onChange={handleChange}
    type={type}
    placeholder={placeholder} 
  />
)