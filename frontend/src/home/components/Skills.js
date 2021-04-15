import React, { Component } from 'react'

class Skills extends Component {
    render() {
        return (
            <section class="ftco-section" id="skills-section">
                <div class="container">
                    <div class="row justify-content-center pb-5">
                        <div class="col-md-12 heading-section text-center ">
                            <h1 class="big big-2">Yeteneklerim</h1>
                            <h2 class="mb-4">Yeteneklerim</h2>
                            <p>Farklı teknolojilerle çalışmayı seven ve sürekli öğrenen birisiyim. Genellikle kullandığım teknolojiler aşağıdadır.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 animate-box">
                            <div class="progress-wrap ">
                                <h3>Python, Flask</h3>
                                <div class="progress">
                                    <div class="progress-bar color-1" role="progressbar" aria-valuenow="95"
                                        aria-valuemin="0" aria-valuemax="100" style={{ width: "95%" }}>
                                        <span>95%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 animate-box">
                            <div class="progress-wrap ">
                                <h3>PHP, Codeigniter</h3>
                                <div class="progress">
                                    <div class="progress-bar color-2" role="progressbar" aria-valuenow="90"
                                        aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
                                        <span>90%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 animate-box">
                            <div class="progress-wrap ">
                                <h3>Javascript, React.js, Vue.js</h3>
                                <div class="progress">
                                    <div class="progress-bar color-3" role="progressbar" aria-valuenow="90"
                                        aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
                                        <span>90%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 animate-box">
                            <div class="progress-wrap ">
                                <h3>HTML5, CSS3</h3>
                                <div class="progress">
                                    <div class="progress-bar color-4" role="progressbar" aria-valuenow="70"
                                        aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}>
                                        <span>70%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 animate-box">
                            <div class="progress-wrap ">
                                <h3>SQL, MongoDB, InfluxDB</h3>
                                <div class="progress">
                                    <div class="progress-bar color-5" role="progressbar" aria-valuenow="90"
                                        aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
                                        <span>90%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 animate-box">
                            <div class="progress-wrap ">
                                <h3>C, C++, C#</h3>
                                <div class="progress">
                                    <div class="progress-bar color-6" role="progressbar" aria-valuenow="80"
                                        aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>
                                        <span>80%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 animate-box">
                            <div class="progress-wrap ">
                                <h3>NLP, ML, DL, CV</h3>
                                <div class="progress">
                                    <div class="progress-bar color-6" role="progressbar" aria-valuenow="95"
                                        aria-valuemin="0" aria-valuemax="100" style={{ width: "95%" }}>
                                        <span>95%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 animate-box">
                            <div class="progress-wrap ">
                                <h3>Bootstrap, Vuetify, Material UI</h3>
                                <div class="progress">
                                    <div class="progress-bar color-6" role="progressbar" aria-valuenow="90"
                                        aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
                                        <span>90%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Skills;