import React, { Component } from 'react'
import imageBackground from "../../assets/images/bg_1.jpg";

class Freelance extends Component {
    render() {
        return (
            <section class="ftco-section ftco-hireme img margin-top" style={{ backgroundImage: "url(" + imageBackground + ")" }}>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-7 text-center">
                            <h2>Serbest çalışmaya <span>müsaitim</span></h2>
                            <h5>Mesai saatları dışında, hafta sonları ve hafta içi akşam vakitlerinde freelance olarak projeler geliştirmekteyim. Yaptırmak istediğiniz projeler için lütfen benimle iletişime geçin.</h5>
                            <p class="mb-0"><a href="#contact-section" class="btn btn-primary py-3 px-5"> Bana Ulaş</a></p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Freelance;