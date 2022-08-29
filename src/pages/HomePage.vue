<template>
    <div>
        <div class="container">
            <div class="row sale__home">
                <div class="col-xs-12 col-sm-12 col-md-7 col-lg-6 col-xl-6 align-self-center p-5">
                    <p class="sale">
                        Sell house and Buy
                    </p>

                    <p class="sale_description">
                        Sell your home confidently by posting an ad online, and buy a new home for yourself.
                        Posting an ad is absolutely free!
                    </p>

                    <router-link to="/add-advertisement-page" class="btn">
                        Add an ad
                    </router-link>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-5 col-lg-6 col-xl-6 mt-4">
                    <img src="/img/logos/sale.png" class="img-fluid" alt="">
                </div>
            </div>
        </div>

        <SearchForm/>

        <div class="container">

            <div class="row justify-content-center">

                <p class="heading mt-5">Apartments for sale</p>

                <div v-for="house of 8" v-bind:key="house.index"
                    class="col-xs-12 col-sm-12 col-md-6 col-lg-3 mt-4 ">
                    <router-link :to="'/room-page/' + house.index">
                        <img src="https://demo1-homeid.g5plus.net/wp-content/uploads/2020/10/single-property-04.jpg" class="img img-fluid" alt="...">
                    </router-link>
                    <div class="price mt-2">
                        {{ house }}0 000 $
                    </div>
                </div>

            </div>

            <div class="row">
                <button class="div btn-2 mt-3 ms-auto"> show more </button>
            </div>

            <div class="row">
                <p class="heading mt-5">Yard lots for sale</p>

                <div v-for="yard of 8" v-bind:key="yard.index"
                    class="col-xs-12 col-sm-12 col-md-6 col-lg-3  mt-4 ">
                    <router-link :to="'/room-page/' + yard.index"> <img src="https://www.realestate.com.au/blog/images/1280x720-fit,progressive/2022/02/09161709/capi_2a876666565dcc302cbd3ed1fa4300ec_5fecf6241cc3e466a85593d7012cd067.jpeg" class="img img-fluid" alt="..."> </router-link>
                    <div class="price mt-2">
                        {{ yard }}00 000 $
                    </div>
                </div>
            </div>
            <div class="row">
                <button class="div btn-2 mt-2 ms-auto"> show more</button>
            </div>

            <div class="row">
                <p class="heading mt-5">Apartments and patios for rent</p>

                <div v-for="house of 8" v-bind:key="house.index"
                    class="col-xs-12 col-sm-12 col-md-6 col-lg-3 mt-4 ">
                    <router-link :to="'/room-page/' + house.index">
                        <img src="https://aff.bstatic.com/images/hotel/840x460/302/302046632.jpg" class="img img-fluid" alt="...">
                    </router-link>
                    <div class="price mt-2">
                        {{ house }} 000 $
                    </div>
                </div>
            </div>

            <div class="row">
                <button class="div btn-2 mt-5 ms-auto"> show more </button>
            </div>

            <div class="row">
                <p class="heading mt-5">New apartments for sale</p>

                <div v-for="house of 8" v-bind:key="house.index"
                    class="col-xs-12 col-sm-12 col-md-6 col-lg-3  mt-4 ">
                    <router-link :to="'/room-page/' + house.index">
                        <img src="https://www.realestate.com.au/blog/images/2000x1500-fit,progressive/2022/03/22143917/212EDE1.jpg" class="img img-fluid" alt="...">
                    </router-link>
                    <div class="price mt-1">
                        {{ house }}00 000$
                    </div>
                </div>
            </div>
            <div class="row">
                <button class="div btn-2 mt-5 mb-5 ms-auto"> show more </button>
            </div>
        </div>

        <Footer/>
    </div>

</template>

<script>

import SearchForm from "@/components/SearchForm";

export default {
    name: "HomePage",
    components: {SearchForm},
}
</script>

<style scoped>
* {
    font-family: 'rubik', sans-serif !important;
}

.sale {
    width: 366px;
    height: 130px;
    font-size: 55px;
    font-weight: 700;
    color: #00066E;
    line-height: 65px;
}

.sale_description {
    width: 322px;
    height: 51px;
    font-size: 14px;
    color: #00066E;
    font-weight: 400;
    line-height: 16px;
}

.btn {
    width: 132px;
    height: 37px;
    border-radius: 17px;
    background-color: #5582FF;
    font-size: 14px;
    font-weight: 700;
    color: #FFFFFF;
}

.btn-2 {
    width: 128px;
    height: 36.3px;
    background: #5582FF;
    border-color: #5582FF;
    border-radius: 11px;
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    justify-content: center;
    color: #FFFFFF;
}

.price {
    width: 74px;
    height: 24px;
    border-radius: 17px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    color: #FFFFFF;
    background: #5582FF;
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
    border-color: #5582FF;
    font-size: 10px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    justify-content: center;
    stroke: rgba(0, 0, 0, 1);
    font-weight: 500;
}

.heading {
    font-size: 36px;
    font-weight: 500;
    color: #00066E;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
}

.img.img-fluid {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 10px;
}

</style>
