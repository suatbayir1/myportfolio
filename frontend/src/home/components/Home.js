import React, { Component } from 'react'
import image1 from "../../assets/images/background1.png";
import image2 from "../../assets/images/background2.png";
import HomeService from "../services/HomeService";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    async componentDidMount() {
        await this.getHomeSliderInfo();
    }

    getHomeSliderInfo = async () => {
        const result = await HomeService.getHomeSliderInfo();
    }

    render() {
        return (
            <section id="home-section" class="hero">

                <div class="home-slider  owl-carousel">
                    <Carousel
                        autoPlay={true}
                        centerMode={false}
                        emulateTouch={true}
                        infiniteLoop={true}
                        interval={3000}
                        showArrows={false}
                        showStatus={false}
                    >
                        <div class="slider-item ">
                            <div class="overlay"></div>
                            <div class="container">
                                <div class="row d-md-flex no-gutters slider-text justify-content-end" data-scrollax-parent="true">
                                    <div
                                        class="one-third js-fullheight order-md-last img"
                                        style={{ backgroundImage: "url(" + image1 + ")" }}
                                    >
                                        <div class="overlay"></div>
                                    </div>
                                    <div class="one-forth d-flex align-items-center" data-scrollax=" properties: { translateY: '70%' }">
                                        <div class="text">
                                            <span class="subheading">Merhaba!</span>
                                            <h1 class="mb-4 mt-3">Ben <span>Suat BAYIR</span></h1>
                                            <h2 class="mb-4">Bilgisayar Mühendisiyim</h2>
                                            <p><a href="#contact-section" class="btn btn-primary py-3 px-4">Bana Ulaş</a> <a href="#projects-section" class="btn btn-white btn-outline-white py-3 px-4">Projelerim</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="slider-item">
                            <div class="overlay"></div>
                            <div class="container">
                                <div class="row d-flex no-gutters slider-text  justify-content-end" data-scrollax-parent="true">
                                    <div
                                        class="one-third js-fullheight order-md-last img"
                                        style={{ backgroundImage: "url(" + image2 + ")" }}
                                    >
                                        <div class="overlay"></div>
                                    </div>
                                    <div class="one-forth d-flex align-items-center" data-scrollax=" properties: { translateY: '70%' }">
                                        <div class="text">
                                            <span class="subheading">Merhaba!</span>
                                            <h1 class="mb-4 mt-3"><span>Veri bilimi</span> ve <span>web projeleri</span> üzerine çalışıyorum</h1>
                                            <p><a href="#contact-section" class="btn btn-primary py-3 px-4">Bana Ulaş</a> <a href="#projects-section" class="btn btn-white btn-outline-white py-3 px-4">Projelerim</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>

                </div>

            </section>
        )
    }
}

export default Home;