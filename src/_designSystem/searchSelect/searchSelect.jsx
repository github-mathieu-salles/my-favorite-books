import {useEffect, useState} from "react";

import './searchSelect.scss';
import clearIcon from "./assets/_ClearIcon.png";
import rightIcon from "./assets/_RightIcon.png";

const capitalize = (string) => {
  if (!string) return ''
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const SearchSelect = ({ options, value, onChange, placeholder }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleClick = (option) => {
    onChange(option)
    setInputValue('')
    setIsDropdownOpen(false)
  }

  const handleInputChange = (e) => {
    if (value) return
    setInputValue(e.target.value)
  }

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.closest('.SearchSelect-container') === null) {
        setIsDropdownOpen(false)
      }
    }

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('click', handleOutsideClick)
    document.addEventListener('keyup', handleEscape)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
      document.addEventListener('keyup', handleEscape)
    }
  }, []);

  const filteredOptions = options.filter(option => option.toLowerCase().startsWith(inputValue.toLowerCase()))

  return (
    <div className={`SearchSelect-container ${isDropdownOpen ? 'SearchSelect-container--open' : ''}`}>
      <input
        placeholder={placeholder}
        type="text"
        value={capitalize(value) || inputValue}
        onFocus={() => setIsDropdownOpen(!value)}
        onChange={handleInputChange}
      />
      <div className="SearchSelect-input-suffix">
        {Boolean(value)
          ? <img src={clearIcon} className="pointer" alt="clear value" width={20} height={20} onClick={() => handleClick(null)}/>
          : <img src={rightIcon} className="invisible-suffix" alt="" width={20} height={20} onClick={() => setIsDropdownOpen(true)}/>
        }
      </div>

      {isDropdownOpen && (
        <div className="SearchSelect-dropdrown-container">
          <ul>
            {filteredOptions.map(option => (
              <li
                key={option}
                onClick={() => handleClick(option)}
              >
                  {capitalize(option)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}