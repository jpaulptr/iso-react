import React from 'react'
import { Link } from 'react-router-dom';

 const footer = () => (
     <footer>
         <list>
             <li><Link to={'/about/'}>About</Link></li>
             <li><Link to={'/contact/'}>Contact</Link></li>
         </list>
     </footer>
)

module.exports = footer;
