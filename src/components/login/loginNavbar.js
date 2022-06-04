import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'


const Nav2 = () => {
      return (
            <Navbar  style={{backgroundColor:'#282828'}}  className="py-1 justify-content-center" >
                  <Nav >
                        < li class="nav-item" style={{ textIndent: '60px' }}>
                              <a style={{color:'white'}} class="nav-link active" aria-current="page" href='/landing'><strong>Home</strong></a>
                        </li>
                        < li class="nav-item" style={{ textIndent: '60px' }}>
                              <a style={{color:'white'}} class="nav-link active" aria-current="page" href='/login'><strong>Login</strong></a>
                        </li>
                        < li class="nav-item" style={{ textIndent: '60px' }}>
                              <a style={{color:'white'}} class="nav-link active" aria-current="page" href='/register'><strong>Register</strong></a>
                        </li>

                  </Nav>
            </Navbar >
      )
}

export default Nav2
