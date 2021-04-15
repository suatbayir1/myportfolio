import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer class="ftco-footer ftco-section">
                <div class="container">
                    <div class="row mb-5">
                        <div class="col-md">
                            <div class="ftco-footer-widget mb-4">
                                <h2 class="ftco-heading-2">Hakkımda</h2>
                                <p>Merhaba, ben Suat Bayır bilgisayar mühendisiyim. Bilgisayar bilimleri alanında araştırmalar yapmakta ve bilgilerimi bu site üzerinden paylaşmaktayım.</p>
                                <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                    <li class=""><a target="_blank" href="https://twitter.com/"><span class="icon-twitter"></span></a></li>
                                    <li class=""><a target="_blank" href="https://github.com/suatbayir1"><span class="icon-github"></span></a></li>
                                    <li class=""><a target="_blank" href="https://www.instagram.com/suatbayir_/"><span class="icon-instagram"></span></a></li>
                                    <li class=""><a target="_blank" href="https://www.linkedin.com/in/suatbayir/"><span class="icon-linkedin"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="ftco-footer-widget mb-4">
                                <h2 class="ftco-heading-2">Blog</h2>
                                <ul class="list-unstyled">
                                    <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Bilgisayarlı Görü</a></li>
                                    <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Makine Öğrenmesi</a></li>
                                    <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Derin Öğrenme</a></li>
                                    <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Web Geliştirme</a></li>
                                    <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Web Tasarımı</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="ftco-footer-widget mb-4">
                                <h2 class="ftco-heading-2">Sorunuz mu var?</h2>
                                <div class="block-23 mb-3">
                                    <ul>
                                        <li><span class="icon icon-map-marker"></span><span class="text">İskenderun, Hatay</span></li>
                                        <li><a href="#"><span class="icon icon-phone"></span><span class="text">0543 372 37 69</span></a></li>
                                        <li><a href="#"><span class="icon icon-envelope"></span><span class="text">suatbayir1@gmail.com</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 text-center">

                            <p>Copyright &copy; 2021 Tüm Hakları Saklıdır | Suat Bayır tarafından hazırlanmıştır.</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;