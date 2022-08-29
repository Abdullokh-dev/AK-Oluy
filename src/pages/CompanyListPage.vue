<template>
    <div class="container">

        <div class="row mt-5">
            <div class="col-xs-12 col-sm-12">
                <div class="d-inline">
                    <select class="select-form">
                        <option selected class="selected-type">Sorting</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <span class="result-company">found: 76 users</span>
                </div>
            </div>

            <div class="col-xs-12 col-sm-12">
                <div class="pagination">
                    <a class="active" href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">6</a>
                    <a href="#">&#8250;</a>
                    <a href="#">&rarr;</a>
                </div>
            </div>
        </div>

        <div class="line">
            <hr>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="search-title">Search by profiles</div>
            </div>
            <div class="col-12">
                <form action="#">
                    <input class="form-search-1" type="text" placeholder="Organization name">
                    <input class="form-search-2" type="tel" placeholder="Telephone">
                    <input class="form-search-3" type="text" placeholder="Key word">
                    <button type="submit" class="form-send">Search<img src="/img/icon_company-name-page/search.png"></button>
                </form>
            </div>
        </div>

        <div class="line">
            <hr>
        </div>

        <div v-for="card in 6" :key="card.index" class="row">
            <div class="col">
                <div class="company-box">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
                            <div class="company-logo">
                                <img src="/img/icon_company-name-page/company-logo.png" alt="company-logo">
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8" id="title-box">
                            <div class="company-title">
                                Grand Capital Group
                            </div>
                            <div class="company-subtitle">
                                <span class="for-sale">Selling:<span class="for-sale-index"> 50</span></span>
                                <span class="for-sale">Renting:<span class="for-sale-index"> 0</span></span>
                            </div>
                            <div class="company-rating">
                                <svg width="28" height="24" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.36035 0.248319C5.19978 -0.0284104 4.80015 -0.0284115 4.63957 0.248319L3.50872 2.1972C3.4294 2.3339 3.29229 2.42719 3.13602 2.45079L1.01672 2.77088C0.660768 2.82465 0.53591 3.27407 0.813121 3.50373L2.39191 4.81174C2.53805 4.93282 2.60677 5.12381 2.57127 5.31024L2.15828 7.47905C2.093 7.82189 2.45291 8.08827 2.76172 7.92567L4.75731 6.87491C4.90919 6.79493 5.09073 6.79493 5.24262 6.87491L7.23821 7.92567C7.54702 8.08827 7.90693 7.82189 7.84165 7.47905L7.42866 5.31024C7.39316 5.12381 7.46188 4.93282 7.60802 4.81174L9.18681 3.50373C9.46402 3.27407 9.33916 2.82465 8.98321 2.77088L6.86391 2.45079C6.70763 2.42719 6.57053 2.3339 6.49121 2.1972L5.36035 0.248319Z" fill="#5582FF"/>
                                </svg>
                                <svg width="28" height="24" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.36035 0.248319C5.19978 -0.0284104 4.80015 -0.0284115 4.63957 0.248319L3.50872 2.1972C3.4294 2.3339 3.29229 2.42719 3.13602 2.45079L1.01672 2.77088C0.660768 2.82465 0.53591 3.27407 0.813121 3.50373L2.39191 4.81174C2.53805 4.93282 2.60677 5.12381 2.57127 5.31024L2.15828 7.47905C2.093 7.82189 2.45291 8.08827 2.76172 7.92567L4.75731 6.87491C4.90919 6.79493 5.09073 6.79493 5.24262 6.87491L7.23821 7.92567C7.54702 8.08827 7.90693 7.82189 7.84165 7.47905L7.42866 5.31024C7.39316 5.12381 7.46188 4.93282 7.60802 4.81174L9.18681 3.50373C9.46402 3.27407 9.33916 2.82465 8.98321 2.77088L6.86391 2.45079C6.70763 2.42719 6.57053 2.3339 6.49121 2.1972L5.36035 0.248319Z" fill="#5582FF"/>
                                </svg>
                                <svg width="28" height="24" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.36035 0.248319C5.19978 -0.0284104 4.80015 -0.0284115 4.63957 0.248319L3.50872 2.1972C3.4294 2.3339 3.29229 2.42719 3.13602 2.45079L1.01672 2.77088C0.660768 2.82465 0.53591 3.27407 0.813121 3.50373L2.39191 4.81174C2.53805 4.93282 2.60677 5.12381 2.57127 5.31024L2.15828 7.47905C2.093 7.82189 2.45291 8.08827 2.76172 7.92567L4.75731 6.87491C4.90919 6.79493 5.09073 6.79493 5.24262 6.87491L7.23821 7.92567C7.54702 8.08827 7.90693 7.82189 7.84165 7.47905L7.42866 5.31024C7.39316 5.12381 7.46188 4.93282 7.60802 4.81174L9.18681 3.50373C9.46402 3.27407 9.33916 2.82465 8.98321 2.77088L6.86391 2.45079C6.70763 2.42719 6.57053 2.3339 6.49121 2.1972L5.36035 0.248319Z" fill="#5582FF"/>
                                </svg>
                                <svg width="28" height="24" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.36035 0.248319C5.19978 -0.0284104 4.80015 -0.0284115 4.63957 0.248319L3.50872 2.1972C3.4294 2.3339 3.29229 2.42719 3.13602 2.45079L1.01672 2.77088C0.660768 2.82465 0.53591 3.27407 0.813121 3.50373L2.39191 4.81174C2.53805 4.93282 2.60677 5.12381 2.57127 5.31024L2.15828 7.47905C2.093 7.82189 2.45291 8.08827 2.76172 7.92567L4.75731 6.87491C4.90919 6.79493 5.09073 6.79493 5.24262 6.87491L7.23821 7.92567C7.54702 8.08827 7.90693 7.82189 7.84165 7.47905L7.42866 5.31024C7.39316 5.12381 7.46188 4.93282 7.60802 4.81174L9.18681 3.50373C9.46402 3.27407 9.33916 2.82465 8.98321 2.77088L6.86391 2.45079C6.70763 2.42719 6.57053 2.3339 6.49121 2.1972L5.36035 0.248319Z" fill="#5582FF"/>
                                </svg>
                                <svg width="28" height="24" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.36922 0.714282C3.65023 0.230004 4.34957 0.230006 4.63058 0.714282L5.49114 2.19735C5.57047 2.33405 5.70757 2.42734 5.86385 2.45094L7.29287 2.66678C7.91578 2.76086 8.13428 3.54735 7.64916 3.94926L6.60795 4.8119C6.46181 4.93297 6.3931 5.12396 6.4286 5.31039L6.72025 6.84205C6.8345 7.44203 6.20466 7.90819 5.66424 7.62364L4.24256 6.87506C4.09067 6.79509 3.90913 6.79509 3.75724 6.87506L2.33556 7.62364C1.79514 7.90819 1.16529 7.44203 1.27954 6.84205L1.5712 5.31039C1.6067 5.12396 1.53799 4.93297 1.39184 4.8119L0.350635 3.94926C-0.134483 3.54735 0.0840179 2.76086 0.706933 2.66678L2.13595 2.45094C2.29223 2.42734 2.42933 2.33405 2.50865 2.19735L3.36922 0.714282ZM4.09 1.02796C4.04985 0.958778 3.94994 0.958779 3.9098 1.02796L3.04924 2.51103C2.87473 2.81177 2.5731 3.01701 2.22929 3.06893L0.800273 3.28477C0.711284 3.29821 0.680071 3.41056 0.749373 3.46798L1.79058 4.33061C2.1121 4.59698 2.26327 5.01715 2.18517 5.4273L1.89351 6.95896C1.87719 7.04467 1.96717 7.11127 2.04437 7.07061L3.46605 6.32204C3.8002 6.14609 4.19959 6.14609 4.53375 6.32204L5.95543 7.07061C6.03263 7.11127 6.12261 7.04467 6.10629 6.95896L5.81463 5.4273C5.73653 5.01715 5.8877 4.59698 6.20922 4.33061L7.25042 3.46798C7.31973 3.41056 7.28851 3.29821 7.19953 3.28477L5.77051 3.06893C5.4267 3.01701 5.12507 2.81177 4.95056 2.51103L4.09 1.02796Z" fill="#5582FF"/>
                                </svg>
                            </div>
                            <div class="comments">
                                4 comments
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12">
                            <div class="network-box">
                                <button type="button" class="btn-company">More</button>
                                <button type="button" class="btn-company-primary">Telephone<img src="/img/icon_company-name-page/phone1.png">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row ">
            <div class="col-12">
                <div class="pagination">
                    <a class="active" href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">6</a>
                    <a href="#">&#8250;</a>
                    <a href="#">&rarr;</a>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "CompanyName"
}
</script>

