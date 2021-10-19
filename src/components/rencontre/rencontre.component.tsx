// import './rencontre.css'

import { Carousel } from "react-bootstrap"
import { AiFillHeart } from "react-icons/ai"
import { BsEmojiHeartEyes } from "react-icons/bs"
import { ImCross } from "react-icons/im"

export const Rencontre = () => {
    return (

        <div className="container mt-5">

            <Carousel fade style={{background: "red"}}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/photos/profile-portrait-of-man-picture-id1280122950?b=1&k=20&m=1280122950&s=170667a&w=0&h=689_IKF54dJw6TZEP88IBktk2LrDO5SZk8IrI9Bl8ZA="
                        
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.shopify.com/s/files/1/0320/2200/3771/products/freedge-beauty-cure-visage-detox-bio-28504686755899_1024x.jpg?v=1627993757"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            {/* <div style={{display: "flex", justifyContent: "center"}}>
          
                <div className="rounded shadow" style={{width:"50em", height:"50em",
                backgroundImage: "url('https://media.istockphoto.com/photos/profile-portrait-of-man-picture-id1280122950?b=1&k=20&m=1280122950&s=170667a&w=0&h=689_IKF54dJw6TZEP88IBktk2LrDO5SZk8IrI9Bl8ZA=')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover"}}>

                    <div className="shadow p-2" style={{background:"rgba(0,0,0,0.5)", color: 'whitesmoke'}}>
                        <div>
                        Sylvain 25ans, Ingénieur logiciel
                        </div>
                        <div>
                            Issy
                        </div>
                    </div>

                    <div className="p-4" style={{display: "flex", "justifyContent": "space-between", "marginTop": "35em" }}>
                        <div>
                            <button className="btn btn-info btn-lg shadow" style={{backgroundImage: "linear-gradient(to right, #8360c3, #2ebf91)", border: "hidden", borderRadius: "50%"}}><AiFillHeart fontSize={"3em"} style={{"color": "#b31217"}}/> </button>
                        </div>
                        <div>
                        <button className="btn btn-info btn-lg shadow" style={{background: "linear-gradient(to right, #fffc00, #ffffff)", border: "hidden", borderRadius: "50%"}}><BsEmojiHeartEyes fontSize={"3em"} color={"#9733ee"}/> </button>
                        </div>
                        <div>
                        <button className="btn btn-info btn-lg shadow" style={{background: "black", border: "hidden", borderRadius: "50%"}}><ImCross fontSize={"3em"} color={"red"}/> </button>
                        </div>
                    </div>

         
                </div>
            </div> */}
        </div>


    )

}
