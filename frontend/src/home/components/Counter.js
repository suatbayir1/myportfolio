import React, { Component } from 'react'

class Counter extends Component {
    render() {
        return (
            <section class="ftco-section ftco-no-pt ftco-no-pb ftco-counter img" id="section-counter">
                <div class="container">
                    <div class="row d-md-flex align-items-center">
                        <div class="col-md d-flex justify-content-center counter-wrap ">
                            <div class="block-18">
                                <div class="text">
                                    <strong class="number" data-number="100">6</strong>
                                    <span>Ödül &amp; Belgeler</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md d-flex justify-content-center counter-wrap ">
                            <div class="block-18">
                                <div class="text">
                                    <strong class="number" data-number="1200">6</strong>
                                    <span>Tamamlanan Proje</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md d-flex justify-content-center counter-wrap ">
                            <div class="block-18">
                                <div class="text">
                                    <strong class="number" data-number="1200">2</strong>
                                    <span>Mutlu Müşteri</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md d-flex justify-content-center counter-wrap ">
                            <div class="block-18">
                                <div class="text">
                                    <strong class="number" data-number="500">3</strong>
                                    <span>Blog Yazısı</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Counter;