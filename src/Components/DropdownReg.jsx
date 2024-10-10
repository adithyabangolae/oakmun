import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuItemsReg } from './MenuItemsReg';

function DropdownReg() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <AnimatePresence>
    <motion.div 
      initial={{opacity: 0, y: 15}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: 15}}
      style={{ marginTop: -60 }}
    >
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItemsReg.map((item, index) => {
          return (
            <li key={index}>
              {item.external ? (
                
                <a
                  className={item.cName}
                  href={item.path}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={() => setClick(false)}
                >
                  {item.title}
                </a>
              ) : (
               
                <Link
                  className={item.cName}
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                  {item.title}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </motion.div>
  </AnimatePresence>
  );
}

export default DropdownReg;