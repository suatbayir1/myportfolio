import React, { Component } from 'react'
import $ from "jquery"
import { HashLink as Link } from 'react-router-hash-link';


class LinkHeader extends Component {
    componentDidMount() {
        // scroll
        var scrollWindow = function () {
            $(window).scroll(function () {
                var $w = $(this),
                    st = $w.scrollTop(),
                    navbar = $('.ftco_navbar'),
                    sd = $('.js-scroll-wrap');

                if (st > 150) {
                    if (!navbar.hasClass('scrolled')) {
                        navbar.addClass('scrolled');
                    }
                }
                if (st < 150) {
                    if (navbar.hasClass('scrolled')) {
                        navbar.removeClass('scrolled sleep');
                    }
                }
                if (st > 350) {
                    if (!navbar.hasClass('awake')) {
                        navbar.addClass('awake');
                    }

                    if (sd.length > 0) {
                        sd.addClass('sleep');
                    }
                }
                if (st < 350) {
                    if (navbar.hasClass('awake')) {
                        navbar.removeClass('awake');
                        navbar.addClass('sleep');
                    }
                    if (sd.length > 0) {
                        sd.removeClass('sleep');
                    }
                }
            });
        };
        scrollWindow();

    }

    render() {
        return (
            <React.Fragment>
                <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
                    <div class="container">
                        <Link to={"/#home-section"} class="navbar-brand">
                            Suat Bayır
                        </Link>
                        <button class="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="oi oi-menu"></span> Menu
	                    </button>

                        <div class="collapse navbar-collapse" id="ftco-nav">
                            <ul class="navbar-nav nav ml-auto">
                                <li class="nav-item">
                                    <Link to={"/#home-section"} class="nav-link">
                                        <span>Anasayfa</span>
                                    </Link>
                                </li>

                                <li class="nav-item">
                                    <Link to={"/#about-section"} class="nav-link">
                                        <span>Hakkımda</span>
                                    </Link>
                                </li>

                                <li class="nav-item">
                                    <Link to={"/#resume-section"} class="nav-link">
                                        <span>Özgeçmiş</span>
                                    </Link>
                                </li>

                                <li class="nav-item">
                                    <Link to={"/#services-section"} class="nav-link">
                                        <span>Hizmetler</span>
                                    </Link>
                                </li>

                                <li class="nav-item">
                                    <Link to={"/#skills-section"} class="nav-link">
                                        <span>Yetenekler</span>
                                    </Link>
                                </li>

                                <li class="nav-item">
                                    <Link to={"/#projects-section"} class="nav-link">
                                        <span>Projeler</span>
                                    </Link>
                                </li>

                                <li class="nav-item">
                                    <Link to={"/#blog-section"} class="nav-link">
                                        <span>Blog</span>
                                    </Link>
                                </li>

                                <li class="nav-item">
                                    <Link to={"/#contact-section"} class="nav-link">
                                        <span>İletişim</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default LinkHeader;