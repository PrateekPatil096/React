import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <h3 className={styles.logo}>gokuu</h3>
        <button className='btn'>login</button>
      
    </div>
  )
}

export default Header
