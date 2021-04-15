import React, { Component } from 'react'
import project1 from "../../assets/images/project-1.jpg";
import project2 from "../../assets/images/project-2.jpg";
import project3 from "../../assets/images/project-3.jpg";
import project4 from "../../assets/images/project-4.jpg";
import project5 from "../../assets/images/project-5.jpg";
import project6 from "../../assets/images/project-6.jpg";
import { NotificationContainer, NotificationManager } from 'react-notifications';

class Projects extends Component {
    handleClickPost = () => {
        NotificationManager.info("Proje detay sayfası şu anda geliştirme aşamasında", "Geliştiriliyor..", 3000);
    }

    render() {
        return (
            <React.Fragment>
                <section class="ftco-section ftco-project" id="projects-section">
                    <div class="container" onClick={this.handleClickPost}>
                        <div class="row justify-content-center pb-5">
                            <div class="col-md-12 heading-section text-center ">
                                <h1 class="big big-2">Projelerim</h1>
                                <h2 class="mb-4">Projelerim</h2>
                                <p>Geliştirmiş olduğum bazı projeler burada listelenmektedir. Detaylı bilgi için lütfen benimle iletişime geçin.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="project img  d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(" + project4 + ")" }}>
                                    <div class="overlay"></div>
                                    <div class="text text-center p-4">
                                        <h3><a href="#">Ödülün Adresi</a></h3>
                                        <span>Web Sitesi</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="project img  d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(" + project5 + ")" }}>
                                    <div class="overlay"></div>
                                    <div class="text text-center p-4">
                                        <h3><a href="#">ComputerVision4Games</a></h3>
                                        <span>Bilgisayarlı Görü, Derin Öğrenme, Yapay Zeka</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-8">
                                <div class="project img  d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(" + project1 + ")" }}>
                                    <div class="overlay"></div>
                                    <div class="text text-center p-4">
                                        <h3><a href="#">Zombie Mombie</a></h3>
                                        <span>FPS Tabanlı Video Oyunu</span>
                                    </div>
                                </div>

                                <div class="project img  d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(" + project6 + ")" }}>
                                    <div class="overlay"></div>
                                    <div class="text text-center p-4">
                                        <h3><a href="#">Ekinciler Talep Sistemi</a></h3>
                                        <span>Web Sitesi</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="project img  d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(" + project2 + ")" }}>
                                            <div class="overlay"></div>
                                            <div class="text text-center p-4">
                                                <h3><a href="#">Ciro &amp; Stok Tahmini, Duygu Analizi</a></h3>
                                                <span>Makine Öğrenmesi, Derin Öğrenme</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="project img  d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(" + project3 + ")" }}>
                                            <div class="overlay"></div>
                                            <div class="text text-center p-4">
                                                <h3><a href="#">LRF Team</a></h3>
                                                <span>Web Sitesi</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <NotificationContainer />
            </React.Fragment>
        )
    }
}

export default Projects;