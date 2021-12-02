import React from 'react';
import { FaBorderNone } from 'react-icons/fa';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';
import '/Users/abc/Desktop/WebDev/kg-pols/node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from '../Card';
import Girl from '../Cards/assets/girl.jpg';


const Navbar = () => {
    return <div>
            <Nav>
                <Bars />
                <NavBtn>
                <NavBtnLink className='btn btn-outline-dark' to='/'>Nomad Academy</NavBtnLink>
                </NavBtn>

                <NavMenu>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/courses' activeStyle>
                        Courses
                    </NavLink>
                    <NavLink to='/annual' activeStyle>
                        Annual Report
                    </NavLink>
                    <NavLink to='/team' activeStyle>
                        Teams
                    </NavLink>
                    <NavLink to='/blogs' activeStyle>
                        Blogs
                    </NavLink>
                    <NavLink to='/sign-up' activeStyle>
                        Sign Up
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
            

        </div>
    }

export default Navbar;