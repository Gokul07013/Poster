import logo from "/public/logo.png";


function Nav(){
    document.title = "GK";
    
    return(<>
            
            <div id="header">
                <nav>
                <div>  
                <img id="logo" src= {logo}  alt="logo"></img>
                </div> 
                <ul>
                <li><a href="#">MENU</a></li>
                <li><a href="#">LOCATION</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">CONTACT</a></li>
                </ul> 
                <button>Login</button>
                </nav>
            </div>

            </>);


}

export default Nav
