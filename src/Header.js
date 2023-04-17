import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <nav>
        <input type="checkbox" id="check"/>
        <label for="check"><i class="fas fa-bars"></i></label>
        <span><Link to="/"><i>Foodie Frenzy</i></Link></span>
        <ul>
            {/* <li><a href="#">Add Restaurant</a></li> */}
            <li><a href="/login">Sign In</a></li>
            <li><a href="/register">Sign Up</a></li>
            {/* <li id="mode">Dark Mode</li> */}
        </ul>
    </nav>
    )
  }
}

export default Header;