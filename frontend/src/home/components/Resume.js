import React, { Component } from 'react'

class Resume extends Component {
    render() {
        return (
            <div>
                <section class="ftco-section ftco-no-pb" id="resume-section">
                    <div class="container">
                        <div class="row justify-content-center pb-5">
                            <div class="col-md-10 heading-section text-center ">
                                <h1 class="big big-2">Özgeçmiş</h1>
                                <h2 class="mb-4">Özgeçmiş</h2>
                                <p>Sürekli olarak öğrenmeye devam ederek kendimi geliştirmeye çalışmaktayım. Aşağıda eğitim ve iş geçmişim mevcuttur.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="resume-wrap ">
                                    <span class="date">Kasım 2020 - Halen</span>
                                    <h2>Bilgisayar Mühendisi</h2>
                                    <span class="position">Dakik Yazılım</span>
                                    <p class="mt-4">Dakik Yazılım bünyesinde araştırma ve geliştirme mühendisi olarak çalışmaktayım. Son teknoloji ürünleri geliştirmek için sürekli yeni şeyler öğrenmekte ve öğrendikçe mutlu olmaktayım.</p>
                                </div>
                                <div class="resume-wrap">
                                    <span class="date">Şubat 2020 - Ekim 2020</span>
                                    <h2>R&amp;D Engineer, Tam Zamanlı</h2>
                                    <span class="position">T-soft</span>
                                    <p class="mt-4">Smartydata isimli veri madenciliği ve iş zekası ürününün geliştirilmesi için makine öğrenmesi ve derin öğrenme yöntemlerinin geliştirilmesi, Restful API yazılması ve SPA olarak frontend tarafının yazılması üzerine çalıştım.</p>
                                </div>
                                <div class="resume-wrap ">
                                    <span class="date">Eylül 2016 - Haziran 2020</span>
                                    <h2>Bilgisayar Mühendisliği, Lisans</h2>
                                    <span class="position">Kahramanmaraş Sütçü İmam Üniversitesi</span>
                                    <p class="mt-4">4 yıllık lisans eğitimim boyunca çok fazla çalıştım ve bölümü birincilikle bitirdim. Bitirme projesi olarak derin öğrenme tabanlı bilgisayarlı görü projesi geliştirerek otonom araç kontrolü sağladım.</p>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="resume-wrap">
                                    <span class="date">Eylül 2020 - Halen</span>
                                    <h2>Enformatik, Yüksek Lisans</h2>
                                    <span class="position">Kahramanmaraş Sütçü İmam Üniversitesi</span>
                                    <p class="mt-4">Yüksek Lisans eğitimim kapsamında yapay zeka, örüntü tanıma ve optimizasyon algoritmaları üzerine araştırma yapmakta ve yeni bir meta sezgisel optimizasyon algoritması üzerinde çalışmaktayım.</p>
                                </div>
                                <div class="resume-wrap ">
                                    <span class="date">Eylül 2019 - Şubat 2020</span>
                                    <h2>R&amp;D Engineer, Yarı Zamanlı</h2>
                                    <span class="position">T-soft</span>
                                    <p class="mt-4">Lisans eğitimimin 4. yılında yarı zamanlı olarak işe başladım. Haftada 2.5 gün işe gidiyor ve 2.5 gün üniversiteye gidiyordum. Bu süreçte akademide öğrendiğim bilgilerimi sektörde öğrendiklerimle pekiştirme şansı yakaladım.</p>
                                </div>
                                <div class="resume-wrap ">
                                    <span class="date">Eylül 2012 - Haziran 2016</span>
                                    <h2>Lise</h2>
                                    <span class="position">İskenderun Cumhuriyet Anadolu Lisesi</span>
                                    <p class="mt-4">Lise eğitimimi Hatay'ın İskenderun ilçesinde tamamladım. Lise de bilgisayarlarla çok fazla vakit geçirmem Bilgisayar Mühendisliği bölümünde okumamda büyük bir rol oynadı. Lise günlerini hala özlemekteyim.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center mt-5">
                            <div class="col-md-6 text-center">
                                <p><a href="https://europa.eu/!MW67Um" target="_blank" class="btn btn-primary py-4 px-5">Europass CV</a></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Resume;