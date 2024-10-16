import React, { useState } from 'react';
import { MenuItemsCom } from './MenuItemsCom';
import './Dropdown.css';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

function DropdownCom({closeMobileMenu}) {
  const [click, setClick] = useState(false);
 
  
  const handleClick = () => setClick(!click);

  return (
    <AnimatePresence>
    
    <motion.div 
    initial={{opacity:0, y:15}}
    animate={{opacity:1, y:0}}
    exit={{opacity:0, y:15}}
    style={{
      marginTop:-60
    }}
    >
      <ul
        onClick={handleClick && closeMobileMenu}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItemsCom.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.div>
    </AnimatePresence>
  );
}

export default DropdownCom;