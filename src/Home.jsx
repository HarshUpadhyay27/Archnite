import React, {useEffect} from "react";
import { NavLink } from 'react-router-dom';
import Footer from "./Footer";
import post1 from "./Image/background-image13.jpg"
import WeekendIcon from '@material-ui/icons/Weekend';
import LinkedCameraIcon from '@material-ui/icons/LinkedCamera';
import StoreIcon from '@material-ui/icons/Store';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Post from "./Post";
import PostDatas from './PostDatas'
import Aos from 'aos'
import "aos/dist/aos.css";

const Home = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    }, [])
    return (
        <>
            <main>
                <section className="home-title">
                    <div className="home-background">
                        <h3>ArchNights</h3>
                        <h1>ArchNights ia Amazing Blogging Site</h1>
                        <button className="btn">Get Started</button>
                    </div>
                </section>
                <section className="home-section">
                    <div className="home-div">
                        <div className="home-left" data-aos="fade-up-right">
                            <h1>About Us</h1>
                            <p>The standard chunk of Lorems ipsum use since the 1500s is reproduced below for those intersted. section 1.10.32 and 1.10.33 from "de Finibus Bonorum el Malorum " by Cicero are also reproduce in their exact original from, accompained by English versions from the 1914 translation by H. Upadhyay</p>
                            <button><NavLink to="/about">READ MORE</NavLink></button>
                        </div>
                        <div className="home-right" data-aos="fade-up-left">
                            <img src={post1}></img>
                        </div>
                    </div>
                    <div className="home-content">
                        <h1>What We Do</h1>
                        <div className="cards">
                            <div className="card" data-aos="zoom-in-up">
                                <MenuBookIcon className="logo" />
                                <h2>Creative Sites</h2>
                                <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                            </div>
                            <div className="card" data-aos="zoom-in-up">
                                <LinkedCameraIcon className="logo" />
                                <h2>Photography</h2>
                                <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                            </div>
                            <div className="card" data-aos="zoom-in-up">
                                <StoreIcon className="logo" />
                                <h2>Architecture</h2>
                                <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                            </div>
                            <div className="card" data-aos="zoom-in-up">
                                <WeekendIcon className="logo" />
                                <h2>Branding</h2>
                                <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet adipiscing.</p>
                            </div>
                        </div>
                    </div>
                    <div className="home-blog">
                        <h1>Our Blog</h1>
                        <div className="cards">
                            {PostDatas.map((val) => {
                                return (
                                    <Post
                                        img={val.img}
                                        title={val.title}
                                        comment={val.comment}
                                    />
                                )
                            })}
                        </div>
                        <button className="btn"><NavLink to="/design">VIEW ALL DESIGN</NavLink></button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Home;