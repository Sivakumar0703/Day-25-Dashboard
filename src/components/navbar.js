import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/js/dist/dropdown';
import React from 'react';
import { useHistory } from 'react-router-dom';






function Navbar() {

    const history = useHistory();


    return (
        
     
            <nav className='navbar col-12'>
                <div className='navbar-collapse'>

                    <ul className='navbar-nav'>

                        <li className='nav-item'>
                            <a href='#'>
                                <i className="bi bi-emoji-laughing-fill fs-4"></i>
                                <span>Admin</span></a>
                        </li>

                        <hr className='ruler' />

                        <li className='nav-item'>
                            <a href='#'>
                                <i className='bi bi-speedometer '></i>
                                <span onClick={()=> history.push('/')}>Dashboard</span></a>
                        </li>

                        <hr className='ruler' />


                        <li className='nav-item dropdown'>
                            <a href='#' className='interface'>INTERFACE</a>
                            <a href='#' className='nav-link  dropdown-toggle component' data-toggle='dropdown'>
                                <i className='bi bi-gear'></i>
                                <span>Component</span></a>

                            <div className='dropdown-menu'>
                                <a className='dropdown-item dummy-drop' href='#'>CUSTOM COMPONENTS:</a>
                                <a className='dropdown-item ' href='#' onClick={()=> history.push('/button')}>Buttons</a>
                                <a className='dropdown-item' href='#' onClick={()=> history.push('/card')}>Cards</a>
                        
                            </div>
                        </li>


                        <li className='nav-item'>
                            <a href='#' className='nav-link  dropdown-toggle component' data-toggle='dropdown'>
                                <i className="bi bi-wrench"></i>
                                <span>Utilities</span></a>

                                <div className='dropdown-menu'>
                                <a className='dropdown-item dummy-drop' href='#'>UTILITIES COMPONENTS:</a>
                                <a className='dropdown-item ' href='#' onClick={()=> history.push('/color')}>COLORS</a>
                                <a className='dropdown-item disabled' href='#'>BORDERS</a>
                                <a className='dropdown-item disabled' href='#'>ANIMATIONS</a>
                                <a className='dropdown-item disabled' href='#'>OTHERS</a>
                                </div>
                        </li>

                        <hr className='ruler' />

                        <li className='nav-item'>
                            <a href='#' className='addon'>ADDONS</a>
                            <a href='#' className='nav-link  dropdown-toggle component' data-toggle='dropdown'>
                                <i className="bi bi-folder-fill"></i>
                                <span>Pages</span></a>

                                <div className='dropdown-menu'>
                                <a className='dropdown-item dummy-drop' href='#'>LOGIN SREENS:</a>
                                <a className='dropdown-item ' href='#'onClick={()=> history.push('/login')}>Login</a>
                                <a className='dropdown-item disabled' href='#'>Register</a>
                                <a className='dropdown-item disabled' href='#'>Forgot Password</a>
                                <a className='dropdown-item dummy-drop disabled' href='#'>OTHER PAGES:</a>
                                <a className='dropdown-item' href='#' onClick={()=> history.push('/err')}>404 Page</a>
                                <a className='dropdown-item ' href='#' onClick={()=> history.push('/blank')}>Blank Page</a>
                                </div>
                        </li>

                        <li className='nav-item'>
                            <a href='#'>
                                <i className="bi bi-graph-up-arrow"></i>
                                <span>Charts</span></a>
                        </li>

                        <li className='nav-item'>
                            <a href='#'>
                                <i className="bi bi-table"></i>
                                <span onClick={()=> history.push('/table')}>Tables</span></a>
                        </li>

                        <hr className='ruler' />




                    </ul>

                </div>

            </nav >
         

        
    );


}


export default Navbar