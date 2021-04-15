import React, { Component } from 'react'

class Services extends Component {
    render() {
        return (
            <section class="ftco-section" id="services-section">
                <div class="container">
                    <div class="row justify-content-center py-5 mt-5">
                        <div class="col-md-12 heading-section text-center ">
                            <h1 class="big big-2">Hizmetler</h1>
                            <h2 class="mb-4">Hizmetler</h2>
                            <p>Genellikle yapay zeka, makine öğrenmesi ve derin öğrenme üzerine araştırmalar yapmaktayım. Bunun yanında web tabanlı projeler de geliştirmekteyim.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 text-center d-flex ">
                            <a href="#" class="services-1">
                                <span class="icon">
                                    <i class="flaticon-analysis"></i>
                                </span>
                                <div class="desc">
                                    <h3 class="mb-5">Bilgisayarlı Görü</h3>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4 text-center d-flex ">
                            <a href="#" class="services-1">
                                <span class="icon">
                                    <i class="flaticon-flasks"></i>
                                </span>
                                <div class="desc">
                                    <h3 class="mb-5">Makine Öğrenmesi</h3>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4 text-center d-flex ">
                            <a href="#" class="services-1">
                                <span class="icon">
                                    <i class="flaticon-ideas"></i>
                                </span>
                                <div class="desc">
                                    <h3 class="mb-5">Derin Öğrenme</h3>
                                </div>
                            </a>
                        </div>

                        <div class="col-md-4 text-center d-flex ">
                            <a href="#" class="services-1">
                                <span class="icon">
                                    <i class="flaticon-analysis"></i>
                                </span>
                                <div class="desc">
                                    <h3 class="mb-5">Yapay Zeka</h3>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4 text-center d-flex ">
                            <a href="#" class="services-1">
                                <span class="icon">
                                    <i class="flaticon-flasks"></i>
                                </span>
                                <div class="desc">
                                    <h3 class="mb-5">Web Geliştirme</h3>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4 text-center d-flex">
                            <a href="#" class="services-1">
                                <span class="icon">
                                    <i class="flaticon-ideas"></i>
                                </span>
                                <div class="desc">
                                    <h3 class="mb-5">Web Tasarımı</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Services;