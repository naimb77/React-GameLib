import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import styles from './ModeButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons'

const ModeButton = () => {
    const {mode, setMode} = useContext(ThemeContext)
    return (
    <div className={styles.modeToggle}>
        {mode === 'dark' ?
            <button onClick={() => {setMode('light')}}><FontAwesomeIcon icon={faSun} className={styles.modeIcon}/></button>
            :
            <button onClick={() => {setMode('dark')}}><FontAwesomeIcon icon={faMoon} className={styles.modeIcon}/></button>
        }
    </div>
)}

export default ModeButton