import React, { Component } from 'react'
import image1 from "../../assets/images/image_1.jpg";
import image2 from "../../assets/images/image_2.jpg";
import image3 from "../../assets/images/image_3.jpg";
import { HashLink as Link } from 'react-router-hash-link';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import BlogService from "../../services/BlogService";

class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        };
    }

    async componentDidMount() {
        await this.getPosts();
    }

    getPosts = async () => {
        const payload = {
            "skip": 0,
            "limit": 3
        }

        const posts = await BlogService.getPosts(payload);

        this.setState({
            posts: posts.data
        });
    }

    handleClickPost = () => {
        NotificationManager.info("Blog detay sayfası şu anda geliştirme aşamasında", "Geliştiriliyor..", 3000);
    }

    render() {
        return (
            <React.Fragment>
                <section class="ftco-section" id="blog-section">
                    <div class="container">
                        <div class="row justify-content-center mb-5 pb-5">
                            <div class="col-md-7 heading-section text-center ">
                                <h1 class="big big-2">Blog</h1>
                                <h2 class="mb-4">Blog</h2>
                                <p>Bilginin paylaştıkça çoğalacağını ve anlam kazanacağını düşünmekteyim. Bilgisayar bilimleri ve ilgi alanlarım doğrultusunda bilgilerimi bu alan üzerinden sizlerle paylaşacağım.</p>
                            </div>
                        </div>
                        <div class="row d-flex" onClick={this.handleClickPost}>
                            {
                                this.state.posts.map(post => (
                                    <div class="col-md-4 d-flex ">
                                        <div class="blog-entry justify-content-end">
                                            <Link to={`/blog-detail/${post["id"]}#blog-detail-section`}>
                                                <a class="block-20" style={{ backgroundImage: "url(" + image1 + ")" }}>
                                                </a>
                                            </Link>

                                            <div class="text mt-3 float-right d-block">
                                                <div class="d-flex align-items-center mb-3 meta">
                                                    <p class="mb-0">
                                                        <span class="mr-2">{post["created_at"]} </span>
                                                        <a href="#" class="mr-2">{post["author_name"]}</a>
                                                        <a href="#" class="meta-chat"><span class="icon-chat"></span> 0</a>
                                                    </p>
                                                </div>
                                                <h3 class="heading"><a href="single.html">{post["post_name"]}</a></h3>
                                                <p>{String(post["abstract"]).substring(0, 80)} ...</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }



                            <div class="col-md-4 d-flex ">
                                <div class="blog-entry justify-content-end">
                                    {/* <Link to="/blog-detail/2#blog-detail-section"> */}
                                    <a class="block-20" style={{ backgroundImage: "url(" + image2 + ")" }}>
                                    </a>
                                    {/* </Link> */}

                                    <div class="text mt-3 float-right d-block">
                                        <div class="d-flex align-items-center mb-3 meta">
                                            <p class="mb-0">
                                                <span class="mr-2">Mart 31, 2021</span>
                                                <a href="#" class="mr-2">Suat Bayır</a>
                                                <a href="#" class="meta-chat"><span class="icon-chat"></span> 0</a>
                                            </p>
                                        </div>
                                        <h3 class="heading"><a href="single.html">Zeki Optimizasyon Algoritmaları</a></h3>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 d-flex ">
                                <div class="blog-entry">
                                    {/* <Link to="/blog-detail/3"> */}
                                    <a class="block-20" style={{ backgroundImage: "url(" + image3 + ")" }}>
                                    </a>
                                    {/* </Link> */}


                                    <div class="text mt-3 float-right d-block">
                                        <div class="d-flex align-items-center mb-3 meta">
                                            <p class="mb-0">
                                                <span class="mr-2">Mart 31, 2021</span>
                                                <a href="#" class="mr-2">Suat Bayır</a>
                                                <a href="#" class="meta-chat"><span class="icon-chat"></span> 0</a>
                                            </p>
                                        </div>
                                        <h3 class="heading"><a href="single.html">CRISP-DM</a></h3>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
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

export default Blog;