<style scoped>
hr {
    border: 1px solid rgba(0, 0, 0, 0.25);
}

.select-form {
    width: 99px;
    height: 36px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    outline: none;
    background: #FFFFFF;
    font-family: 'rubik', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    padding: 5px;
}

.result-company {
    margin-left: 30px;
    font-family: 'rubik', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    color: #00066E;
}

.pagination {
    display: inline-block;
    float: right;
    margin-bottom: 20px;
}

.pagination a {
    font-family: 'rubik', sans-serif;
    font-weight: 400;
    font-size: 20px;
    font-style: normal;
    color: #000000;
    padding: 8px 16px;
    text-decoration: none;
}

.pagination a.active {
    width: 36px;
    height: 36px;
    border: 1px solid #00066E;
    border-radius: 10px;
}

.pagination a:hover:not(.active) {
    background-color: #ddd;
    border-radius: 10px;
}

.search-title {
    font-family: 'rubik', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #00066E;
    margin-bottom: 15px;
}

.form-search-1 {
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    width: 294px;
    height: 36px;
    font-family: 'rubik', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
}

.form-search-2 {
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    width: 160px;
    height: 36px;
    font-family: 'rubik', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
}

.form-search-3 {
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    width: 131px;
    height: 36px;
    font-family: 'rubik', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
}

