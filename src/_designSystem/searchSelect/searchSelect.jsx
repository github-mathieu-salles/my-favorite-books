import {useEffect, useRef, useState} from "react";

import clearIcon from "./assets/_ClearIcon.png";
import rightIcon from "./assets/_RightIcon.png";

import {capitalize} from "../../helpers/string.jsx";

import './searchSelect.scss';

export const SearchSelect = ({ options, value, onChange, placeholder, label, name }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef(null)

  const openDropDown = (value) => {
    setIsDropdownOpen(value)
    inputRef.current.focus()
  }

  const handleClick = (option) => {
    onChange(option)
    setInputValue('')
    setIsDropdownOpen(false)
  }

  const handleKeyUp = (e, option) => {
    if (e.key === 'Enter') {
      handleClick(option)
    }
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
        aria-label={label}
        name={name}
        type="text"
        value={capitalize(value) || inputValue}
        onFocus={() => openDropDown(!value)}
        onChange={handleInputChange}
        ref={inputRef}
      />
      <div className="SearchSelect-input-suffix">
        {Boolean(value)
          ? <img src={clearIcon} className="pointer" alt="clear value" tabIndex={0} width={20} height={20} onKeyUp={(e) => handleKeyUp(e, null)} onClick={() => handleClick(null)}/>
          : <img src={rightIcon} className="invisible-suffix" alt="" width={20} height={20} onClick={() => openDropDown(true)}/>
        }
      </div>

      {isDropdownOpen && (
        <div className="SearchSelect-dropdrown-container">
          <ul>
            {filteredOptions.map(option => (
              <li
                key={option}
                tabIndex={0}
                onClick={() => handleClick(option)}
                onKeyUp={(e) => handleKeyUp(e, option)}
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