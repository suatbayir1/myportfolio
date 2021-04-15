import React, { Component } from 'react'
import image from "../../assets/images/background1.png";

class About extends Component {
    render() {
        return (
            <section class="ftco-about img ftco-section ftco-no-pb" id="about-section">
                <div class="container">
                    <div class="row d-flex">
                        <div class="col-md-6 col-lg-5 d-flex">
                            <div class="img-about img d-flex align-items-stretch">
                                <div class="overlay"></div>
                                <div
                                    class="img d-flex align-self-stretch align-items-center"
                                    style={{ backgroundImage: "url(" + image + ")" }}
                                >
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-7 pl-lg-5 pb-5">
                            <div class="row justify-content-start pb-3">
                                <div class="col-md-12 heading-section ">
                                    <h1 class="big">Hakkımda</h1>
                                    <h2 class="mb-4">Hakkımda</h2>
                                    <p>Kahramanmaraş Sütçü İmam Üniversitesi Bilgisayar Mühendisliği bölümünden 2020 yılında birincilikle mezun oldum. 3 yılı aşkın süredir Veri Bilimi ve Web Geliştirme üzerine projeler geliştiriyorum. Araştırmayı seven, yeniliklere kolay adapte olabilen ve farklı teknolojilerle çalışmayı seven birisiyim.</p>
                                    <ul class="about-info mt-4 px-md-0 px-2">
                                        <li class="d-flex"><span>İsim:</span> <span>Suat BAYIR</span></li>
                                        <li class="d-flex"><span>Doğum tarihi:</span> <span>Haziran 16, 1998</span></li>
                                        <li class="d-flex"><span>Adres:</span> <span>İskenderun, Hatay</span></li>
                                        <li class="d-flex"><span>Meslek:</span> <span>Bilgisayar Mühendisi</span></li>
                                        <li class="d-flex"><span>Email:</span> <span>suatbayir1@gmail.com</span></li>
                                        <li class="d-flex"><span>Telefon: </span> <span>0543 372 37 69</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="counter-wrap  d-flex mt-md-3">
                                <div class="text">
                                    <p class="mb-4">
                                        <span class="number" data-number="120">10</span>
                                        <span> Proje tamamlandı</span>
                                    </p>
                                    <p><a href="/files/cv.pdf" download class="btn btn-primary py-3 px-3">Download CV</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;