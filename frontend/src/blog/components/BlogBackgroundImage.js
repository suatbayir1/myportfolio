import React, { Component } from 'react'
import image1 from "../../assets/images/bg_1.jpg";


class BlogBackgroundImage extends Component {
    render() {
        return (
            <section class="hero-wrap js-fullheight" style={{ backgroundImage: "url(" + image1 + ")" }} data-stellar-background-ratio="0.5">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
                        <div class="col-md-12 pb-5 mb-3 text-center">
                            <h1 class="mb-3 bread">Blog Single Post</h1>
                            <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i class="ion-ios-arrow-forward"></i></a></span> <span class="mr-2"><a href="blog.html">Blog <i class="ion-ios-arrow-forward"></i></a></span> <span>Blog Single <i class="ion-ios-arrow-forward"></i></span></p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default BlogBackgroundImage;