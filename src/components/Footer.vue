<template>
    <div class="container-fluid">
        <div class="container">
            <div class="row ms-3">
                <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                    <div class="row">
                        <div class="col-12">
                            <div class="titles">States</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                            <ul class="list-unstyled">
                                <li class="mb-2"><a href="#"><span class="arrow"></span>California</a></li>
                                <li class="mb-2"><a href="#"><span class="arrow"></span>Texas</a></li>
                                <li class="mb-2"><a href="#"><span class="arrow"></span>Florida</a></li>
                                <li class="mb-2"><a href="#"><span class="arrow"></span>Virginia</a></li>
                                <li class="mb-2"><a href="#"><span class="arrow"></span>Alaska</a></li>
                                <li class="mb-2"><a href="#"><span class="arrow"></span>Hawaii</a></li>
                                <li class="mb-2"><a href="#"><span class="arrow"></span>Alabama</a></li>
                            </ul>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                            <ul class="list-unstyled">
                                <li class="mb-2"><a href="#"><span class="arrow"></span>Alaska</a></li>
                                <li class="mb-2"><a href="#"><span class="arrow"></span>Arizona</a></li>
                                <li class="mb-2"><a href="#"><span class="arrow"></span>Arkansas</a></li>
                                <li class="mb-2"><a href="#"><span class="arrow"></span>Colorado</a></li>
                                <li class="mb-2"><a href="#"><span class="arrow"></span>Connecticut</a></li>
                                <li class="mb-2"><a href="#"><span class="arrow"></span>Delaware</a></li>
                                <li class="mb-2"><a href="#"><span class="arrow"></span>Georgia</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-5">
                    <div class="row">
                        <div class="col-12">
                            <div class="titles">Residential areas</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                            <ul class="list-unstyled">
                                <li class="mb-2"><a href="#"><span class="arrow"></span>Offices</a></li>
                                <li class="mb-2"><a href="#"><span class="arrow"></span>Shops</a></li>
                                <li class="mb-2"><a href="#"><span class="arrow"></span>Warehouses</a></li>
                                <li class="mb-2"><a href="#"><span class="arrow"></span>production rooms</a></li>
                                <li class="mb-2"><a href="#"><span class="arrow"></span>Buildings</a></li>
                                <li class="mb-2"><a href="#"><span class="arrow"></span>Training centers</a></li>
                                <li class="mb-2"><a href="#"><span class="arrow"></span>Factories</a></li>
                            </ul>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                            <ul class="list-unstyled">
                                <li class="mb-2"><a href="#"><span class="arrow"></span>Service Buildings</a></li>
                                <li class="mb-2"><a href="#"><span class="arrow"></span>Rent Buildings</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-3 col-lg-2">
                    <div class="row">
                        <div class="col-12">
                            <div class="titles">Construction companies</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">

                            <ul class="list-unstyled">
                                <li class="mb-2"><a href="#"><span class="arrow"></span>Our Houses</a></li>
                                <li class="mb-2"><a href="#"><span class="arrow"></span>Murad Buildings</a></li>
                                <li class="mb-2"><a href="#"><span class="arrow"></span>Mimar</a></li>
                                <li class="mb-2"><a href="#"><span class="arrow"></span>Seoul Mun</a></li>
                                <li class="mb-2"><a href="#"><span class="arrow"></span>Golden House</a></li>
                                <li class="mb-2"><a href="#"><span class="arrow"></span>KOC construction</a></li>
                                <li class="mb-2"><a href="#"><span class="arrow"></span>Reneissans</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="line"></div>

        <div class="container">
            <div class="row ms-3">
                <div class="col-sm-12 col-md-6 col-lg-5">
                    <div class="titles col-sm-12 col-md-6 ">For Users</div>
                    <ul class="list-unstyled">
                        <li class="mb-2"><router-link to="/registration-page">Sign up</router-link></li>
                        <li class="mb-2"><a href="#">About us</a></li> <!--topolmadim!-->
                        <li class="mb-2"><router-link to="/help-page">Help</router-link></li>
                        <li class="mb-2"><a href="#">Terms of use</a></li><!--topolmadim!-->
                        <li class="mb-2"><a href="#">Users rights</a></li><!--topolmadim!-->
                        <li class="mb-2"><router-link to="/add-advertisement-page">Add an ad</router-link></li>
                        <li class="mb-2"><a href="#">Blog</a></li>
                        <li class="mb-2"><a href="#">Information center</a></li>
                    </ul>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="titles col-sm-12 col-md-6">For Realtors</div>
                    <ul class="list-unstyled">
                        <li class="mb-2"><router-link to="/registration-page">Sign up</router-link></li>
                        <li class="mb-2"><router-link to="/personal-account-page">Log in cabinet</router-link></li>
                        <li class="mb-2"><router-link to="">Familiarize with terms</router-link></li>
                        <li class="mb-2"><a href="#">Users rights</a></li>
                    </ul>


                    <div class="d-none d-md-block titles col-sm-12 col-md-6 col-lg-8 mt-3">
                        <h2 class="app">Mobile App</h2>
                    </div>
                    <div class="d-none d-md-block d-lg-none col-sm-12 col-lg-10 mt-3 mb-3">
                        <a href="#">
                            <img src="/img/logos/google_play_logo.png" alt="Google Play photo">
                        </a>
                    </div>
                </div>
                <div class="titles col-sm-12 col-md-6 col-lg-3">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">Connections</div>
                        <ul class="list-unstyled address">
                            <li class="mb-2 mt-4"><a href="#">
                                <p>Address: Uzbekistan,</p>
                                Fergana province,<p>Bunyodkor
                                street 18 house</p> </a></li>
                            <li class="mb-2"><a href="#">Tel: +998970003525</a></li>
                            <li class="mb-2"><a href="#">Email: abdulloh3525dev@gmail.com</a></li>
                        </ul>
                        <div class="col-lg-2"></div>
                        <div class="d-block d-md-none titles col-sm-12 col-md-6 col-lg-8 mt-3 mb-md-5">
                            <h2 class="app">Install Mobil App</h2>
                        </div>
                        <div class="mt-3 col-sm-12 col-lg-10 play-logo d-md-none d-lg-block">
                            <a href="#">
                                <img src="/img/logos/google_play_logo.png" alt="Google Play photo">
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="line"></div>

        <div class="container">
            <div class="row ms-3">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center">
                    <div class="footer-title">
                        <img class="logo" src="/img/logos/oluy_logo.png" alt="oluy_logo">
                    </div>
                </div>
                    <div class="footer-title col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        An online market dealing with house sales in America.
                        OLUY is operated in full compliance with state laws and all its rights are protected
                    </div>
            </div>
        </div>
        <div class="first-footer">
            <span class="domen">
                2021 Abdullokh_dev
            </span>
        </div>

    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
