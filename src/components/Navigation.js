import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import {Link} from 'react-router-dom'
import {Navbar, NavItem, Icon} from 'react-materialize'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
import ContactPageIcon from '@mui/icons-material/ContactPage';
export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <Navbar className="menu" alignLinks="right"
    brand={<span className="brand-logo">Player Cards</span>}
    id='mobilde-nav'
    menuIcon={<Icon>menu</Icon>}>
      <ul>
        <li><Link className="icon" to='/'><HomeIcon/>Home</Link></li>
        <li><Link className="icon" to='/about'><InfoIcon/>About</Link></li>
        <li><Link className="icon" to='/news'><ArticleIcon/>News</Link></li>
        <li href='/contact'><Link className="icon" to='/contact'><ContactPageIcon/>Contact</Link></li>
      </ul>
    </Navbar>
  );
}
