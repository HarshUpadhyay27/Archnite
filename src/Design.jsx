import React from "react";
import Footer from "./Footer";
import Post from "./Post";
import PostData from "./PostData"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const Design = () => {
    return (
        <>
            <main>
                <section className="design">
                    <div className="background-design">
                        <h3>ArchNights Design</h3>
                        <h1>some Extra Ordinary Design</h1>
                        <button className="btn">Explor</button>
                    </div>
                </section>
                <section>
                    <div className="card-div">
                        <div className="cards">
                            {PostData.map((val) => {
                                return (
                                    <Post
                                        img={val.img}
                                        title={val.title}
                                        comment={val.comment}
                                    />
                                )
                            })}
                        </div>
                        <div className="page-div">
                            <a href="#"><ArrowBackIosIcon /></a>
                            <a href="#" className="pages">1</a>
                            <a href="#" className="pages">2</a>
                            <a href="#" className="pages no">3</a>
                            <a href="#"><NavigateNextIcon /></a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Design;