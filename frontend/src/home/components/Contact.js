import React, { Component } from 'react'
import about from "../../assets/images/background1.png";
import ContactService from "../../services/ContactService"
import { NotificationContainer, NotificationManager } from 'react-notifications';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
        };
    }

    validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    sendMessage = async () => {
        if (this.state.name.trim() === ""
            || this.state.email.trim() === ""
            || this.state.subject.trim() === ""
            || this.state.message.trim() === ""
        ) {
            NotificationManager.error('Lütfen formu eksiksiz doldurunuz', 'Uyarı', 3000);
            return;
        }


        if (!this.validateEmail(this.state.email)) {
            NotificationManager.error('Lütfen geçerli bir email adresi giriniz', 'Hata', 3000);
            return;
        }

        const payload = {
            "name": this.state.name,
            "email": this.state.email,
            "subject": this.state.subject,
            "message": this.state.message
        }

        const result = await ContactService.sendMessage(payload);

        if (result.message.code === 200) {
            NotificationManager.success('Mesajınız başarıyla gönderildi', 'Başarılı', 3000);
            this.clearForm();
        }
    }

    clearForm = () => {
        this.setState({
            name: "",
            email: "",
            subject: "",
            message: "",
        })
    }

    render() {
        return (
            <React.Fragment>

                <section class="ftco-section contact-section ftco-no-pb" id="contact-section">
                    <div class="container">
                        <div class="row justify-content-center mb-5 pb-3">
                            <div class="col-md-7 heading-section text-center ">
                                <h1 class="big big-2">İletişim</h1>
                                <h2 class="mb-4">İletişim</h2>
                                <p>Lütfen sorularınız, önerileriniz ve iş teklifleriniz için benimle iletişime geçin.</p>
                            </div>
                        </div>

                        <div class="row d-flex contact-info mb-5">
                            <div class="col-md-6 col-lg-3 d-flex ">
                                <div class="align-self-stretch box p-4 text-center">
                                    <div class="icon d-flex align-items-center justify-content-center">
                                        <span class="icon-map-signs"></span>
                                    </div>
                                    <h3 class="mb-4">Adres</h3>
                                    <p>İskenderun, Hatay</p>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 d-flex ">
                                <div class="align-self-stretch box p-4 text-center">
                                    <div class="icon d-flex align-items-center justify-content-center">
                                        <span class="icon-phone2"></span>
                                    </div>
                                    <h3 class="mb-4">Telefon Numarası</h3>
                                    <p><a href="tel://1234567920">0543 372 37 69</a></p>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 d-flex ">
                                <div class="align-self-stretch box p-4 text-center">
                                    <div class="icon d-flex align-items-center justify-content-center">
                                        <span class="icon-paper-plane"></span>
                                    </div>
                                    <h3 class="mb-4">Email Adresi</h3>
                                    <p><a href="mailto:info@yoursite.com">suatbayir1@gmail.com</a></p>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 d-flex ">
                                <div class="align-self-stretch box p-4 text-center">
                                    <div class="icon d-flex align-items-center justify-content-center">
                                        <span class="icon-globe"></span>
                                    </div>
                                    <h3 class="mb-4">Website</h3>
                                    <p><a href="#">www.suatbayir.com</a></p>
                                </div>
                            </div>
                        </div>

                        <div class="row no-gutters block-9">
                            <div class="col-md-6 order-md-last d-flex">
                                <form class="bg-light p-4 p-md-5 contact-form">
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="İsminiz"
                                            value={this.state.name}
                                            onChange={(e) => { this.setState({ name: e.target.value }) }}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Email adresiniz"
                                            value={this.state.email}
                                            onChange={(e) => { this.setState({ email: e.target.value }) }}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Konu"
                                            value={this.state.subject}
                                            onChange={(e) => { this.setState({ subject: e.target.value }) }}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <textarea
                                            name=""
                                            id=""
                                            cols="30"
                                            rows="7"
                                            class="form-control"
                                            placeholder="Mesaj"
                                            value={this.state.message}
                                            onChange={(e) => { this.setState({ message: e.target.value }) }}
                                        ></textarea>
                                    </div>
                                    <div class="form-group">
                                        <input type="button" onClick={() => { this.sendMessage() }} value="Mesajı Gönder" class="btn btn-primary py-3 px-5" />
                                    </div>
                                </form>

                            </div>

                            <div class="col-md-6 d-flex">
                                <div class="img" style={{ backgroundImage: "url(" + about + ")" }}></div>
                            </div>
                        </div>
                    </div>
                </section>

                <NotificationContainer />

            </React.Fragment>

        )
    }
}

export default Contact;