function Content(){


    return(<>
                <main className="bottom">
                    <div className="leftdiv">
                        <div id="heading">
                        <h1>YOUR FEET DESERVE THE BEST</h1>
                        </div>
                        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                        <button id="shopnow">Shop Now</button>
                        <button id="category">Category</button>
                        <div className="availablebox">
                            <p>Also available on</p>
                            <a href="https://flipkart.com"><img src="flipcart.png" alt="img" className="downimage"></img></a>
                            <a href="https://amazon.com"><img src="./public/amazon.png" alt="img" className="downimage" id="amazon"></img></a>
                        </div>
                    </div>
                    <div id="rightdiv">
                       <a href=""><img src="./public/shoe.png" alt="shoe" id="shoeimage"/></a>
                    </div>
                </main>

            </>);
}

export default Content