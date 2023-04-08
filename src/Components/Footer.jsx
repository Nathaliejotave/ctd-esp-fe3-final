import React, { useContext } from 'react'
import ContextGlobal, {useContextGlobal} from '../utils/global.context'


const Footer = () => {
const {state} = useContextGlobal(ContextGlobal)
const {theme} = state;

  return (
    <footer>
        <p>Powered by</p>
        <img src={`${process.env.PUBLIC_URL}./img/DH.png`} alt='DH-logo' />
    </footer>
  )
}

export default Footer
