import React from 'react'
import { pageLinks } from '../data'

const PageLinks = ({parentClass, itemClass, onClick}) => {
  return (
    <ul className={parentClass} id='nav_links'>
          {pageLinks.map((link) =>{
            return (
              <li key={link.id}>
                <a href={link.href} className={itemClass} onClick={onClick}>
                  {link.text}
                </a>
              </li>
            )
          })}
        </ul>
  )
}

export default PageLinks
