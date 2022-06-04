import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'


const Nav1 = () => {
      return (
            <Navbar  style={{backgroundColor:'#282828'}}  className="py-1 justify-content-center" >
                  <Nav >
                        < li class="nav-item" >
                              <a style={{color:'white'}} class="nav-link active" aria-current="page" href='/studentRegister'><strong>HOME</strong> </a>
                        </li>
                        < li class="nav-item" style={{ textIndent: '60px' }}>
                              <a style={{color:'white'}} class="nav-link active" aria-current="page" href='/allusers'><strong>USERS</strong></a>
                        </li>
                        < li class="nav-item" style={{ textIndent: '60px' }}>
                              <a style={{color:'white'}} class="nav-link active" aria-current="page" href='/allmarkings'><strong>MARKINGS</strong></a>
                        </li>
                        < li class="nav-item" style={{ textIndent: '60px' }}>
                              <a style={{color:'white'}} class="nav-link active" aria-current="page" href='/allsubtypes'><strong>SUBMISSIONS</strong></a>
                        </li>


                  </Nav>
            </Navbar >
      )
}

export default Nav1