.container-fluid {
    background: #5582FF;
    width: auto;
    height: auto;
    padding-top: 10px;
    padding-left: 0;
    padding-right: 0;
}

.line {
    opacity: 1;
    background: #FFFFFF;
    border: 2px solid #FFFFFF;
    margin-top: 6px;
}

.first-footer {
    background-color: #00066E;
    width: auto;
    height: 57px;
    padding-right: 0;
    margin-right: 0;
}
.domen {
    position: absolute;
    width: 226px;
    height: 21px;
    left: 21px;
    margin: 19px auto 17px 21px;
    font-family: 'rubik', sans-serif;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    text-decoration: none;
    color: #FFFFFF;
}

.titles {
    font-family: 'rubik', sans-serif;
    font-size: 20px;
    font-weight: 700;
    font-style: normal;
    color: #FFFFFF;
    padding-top: 40px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.list-unstyled {
    font-family: 'rubik', sans-serif;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    padding-top: 30px;
}

.list-unstyled > li {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.mb-2 a {
    text-decoration: none;
    color: #FFFFFF;
}

.app {
    font-family: 'rubik', sans-serif;
    font-size: 26px;
    font-weight: 700;
    font-style: normal;
    color: white;

}

.footer-title {
    font-family: 'rubik', sans-serif;
    font-size: 20px;
    font-weight: 500;
    font-style: normal;
    color: #FFFFFF;
    margin-top: 20px;
    margin-bottom: 20px;
}

.logo {
    width: 250px;
}

.arrow {
    display: inline-flex;
    width: 8px;
    height: 8px;
    border-top: 2px solid #00066E;
    border-right: 2px solid #00066E;
    transform: rotate(45deg);
    margin-right: 5px;
    margin-bottom: 2px;
}

.address {
    margin-top: -40px;
}

</style>