.form-send {
    width: 90px;
    Height: 36px;
    background: #5582FF;
    border: 0.5px solid #5582FF;
    border-radius: 10px;
    font-family: 'rubik', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #FFFFFF;
}

.form-send img {
    width: 18px;
    padding-left: 4px;
    padding-bottom: 5px;
}

form input {
    margin-right: 10px;
}

.company-box {
    width: 100%;
    border: 2px solid #5582FF;
    border-radius: 10px;
    margin-bottom: 52px;
}

.company-logo {
    width: 170px;
}

.company-logo img {
    padding: 29px 40px;
}

.company-title {
    font-family: 'rubik', sans-serif;
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: 57px;
    color: #00066E;
    padding-top: 30px;
    padding-bottom: 5px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

#title-box {
    padding-left: 30px;
}

.for-sale {
    font-family: 'rubik', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
}

.for-sale-index {
    font-family: 'rubik', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    color: #5582FF;
    margin-right: 15px;
}

.company-rating {
    padding-top: 20px;
}

.white-star {
    width: 26px;
    margin-top: 2px;
}

.comments {
    padding-top: 8px;
    font-family: 'rubik', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
}

.network-box {
    height: 85%;
    position: relative;
    display: flex;
    align-items: flex-end;
    margin-left: 160px;
    padding-bottom: 10px;
}

.btn-company {
    font-family: 'rubik', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    color: #5582FF;
    width: 87px;
    height: 37px;
    border: 0.5px solid #5582FF;
    border-radius: 5px;
    background: #FFFFFF;
}

.btn-company-primary {
    font-family: 'rubik', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    width: 102px;
    height: 37px;
    border: 0.5px solid #5582FF;
    border-radius: 5px;
    background: #5582FF;
    color: #FFFFFF;
    margin-left: 15px
}

.btn-company-primary img {
    padding-left: 5px;
    margin-bottom: 3px;
}

@media (max-width: 575px) {
    .select-form, .result-company {
        font-size: 12px;
    }
    .pagination a {
        font-size: 12px;
        padding: 4px 8px;
    }
    .form-search-1, .form-search-2, .form-search-3, .form-send {
        width: 100%;
        margin-top: 8px;
    }
    .network-box {
        float: right;
        padding-top: 10px;
        margin-right: 5%;

    }
    .company-title {
        font-size: 28px;
    }
}

@media (min-width: 576px) and (max-width: 767px) {
    .network-box {
        float: right;
        margin-right: 5%;
    }
    .form-search-3, .form-send {
        margin-top: 10px;
    }
    .pagination a {
        font-size: 16px;
        padding: 4px 8px;
    }
}

@media (min-width: 768px) and (max-width: 991px) {
    .network-box {
        float: right;
        margin-right: 5%;
    }
    .form-send {
        margin-top: 10px;
    }
}

@media (min-width: 992px) and (max-width: 1199px) {
    .network-box {
        float: right;
        margin-right: 5%;
    }
}

@media (min-width: 1200px) {
    .network-box {
        float: right;
        margin-right: 5%;
    }
}

</style>
