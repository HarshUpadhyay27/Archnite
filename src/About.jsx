import React, {useEffect} from "react";
import ShowMore from 'react-show-more'
import Footer from "./Footer";
import ComputerIcon from '@material-ui/icons/Computer';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import post1 from './Image/image1.png'
import post2 from './Image/image2.png'
import post3 from './Image/image3.png'
import Aos from 'aos'
import "aos/dist/aos.css";

const About = () => {
    useEffect(()=>{
        Aos.init({duration: 1000});
    }, [])

    return (
        <>
            <main>
                <section className="about">
                    <div className="about-background">
                        <h1>ABOUT US</h1>
                    </div>
                    <div className="about-work" data-aos="zoom-in-up">
                        <div className="work-left">
                            <h1>Our Work</h1>
                        </div>
                        <div className="work-right">
                            <ShowMore
                                lines={5}
                                more="show more"
                                less="show less"
                                anchorClass="txt"
                            >
                                {'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,  Curabitur eu ullamcorper sapien. Integer mi libero, accumsan a quam fermentum, venenatis hendrerit sapien. Nam egestas auctor urna et dictum. Ut malesuada dui a augue tincidunt, at maximus nisi elementum.Sed congue ullamcorper ligula, sit amet faucibus eros ultrices sed. Donec imperdiet luctus nibh, a iaculis elit laoreet non. Donec posuere sapien sed ex volutpat pretium. Vestibulum euismod dui sem, et cursus felis pulvinar non. Nam nulla lorem, consequat nec luctus a, euismod a odio. Nam venenatis orci ut elit luctus ultricies.'}
                            </ShowMore>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card-left" data-aos="zoom-in-right">
                            <AcUnitIcon className="logo" />
                            <div className="card-txt">
                                <h2>Awesome App</h2>
                                <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                        </div>
                        <div className="card-right" data-aos="zoom-in-left">
                            <img src={post1}></img>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card-right" data-aos="zoom-in-right">
                            <img src={post3}></img>
                        </div>
                        <div className="card-left" data-aos="zoom-in-left">
                            <ComputerIcon className="logo" />
                            <div className="card-txt">
                                <h2>Creative Sites</h2>
                                <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                <div />
                            </div>
                        </div>
                    </div>
                    <div className="boxs">
                        <div className="box" data-aos="flip-left">
                            <h2 className="no">01</h2>
                            <h2>Design</h2>
                            <p>Quisque molestie elementum quam molestie malesuada. In sagittis urna vitae blandit molestie. Nam aliquet dui neque, eget tincidunt sem accumsan egestas, turpis eu pellentesque.</p>
                        </div>
                        <div className="box" data-aos="flip-up">
                            <h2 className="no">02</h2>
                            <h2>Explore</h2>
                            <p>Quisque molestie elementum quam molestie malesuada. In sagittis urna vitae blandit molestie. Nam aliquet dui neque, eget tincidunt sem accumsan egestas, turpis eu pellentesque.</p>
                        </div>
                        <div className="box" data-aos="flip-right">
                            <h2 className="no">03</h2>
                            <h2>Apply</h2>
                            <p>Quisque molestie elementum quam molestie malesuada. In sagittis urna vitae blandit molestie. Nam aliquet dui neque, eget tincidunt sem accumsan egestas, turpis eu pellentesque.</p>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card-left" data-aos="zoom-in-right">
                            <FormatShapesIcon className="logo" />
                            <div className="card-txt">
                                <h2>Amazing Ideas</h2>
                                <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                        </div>
                        <div className="card-right" data-aos="zoom-in-left">
                            <img src={post2}></img>
                        </div>
                    </div>
                    <div className="last" data-aos="zoom-in-up">
                        <h1>Capabilities</h1>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum” by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default About;