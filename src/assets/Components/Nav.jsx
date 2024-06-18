
function Nav(){
    document.title = "GK";
    
    return(<>
            
            <div id="header">
                <nav>
                <div>  
                <img id="logo" src= "./public/logo.png"  alt="logo"></img>
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
