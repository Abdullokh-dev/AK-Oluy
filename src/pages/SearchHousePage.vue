<template>
    <div class="container-fluid">

        <div class="row">
            <div class="col-1"></div>
            <div class="col-10 ">
                <form class="row">
                    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                        <select class="form-select mt-2 " id="selectToastPlacement1">
                            <option value="" selected>City</option>
                            <option value="top-0 start-0">California</option>
                        </select>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                        <select class="form-select mt-2 " id="selectToastPlacement2">
                            <option value="" selected>Select Address</option>
                            <option value="top-0 start-0">Back stree</option>
                        </select>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                        <select class="form-select mt-2 " id="selectToastPlacement3">
                            <option value="" selected>Flat</option>
                            <option value="top-0 start-0">Courtyard</option>
                        </select>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                        <select class="form-select mt-2 " id="selectToastPlacement4">
                            <option value="" selected>Rooms</option>
                            <option value="top-0 start-0">1 Room</option>
                            <option value="top-0 start-0">2 Rooms</option>
                        </select>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                        <select class="form-select mt-2" id="selectToastPlacement5">
                            <option value="" selected>Price</option>
                            <option value="top-0 start-0">200 $</option>
                        </select>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-1">
                        <button class="btn  mt-2 " id="search" type="submit">
                            Search
                            <img src="/img/icon_company-name-page/search.png" alt="search icon" class="icon"/>

                        </button>
                    </div>
                </form>

                <div class="row">
                    <div class="col-12" id="line">
                        <hr />
                    </div>
                </div><br /><br />

                <div class="row">
                    <div class="col-4 col-sm-3 col-md-3 col-lg-1">
                        <a href="" class="all"> All (4)</a>
                    </div>

                    <div class="col-4 col-sm-3 col-md-3 col-lg-1 triple">
                        <a href="" class="new pr-1">New constructions(0)</a>
                    </div>

                    <div class="col-4 col-sm-3 col-md-3 col-lg-2 triple">
                        <a href="" class="secondary-market">Secondary market(0)</a>
                    </div>

                    <div class="col-12 col-sm-3 col-md-3 col-lg-2 pb-2">
                        <select class="form-select mt-0 " id="sort">
                            <option value="" id="sort1" selected>Sort</option>
                        </select>
                    </div>

                    <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                        <div class="pagination">
                            <a class="active" href="#">1</a>
                            <a href="#">2</a>
                            <a href="#"> > </a>
                            <a href="#">-></a>
                        </div>
                    </div>
                </div><br />

                <div class="row">
                    <div class="col-12">

                        <div class="card mb-3 text-white" style="background: #5582FF;">
                            <div class="row g-0">
                                <div class="col-12 col-sm-8 col-md-4 col-lg-4 col-xl-2">
                                    <img src="https://psgroup.in/blog/wp-content/uploads/2020/11/AURUS_AMP-banner-image-1.jpg" class="home-picture" alt="uy rasmi">
                                </div>
                                <div class="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-10">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-10 col-sm-11 col-md-11 col-lg-11 col-xl-11">
                                                <h5 class="card-title">
                                                    <strong>Flat selling</strong>
                                                </h5>
                                            </div>
                                            <div class="col-2 col-sm-1 col-md-1 col-lg-1 col-xl-1"><img src="/img/Diamond.png" class="diamond" alt="diamond"></div>
                                            <p class="card-text1">Arizona State, Back street, 10a</p>
                                        </div>
                                        <div class="row">
                                            <div class="col-8">
                                                <p class="card-text2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                        </div>
                                        <h4>
                                            78000$
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" class="btn" style="background-color: #FFFFFF;">More </button>
                                            </div>
                                        </h4>
                                        <ul class="info">
                                            <li class="info1">Field: 55kv/m</li>
                                            <li class="info2">Rooms: 3</li>
                                            <li class="info3">Floor: 4/9</li>
                                        </ul>
                                        <p class="date">09 November, 2021 year, 19:19</p>
                                        <div class="row">
                                            <div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1">
                                                <div class="user-icon">
                                                    <img src="/img/icons/user-icon.png" alt="user-icon">
                                                </div>

                                            </div>
                                            <div class="col-9 col-sm-5 col-md-3 col-lg-3 col-xl-2" >
                                                <div class="seller">
                                                    <strong>Abdullokh Khamzaev</strong>
                                                </div>
                                                <div class="star">
                                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.36035 0.248319C5.19978 -0.0284104 4.80015 -0.0284115 4.63957 0.248319L3.50872 2.1972C3.4294 2.3339 3.29229 2.42719 3.13602 2.45079L1.01672 2.77088C0.660768 2.82465 0.53591 3.27407 0.813121 3.50373L2.39191 4.81174C2.53805 4.93282 2.60677 5.12381 2.57127 5.31024L2.15828 7.47905C2.093 7.82189 2.45291 8.08827 2.76172 7.92567L4.75731 6.87491C4.90919 6.79493 5.09073 6.79493 5.24262 6.87491L7.23821 7.92567C7.54702 8.08827 7.90693 7.82189 7.84165 7.47905L7.42866 5.31024C7.39316 5.12381 7.46188 4.93282 7.60802 4.81174L9.18681 3.50373C9.46402 3.27407 9.33916 2.82465 8.98321 2.77088L6.86391 2.45079C6.70763 2.42719 6.57053 2.3339 6.49121 2.1972L5.36035 0.248319Z" fill="white"/>
                                                    </svg>
                                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.36035 0.248319C5.19978 -0.0284104 4.80015 -0.0284115 4.63957 0.248319L3.50872 2.1972C3.4294 2.3339 3.29229 2.42719 3.13602 2.45079L1.01672 2.77088C0.660768 2.82465 0.53591 3.27407 0.813121 3.50373L2.39191 4.81174C2.53805 4.93282 2.60677 5.12381 2.57127 5.31024L2.15828 7.47905C2.093 7.82189 2.45291 8.08827 2.76172 7.92567L4.75731 6.87491C4.90919 6.79493 5.09073 6.79493 5.24262 6.87491L7.23821 7.92567C7.54702 8.08827 7.90693 7.82189 7.84165 7.47905L7.42866 5.31024C7.39316 5.12381 7.46188 4.93282 7.60802 4.81174L9.18681 3.50373C9.46402 3.27407 9.33916 2.82465 8.98321 2.77088L6.86391 2.45079C6.70763 2.42719 6.57053 2.3339 6.49121 2.1972L5.36035 0.248319Z" fill="white"/>
                                                    </svg>
                                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.36035 0.248319C5.19978 -0.0284104 4.80015 -0.0284115 4.63957 0.248319L3.50872 2.1972C3.4294 2.3339 3.29229 2.42719 3.13602 2.45079L1.01672 2.77088C0.660768 2.82465 0.53591 3.27407 0.813121 3.50373L2.39191 4.81174C2.53805 4.93282 2.60677 5.12381 2.57127 5.31024L2.15828 7.47905C2.093 7.82189 2.45291 8.08827 2.76172 7.92567L4.75731 6.87491C4.90919 6.79493 5.09073 6.79493 5.24262 6.87491L7.23821 7.92567C7.54702 8.08827 7.90693 7.82189 7.84165 7.47905L7.42866 5.31024C7.39316 5.12381 7.46188 4.93282 7.60802 4.81174L9.18681 3.50373C9.46402 3.27407 9.33916 2.82465 8.98321 2.77088L6.86391 2.45079C6.70763 2.42719 6.57053 2.3339 6.49121 2.1972L5.36035 0.248319Z" fill="white"/>
                                                    </svg>
                                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.36035 0.248319C5.19978 -0.0284104 4.80015 -0.0284115 4.63957 0.248319L3.50872 2.1972C3.4294 2.3339 3.29229 2.42719 3.13602 2.45079L1.01672 2.77088C0.660768 2.82465 0.53591 3.27407 0.813121 3.50373L2.39191 4.81174C2.53805 4.93282 2.60677 5.12381 2.57127 5.31024L2.15828 7.47905C2.093 7.82189 2.45291 8.08827 2.76172 7.92567L4.75731 6.87491C4.90919 6.79493 5.09073 6.79493 5.24262 6.87491L7.23821 7.92567C7.54702 8.08827 7.90693 7.82189 7.84165 7.47905L7.42866 5.31024C7.39316 5.12381 7.46188 4.93282 7.60802 4.81174L9.18681 3.50373C9.46402 3.27407 9.33916 2.82465 8.98321 2.77088L6.86391 2.45079C6.70763 2.42719 6.57053 2.3339 6.49121 2.1972L5.36035 0.248319Z" fill="white"/>
                                                    </svg>
                                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.36035 0.248319C5.19978 -0.0284104 4.80015 -0.0284115 4.63957 0.248319L3.50872 2.1972C3.4294 2.3339 3.29229 2.42719 3.13602 2.45079L1.01672 2.77088C0.660768 2.82465 0.53591 3.27407 0.813121 3.50373L2.39191 4.81174C2.53805 4.93282 2.60677 5.12381 2.57127 5.31024L2.15828 7.47905C2.093 7.82189 2.45291 8.08827 2.76172 7.92567L4.75731 6.87491C4.90919 6.79493 5.09073 6.79493 5.24262 6.87491L7.23821 7.92567C7.54702 8.08827 7.90693 7.82189 7.84165 7.47905L7.42866 5.31024C7.39316 5.12381 7.46188 4.93282 7.60802 4.81174L9.18681 3.50373C9.46402 3.27407 9.33916 2.82465 8.98321 2.77088L6.86391 2.45079C6.70763 2.42719 6.57053 2.3339 6.49121 2.1972L5.36035 0.248319Z" fill="white"/>
                                                    </svg>
                                                </div>

                                            </div>
                                            <div class="col-sm-5"></div>
                                            <div class="col-12 col-md-7 col-lg-7 col-xl-3">
                                                <div class="row">
                                                    <div class="col-4 col-sm-4">
                                                        <img src="/img/message.png" alt="message" class="message">
                                                    </div>
                                                    <div class="col-2 col-sm-4">
                                                        <img src="/img/bigStart.png" alt="bigStar" class="bigStar">
                                                    </div>
                                                    <div class="col-4 col-sm-4">
                                                        <a href="#">
                                                            <img src="/img/group-phone.png" alt="group-phone" class="contact">
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 text-white " style="background: #5582FF;">
                            <div class="row g-0">
                                <div class="col-12 col-sm-8 col-md-4 col-lg-4 col-xl-2">
                                    <img src="https://www.vasantkunjddaflats.com/wp-content/uploads/2021/02/vs-5.jpg" class="home-picture" alt="uy rasmi">
                                </div>
                                <div class="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-10">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-10 col-sm-11 col-md-11 col-lg-11 col-xl-11">
                                                <h5 class="card-title">
                                                    <strong>Flat selling</strong>
                                                </h5>
                                            </div>
                                            <div class="col-2 col-sm-1 col-md-1 col-lg-1 col-xl-1"><img src="/img/Diamond.png" class="diamond" alt="diamond"></div>
                                            <p class="card-text1">Florida State, Google street, c1</p>
                                        </div>
                                        <div class="row">
                                            <div class="col-8">
                                                <p class="card-text2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                        </div>
                                        <h4>
                                            57000$
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" class="btn" style="color: #5582FF; background-color: #FFFFFF;">More </button>
                                            </div>
                                        </h4>
                                        <ul class="info">
                                            <li class="info1">Field: 50kv/m</li>
                                            <li class="info2">Rooms: 3</li>
                                            <li class="info3">Floor: 2-7/7</li>
                                        </ul>
                                        <p class="date">03 November, 2021 year, 14:34</p>
                                        <div class="row">
                                            <div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1">
                                                <div class="user-icon">
                                                    <img src="/img/icons/user-icon.png" alt="user-icon">
                                                </div>

                                            </div>
                                            <div class="col-9 col-sm-5 col-md-3 col-lg-3 col-xl-2" id="star-user1">
                                                <div class="seller">
                                                    <strong>Abdullokh Khamzaev</strong>
                                                </div>
                                                <div class="star">
                                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.36035 0.248319C5.19978 -0.0284104 4.80015 -0.0284115 4.63957 0.248319L3.50872 2.1972C3.4294 2.3339 3.29229 2.42719 3.13602 2.45079L1.01672 2.77088C0.660768 2.82465 0.53591 3.27407 0.813121 3.50373L2.39191 4.81174C2.53805 4.93282 2.60677 5.12381 2.57127 5.31024L2.15828 7.47905C2.093 7.82189 2.45291 8.08827 2.76172 7.92567L4.75731 6.87491C4.90919 6.79493 5.09073 6.79493 5.24262 6.87491L7.23821 7.92567C7.54702 8.08827 7.90693 7.82189 7.84165 7.47905L7.42866 5.31024C7.39316 5.12381 7.46188 4.93282 7.60802 4.81174L9.18681 3.50373C9.46402 3.27407 9.33916 2.82465 8.98321 2.77088L6.86391 2.45079C6.70763 2.42719 6.57053 2.3339 6.49121 2.1972L5.36035 0.248319Z" fill="white"/>
                                                    </svg>
                                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.36035 0.248319C5.19978 -0.0284104 4.80015 -0.0284115 4.63957 0.248319L3.50872 2.1972C3.4294 2.3339 3.29229 2.42719 3.13602 2.45079L1.01672 2.77088C0.660768 2.82465 0.53591 3.27407 0.813121 3.50373L2.39191 4.81174C2.53805 4.93282 2.60677 5.12381 2.57127 5.31024L2.15828 7.47905C2.093 7.82189 2.45291 8.08827 2.76172 7.92567L4.75731 6.87491C4.90919 6.79493 5.09073 6.79493 5.24262 6.87491L7.23821 7.92567C7.54702 8.08827 7.90693 7.82189 7.84165 7.47905L7.42866 5.31024C7.39316 5.12381 7.46188 4.93282 7.60802 4.81174L9.18681 3.50373C9.46402 3.27407 9.33916 2.82465 8.98321 2.77088L6.86391 2.45079C6.70763 2.42719 6.57053 2.3339 6.49121 2.1972L5.36035 0.248319Z" fill="white"/>
                                                    </svg>
                                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.36035 0.248319C5.19978 -0.0284104 4.80015 -0.0284115 4.63957 0.248319L3.50872 2.1972C3.4294 2.3339 3.29229 2.42719 3.13602 2.45079L1.01672 2.77088C0.660768 2.82465 0.53591 3.27407 0.813121 3.50373L2.39191 4.81174C2.53805 4.93282 2.60677 5.12381 2.57127 5.31024L2.15828 7.47905C2.093 7.82189 2.45291 8.08827 2.76172 7.92567L4.75731 6.87491C4.90919 6.79493 5.09073 6.79493 5.24262 6.87491L7.23821 7.92567C7.54702 8.08827 7.90693 7.82189 7.84165 7.47905L7.42866 5.31024C7.39316 5.12381 7.46188 4.93282 7.60802 4.81174L9.18681 3.50373C9.46402 3.27407 9.33916 2.82465 8.98321 2.77088L6.86391 2.45079C6.70763 2.42719 6.57053 2.3339 6.49121 2.1972L5.36035 0.248319Z" fill="white"/>
                                                    </svg>
                                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.36922 0.714282C3.65023 0.230004 4.34957 0.230006 4.63058 0.714282L5.49114 2.19735C5.57047 2.33405 5.70757 2.42734 5.86385 2.45094L7.29287 2.66678C7.91578 2.76086 8.13428 3.54735 7.64916 3.94926L6.60795 4.8119C6.46181 4.93297 6.3931 5.12396 6.4286 5.31039L6.72025 6.84205C6.8345 7.44203 6.20466 7.90819 5.66424 7.62364L4.24256 6.87506C4.09067 6.79509 3.90913 6.79509 3.75724 6.87506L2.33556 7.62364C1.79514 7.90819 1.16529 7.44203 1.27954 6.84205L1.5712 5.31039C1.6067 5.12396 1.53799 4.93297 1.39184 4.8119L0.350635 3.94926C-0.134483 3.54735 0.0840179 2.76086 0.706933 2.66678L2.13595 2.45094C2.29223 2.42734 2.42933 2.33405 2.50865 2.19735L3.36922 0.714282ZM4.09 1.02796C4.04985 0.958778 3.94994 0.958779 3.9098 1.02796L3.04924 2.51103C2.87473 2.81177 2.5731 3.01701 2.22929 3.06893L0.800273 3.28477C0.711284 3.29821 0.680071 3.41056 0.749373 3.46798L1.79058 4.33061C2.1121 4.59698 2.26327 5.01715 2.18517 5.4273L1.89351 6.95896C1.87719 7.04467 1.96717 7.11127 2.04437 7.07061L3.46605 6.32204C3.8002 6.14609 4.19959 6.14609 4.53375 6.32204L5.95543 7.07061C6.03263 7.11127 6.12261 7.04467 6.10629 6.95896L5.81463 5.4273C5.73653 5.01715 5.8877 4.59698 6.20922 4.33061L7.25042 3.46798C7.31973 3.41056 7.28851 3.29821 7.19953 3.28477L5.77051 3.06893C5.4267 3.01701 5.12507 2.81177 4.95056 2.51103L4.09 1.02796Z" fill="white"/>
                                                    </svg>
                                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.36922 0.714282C3.65023 0.230004 4.34957 0.230006 4.63058 0.714282L5.49114 2.19735C5.57047 2.33405 5.70757 2.42734 5.86385 2.45094L7.29287 2.66678C7.91578 2.76086 8.13428 3.54735 7.64916 3.94926L6.60795 4.8119C6.46181 4.93297 6.3931 5.12396 6.4286 5.31039L6.72025 6.84205C6.8345 7.44203 6.20466 7.90819 5.66424 7.62364L4.24256 6.87506C4.09067 6.79509 3.90913 6.79509 3.75724 6.87506L2.33556 7.62364C1.79514 7.90819 1.16529 7.44203 1.27954 6.84205L1.5712 5.31039C1.6067 5.12396 1.53799 4.93297 1.39184 4.8119L0.350635 3.94926C-0.134483 3.54735 0.0840179 2.76086 0.706933 2.66678L2.13595 2.45094C2.29223 2.42734 2.42933 2.33405 2.50865 2.19735L3.36922 0.714282ZM4.09 1.02796C4.04985 0.958778 3.94994 0.958779 3.9098 1.02796L3.04924 2.51103C2.87473 2.81177 2.5731 3.01701 2.22929 3.06893L0.800273 3.28477C0.711284 3.29821 0.680071 3.41056 0.749373 3.46798L1.79058 4.33061C2.1121 4.59698 2.26327 5.01715 2.18517 5.4273L1.89351 6.95896C1.87719 7.04467 1.96717 7.11127 2.04437 7.07061L3.46605 6.32204C3.8002 6.14609 4.19959 6.14609 4.53375 6.32204L5.95543 7.07061C6.03263 7.11127 6.12261 7.04467 6.10629 6.95896L5.81463 5.4273C5.73653 5.01715 5.8877 4.59698 6.20922 4.33061L7.25042 3.46798C7.31973 3.41056 7.28851 3.29821 7.19953 3.28477L5.77051 3.06893C5.4267 3.01701 5.12507 2.81177 4.95056 2.51103L4.09 1.02796Z" fill="white"/>
                                                    </svg>
                                                </div>

                                            </div>
                                            <div class="col-sm-5"></div>
                                            <div class="col-12 col-md-7 col-lg-7 col-xl-3">
                                                <div class="row">
                                                    <div class="col-4 col-sm-4">
                                                        <img src="/img/message.png" alt="message" class="message">
                                                    </div>
                                                    <div class="col-2 col-sm-4">
                                                        <img src="/img/bigStart.png" alt="bigStar" class="bigStar">
                                                    </div>
                                                    <div class="col-4 col-sm-4">
                                                        <a href="#">
                                                            <img src="/img/group-phone.png" alt="group-phone" class="contact">
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 bg-white text-primary">
                            <div class="row g-0">
                                <div class="col-12 col-sm-8 col-md-4 col-lg-4 col-xl-2">
                                    <img src="https://nextluxury.com/wp-content/uploads/privacy-screen-apartment-patio-ideas-wmorzuzakochana.jpg" class="home-picture" alt="uy rasmi">
                                </div>
                                <div class="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-10">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-10 col-sm-11 col-md-11 col-lg-11 col-xl-11">
                                                <h5 class="card-title">
                                                    <strong>Apartments built in Hi-Tech style are for sale</strong>
                                                </h5>
                                            </div><br/>

                                            <p class="card-text1">California, yandex street, b2</p>
                                        </div>
                                        <div class="row">
                                            <div class="col-8">
                                                <p class="card-text2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                        </div>
                                        <h4>
                                            75000$
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" class="btn" style="border: 0.5px solid #5582FF;">More </button>
                                            </div>
                                        </h4>
                                        <ul class="info" style="color: #5582FF;">
                                            <li class="info1" id="info1" style="border: 0.5px solid #5582FF;">Field: 50kv/m</li>
                                            <li class="info2" id="info2" style="border: 0.5px solid #5582FF;">Rooms: 1-5</li>
                                            <li class="info3" id="info3" style="border: 0.5px solid #5582FF;">Floor:2-8/8</li>
                                        </ul>
                                        <p class="date">09 November, 2021 year, 19:19</p>
                                        <div class="row">
                                            <div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1">
                                                <div class="user-icon">
                                                    <img src="/img/icons/user-icon-1.png" alt="user-icon">
                                                </div>

                                            </div>
                                            <div class="col-9 col-sm-5 col-md-3 col-lg-3 col-xl-2" id="star-user">
                                                <div class="seller">
                                                    <strong>Abdullokh Khamzaev</strong>
                                                </div>
                                                <div class="star">
                                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.36035 0.248319C5.19978 -0.0284104 4.80015 -0.0284115 4.63957 0.248319L3.50872 2.1972C3.4294 2.3339 3.29229 2.42719 3.13602 2.45079L1.01672 2.77088C0.660768 2.82465 0.53591 3.27407 0.813121 3.50373L2.39191 4.81174C2.53805 4.93282 2.60677 5.12381 2.57127 5.31024L2.15828 7.47905C2.093 7.82189 2.45291 8.08827 2.76172 7.92567L4.75731 6.87491C4.90919 6.79493 5.09073 6.79493 5.24262 6.87491L7.23821 7.92567C7.54702 8.08827 7.90693 7.82189 7.84165 7.47905L7.42866 5.31024C7.39316 5.12381 7.46188 4.93282 7.60802 4.81174L9.18681 3.50373C9.46402 3.27407 9.33916 2.82465 8.98321 2.77088L6.86391 2.45079C6.70763 2.42719 6.57053 2.3339 6.49121 2.1972L5.36035 0.248319Z" fill="#5582FF"/>
                                                    </svg>
                                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.36035 0.248319C5.19978 -0.0284104 4.80015 -0.0284115 4.63957 0.248319L3.50872 2.1972C3.4294 2.3339 3.29229 2.42719 3.13602 2.45079L1.01672 2.77088C0.660768 2.82465 0.53591 3.27407 0.813121 3.50373L2.39191 4.81174C2.53805 4.93282 2.60677 5.12381 2.57127 5.31024L2.15828 7.47905C2.093 7.82189 2.45291 8.08827 2.76172 7.92567L4.75731 6.87491C4.90919 6.79493 5.09073 6.79493 5.24262 6.87491L7.23821 7.92567C7.54702 8.08827 7.90693 7.82189 7.84165 7.47905L7.42866 5.31024C7.39316 5.12381 7.46188 4.93282 7.60802 4.81174L9.18681 3.50373C9.46402 3.27407 9.33916 2.82465 8.98321 2.77088L6.86391 2.45079C6.70763 2.42719 6.57053 2.3339 6.49121 2.1972L5.36035 0.248319Z" fill="#5582FF"/>
                                                    </svg>
                                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.36035 0.248319C5.19978 -0.0284104 4.80015 -0.0284115 4.63957 0.248319L3.50872 2.1972C3.4294 2.3339 3.29229 2.42719 3.13602 2.45079L1.01672 2.77088C0.660768 2.82465 0.53591 3.27407 0.813121 3.50373L2.39191 4.81174C2.53805 4.93282 2.60677 5.12381 2.57127 5.31024L2.15828 7.47905C2.093 7.82189 2.45291 8.08827 2.76172 7.92567L4.75731 6.87491C4.90919 6.79493 5.09073 6.79493 5.24262 6.87491L7.23821 7.92567C7.54702 8.08827 7.90693 7.82189 7.84165 7.47905L7.42866 5.31024C7.39316 5.12381 7.46188 4.93282 7.60802 4.81174L9.18681 3.50373C9.46402 3.27407 9.33916 2.82465 8.98321 2.77088L6.86391 2.45079C6.70763 2.42719 6.57053 2.3339 6.49121 2.1972L5.36035 0.248319Z" fill="#5582FF"/>
                                                    </svg>
                                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.36922 0.714282C3.65023 0.230004 4.34957 0.230006 4.63058 0.714282L5.49114 2.19735C5.57047 2.33405 5.70757 2.42734 5.86385 2.45094L7.29287 2.66678C7.91578 2.76086 8.13428 3.54735 7.64916 3.94926L6.60795 4.8119C6.46181 4.93297 6.3931 5.12396 6.4286 5.31039L6.72025 6.84205C6.8345 7.44203 6.20466 7.90819 5.66424 7.62364L4.24256 6.87506C4.09067 6.79509 3.90913 6.79509 3.75724 6.87506L2.33556 7.62364C1.79514 7.90819 1.16529 7.44203 1.27954 6.84205L1.5712 5.31039C1.6067 5.12396 1.53799 4.93297 1.39184 4.8119L0.350635 3.94926C-0.134483 3.54735 0.0840179 2.76086 0.706933 2.66678L2.13595 2.45094C2.29223 2.42734 2.42933 2.33405 2.50865 2.19735L3.36922 0.714282ZM4.09 1.02796C4.04985 0.958778 3.94994 0.958779 3.9098 1.02796L3.04924 2.51103C2.87473 2.81177 2.5731 3.01701 2.22929 3.06893L0.800273 3.28477C0.711284 3.29821 0.680071 3.41056 0.749373 3.46798L1.79058 4.33061C2.1121 4.59698 2.26327 5.01715 2.18517 5.4273L1.89351 6.95896C1.87719 7.04467 1.96717 7.11127 2.04437 7.07061L3.46605 6.32204C3.8002 6.14609 4.19959 6.14609 4.53375 6.32204L5.95543 7.07061C6.03263 7.11127 6.12261 7.04467 6.10629 6.95896L5.81463 5.4273C5.73653 5.01715 5.8877 4.59698 6.20922 4.33061L7.25042 3.46798C7.31973 3.41056 7.28851 3.29821 7.19953 3.28477L5.77051 3.06893C5.4267 3.01701 5.12507 2.81177 4.95056 2.51103L4.09 1.02796Z" fill="#5582FF"/>
                                                    </svg>
                                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.36922 0.714282C3.65023 0.230004 4.34957 0.230006 4.63058 0.714282L5.49114 2.19735C5.57047 2.33405 5.70757 2.42734 5.86385 2.45094L7.29287 2.66678C7.91578 2.76086 8.13428 3.54735 7.64916 3.94926L6.60795 4.8119C6.46181 4.93297 6.3931 5.12396 6.4286 5.31039L6.72025 6.84205C6.8345 7.44203 6.20466 7.90819 5.66424 7.62364L4.24256 6.87506C4.09067 6.79509 3.90913 6.79509 3.75724 6.87506L2.33556 7.62364C1.79514 7.90819 1.16529 7.44203 1.27954 6.84205L1.5712 5.31039C1.6067 5.12396 1.53799 4.93297 1.39184 4.8119L0.350635 3.94926C-0.134483 3.54735 0.0840179 2.76086 0.706933 2.66678L2.13595 2.45094C2.29223 2.42734 2.42933 2.33405 2.50865 2.19735L3.36922 0.714282ZM4.09 1.02796C4.04985 0.958778 3.94994 0.958779 3.9098 1.02796L3.04924 2.51103C2.87473 2.81177 2.5731 3.01701 2.22929 3.06893L0.800273 3.28477C0.711284 3.29821 0.680071 3.41056 0.749373 3.46798L1.79058 4.33061C2.1121 4.59698 2.26327 5.01715 2.18517 5.4273L1.89351 6.95896C1.87719 7.04467 1.96717 7.11127 2.04437 7.07061L3.46605 6.32204C3.8002 6.14609 4.19959 6.14609 4.53375 6.32204L5.95543 7.07061C6.03263 7.11127 6.12261 7.04467 6.10629 6.95896L5.81463 5.4273C5.73653 5.01715 5.8877 4.59698 6.20922 4.33061L7.25042 3.46798C7.31973 3.41056 7.28851 3.29821 7.19953 3.28477L5.77051 3.06893C5.4267 3.01701 5.12507 2.81177 4.95056 2.51103L4.09 1.02796Z" fill="#5582FF"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="col-sm-5"></div>
                                            <div class="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-3">
                                                <div class="row">
                                                    <div class="col-4 col-sm-4">
                                                        <img src="/img/message-blue.png" alt="message" class="message">
                                                    </div>
                                                    <div class="col-2 col-sm-4">
                                                        <img src="/img/icon_company-name-page/BigStart-blue.png" alt="bigStar" class="bigStar">
                                                    </div>
                                                    <div class="col-4 col-sm-4">
                                                        <a href="#">
                                                            <img src="/img/icon_company-name-page/phone.png" alt="group-phone" class="contact">
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 bg-white text-primary">
                            <div class="row g-0">
                                <div class="col-12 col-sm-8 col-md-4 col-lg-4 col-xl-2">
                                    <img src="https://nextluxury.com/wp-content/uploads/privacy-screen-apartment-patio-ideas-wmorzuzakochana.jpg" class="home-picture" alt="uy rasmi">
                                </div>
                                <div class="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-10">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-10 col-sm-11 col-md-11 col-lg-11 col-xl-11">
                                                <h5 class="card-title">
                                                    <strong>Kvartira sotiladi</strong>
                                                </h5>
                                            </div>

                                            <p class="card-text1"> Silicon Valley, 10 b </p>
                                        </div>
                                        <div class="row">
                                            <div class="col-8">
                                                <p class="card-text2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                        </div>
                                        <h4>
                                            94000$
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" class="btn" style="border: 0.5px solid #5582FF;">More </button>
                                            </div>
                                        </h4>
                                        <ul class="info" style="color: #5582FF;">
                                            <li class="info1" id="info1-1" style="border: 0.5px solid #5582FF;">Field: 50kv/m</li>
                                            <li class="info2" id="info2-1" style="border: 0.5px solid #5582FF;">Rooms: 1-5</li>
                                            <li class="info3" id="info3-1" style="border: 0.5px solid #5582FF;">Floor:2-8/8</li>
                                        </ul>
                                        <p class="date">09 November, 2021 year, 19:19</p>
                                        <div class="row">
                                            <div class="col-3 col-sm-2 col-md-2 col-lg-2 col-xl-1">
                                                <div class="user-icon">
                                                    <img src="/img/icons/user-icon-1.png" alt="user-icon">
                                                </div>

                                            </div>
                                            <div class="col-9 col-sm-5 col-md-3 col-lg-3 col-xl-2">
                                                <div class="seller">
                                                    <strong>Abdullokh Khamzaev</strong>
                                                </div>
                                                <div class="star">
                                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.36035 0.248319C5.19978 -0.0284104 4.80015 -0.0284115 4.63957 0.248319L3.50872 2.1972C3.4294 2.3339 3.29229 2.42719 3.13602 2.45079L1.01672 2.77088C0.660768 2.82465 0.53591 3.27407 0.813121 3.50373L2.39191 4.81174C2.53805 4.93282 2.60677 5.12381 2.57127 5.31024L2.15828 7.47905C2.093 7.82189 2.45291 8.08827 2.76172 7.92567L4.75731 6.87491C4.90919 6.79493 5.09073 6.79493 5.24262 6.87491L7.23821 7.92567C7.54702 8.08827 7.90693 7.82189 7.84165 7.47905L7.42866 5.31024C7.39316 5.12381 7.46188 4.93282 7.60802 4.81174L9.18681 3.50373C9.46402 3.27407 9.33916 2.82465 8.98321 2.77088L6.86391 2.45079C6.70763 2.42719 6.57053 2.3339 6.49121 2.1972L5.36035 0.248319Z" fill="#5582FF"/>
                                                    </svg>
                                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.36035 0.248319C5.19978 -0.0284104 4.80015 -0.0284115 4.63957 0.248319L3.50872 2.1972C3.4294 2.3339 3.29229 2.42719 3.13602 2.45079L1.01672 2.77088C0.660768 2.82465 0.53591 3.27407 0.813121 3.50373L2.39191 4.81174C2.53805 4.93282 2.60677 5.12381 2.57127 5.31024L2.15828 7.47905C2.093 7.82189 2.45291 8.08827 2.76172 7.92567L4.75731 6.87491C4.90919 6.79493 5.09073 6.79493 5.24262 6.87491L7.23821 7.92567C7.54702 8.08827 7.90693 7.82189 7.84165 7.47905L7.42866 5.31024C7.39316 5.12381 7.46188 4.93282 7.60802 4.81174L9.18681 3.50373C9.46402 3.27407 9.33916 2.82465 8.98321 2.77088L6.86391 2.45079C6.70763 2.42719 6.57053 2.3339 6.49121 2.1972L5.36035 0.248319Z" fill="#5582FF"/>
                                                    </svg>
                                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.36035 0.248319C5.19978 -0.0284104 4.80015 -0.0284115 4.63957 0.248319L3.50872 2.1972C3.4294 2.3339 3.29229 2.42719 3.13602 2.45079L1.01672 2.77088C0.660768 2.82465 0.53591 3.27407 0.813121 3.50373L2.39191 4.81174C2.53805 4.93282 2.60677 5.12381 2.57127 5.31024L2.15828 7.47905C2.093 7.82189 2.45291 8.08827 2.76172 7.92567L4.75731 6.87491C4.90919 6.79493 5.09073 6.79493 5.24262 6.87491L7.23821 7.92567C7.54702 8.08827 7.90693 7.82189 7.84165 7.47905L7.42866 5.31024C7.39316 5.12381 7.46188 4.93282 7.60802 4.81174L9.18681 3.50373C9.46402 3.27407 9.33916 2.82465 8.98321 2.77088L6.86391 2.45079C6.70763 2.42719 6.57053 2.3339 6.49121 2.1972L5.36035 0.248319Z" fill="#5582FF"/>
                                                    </svg>
                                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.36035 0.248319C5.19978 -0.0284104 4.80015 -0.0284115 4.63957 0.248319L3.50872 2.1972C3.4294 2.3339 3.29229 2.42719 3.13602 2.45079L1.01672 2.77088C0.660768 2.82465 0.53591 3.27407 0.813121 3.50373L2.39191 4.81174C2.53805 4.93282 2.60677 5.12381 2.57127 5.31024L2.15828 7.47905C2.093 7.82189 2.45291 8.08827 2.76172 7.92567L4.75731 6.87491C4.90919 6.79493 5.09073 6.79493 5.24262 6.87491L7.23821 7.92567C7.54702 8.08827 7.90693 7.82189 7.84165 7.47905L7.42866 5.31024C7.39316 5.12381 7.46188 4.93282 7.60802 4.81174L9.18681 3.50373C9.46402 3.27407 9.33916 2.82465 8.98321 2.77088L6.86391 2.45079C6.70763 2.42719 6.57053 2.3339 6.49121 2.1972L5.36035 0.248319Z" fill="#5582FF"/>
                                                    </svg>
                                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.36035 0.248319C5.19978 -0.0284104 4.80015 -0.0284115 4.63957 0.248319L3.50872 2.1972C3.4294 2.3339 3.29229 2.42719 3.13602 2.45079L1.01672 2.77088C0.660768 2.82465 0.53591 3.27407 0.813121 3.50373L2.39191 4.81174C2.53805 4.93282 2.60677 5.12381 2.57127 5.31024L2.15828 7.47905C2.093 7.82189 2.45291 8.08827 2.76172 7.92567L4.75731 6.87491C4.90919 6.79493 5.09073 6.79493 5.24262 6.87491L7.23821 7.92567C7.54702 8.08827 7.90693 7.82189 7.84165 7.47905L7.42866 5.31024C7.39316 5.12381 7.46188 4.93282 7.60802 4.81174L9.18681 3.50373C9.46402 3.27407 9.33916 2.82465 8.98321 2.77088L6.86391 2.45079C6.70763 2.42719 6.57053 2.3339 6.49121 2.1972L5.36035 0.248319Z" fill="#5582FF"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="col-sm-5"></div>
                                            <div class="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-3">
                                                <div class="row">
                                                    <div class="col-4 col-sm-4">
                                                        <img src="/img/message-blue.png" alt="message" class="message">
                                                    </div>
                                                    <div class="col-2 col-sm-4">
                                                        <img src="/img/icon_company-name-page/BigStart-blue.png" alt="bigStar" class="bigStar">
                                                    </div>
                                                    <div class="col-4 col-sm-4">
                                                        <a href="#">
                                                            <img src="/img/icon_company-name-page/phone.png" alt="group-phone" class="contact">
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-8">
                            </div>
                            <div class="col-12 col-lg-4">
                                <div class="pagination">
                                    <a class="active" href="#">1</a>
                                    <a href="#">2</a>
                                    <a href="#"> > </a>
                                    <a href="#">-></a>
                                </div>
                            </div>
                        </div><br />
                    </div>
                </div>

            </div>

            <div class="col-1"></div>
        </div>
        <div class="row">
            <div class="col">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchHouse",
}
</script>

<style scoped>
* {
    font-family: Rubik, "sans-serif";
}

#selectToastPlacement1{
    border-radius: 10px;
    height: 36px;
    left: 82px;
    top: 152px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    color: #000000;
}

#selectToastPlacement2{
    height: 36px;
    left: 295px;
    top: 152px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    border-radius: 10px;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    color: #000000;
}

#selectToastPlacement3{
    height: 36px;
    left: 621px;
    top: 152px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    border-radius: 10px;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    color: #000000;
}

#selectToastPlacement4{
    height: 36px;
    left: 760px;
    top: 152px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    border-radius: 10px;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    color: #000000;
}

#selectToastPlacement5{
    height: 36px;
    left: 854px;
    top: 152px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    border-radius: 10px;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    color: #000000;
}

#search{
    width: 77px;
    height: 36px;
    background: #5582FF;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-left: 0;
    margin-right: 0;
    left: 1002px;
    top: 161px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    color: #FFFFFF;
}

#line{
    height: 0;
    left: 82px;
    top: 202px;
    transform: rotate(0.01deg);
}

.all{
    position: static;
    width: 64px;
    height: 14px;
    left: 0;
    top: 0;
    font-size: 12px;
    line-height: 14px;
    align-items: center;
    color: #00066E;
    text-decoration: none;
}

.triple {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.new{
    position: static;
    height: 14px;
    left: 101px;
    font-size: 12px;
    line-height: 14px;
    padding-right: 5px;
    color: #000000;
    text-decoration: none;
}

.secondary-market {
    height: 14px;
    left: 258px;
    top: 0;
    font-size: 12px;
    line-height: 14px;
    justify-content: center;
    color: #000000;
    text-decoration: none;
    flex: none;
    order: 2;
    flex-grow: 0;
}
.pagination a{
    display: flex;
    margin: 0 auto;
    text-decoration: none;
    justify-content: flex-start;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
    color: black;
    padding-top: 0;
}

.pagination a.active{
    border: 1px solid #00066E;
    border-radius: 10px;
    justify-content: center;
    margin-left: 50px;
}

.icon{
    left: 14.26%;
    right: 13.25%;
    top: 14.26%;
    bottom: 13.25%;
    padding-left: 4px;
}

#sort{
    height: 36px;
    left: 621px;
    top: 216px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    border-radius: 10px;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
}

.home-picture{
    height: auto;
    width: 88%;
    display: block;
    margin: 30px auto auto 16px;
    border-radius: 10px;
}
h5{
    height: 28px;
    left: 340px;
    top: 309px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    display: inline-block;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0;
    padding-top: 20px;
    padding-left: 15px;
}

.card-text1{
    padding-left: 26px;
    height: 15px;
    left: 340px;
    top: 337px;
    font-size: 13px;
    line-height: 15px;
    display: inline-block;
    align-items: center;
}
.card-text2{
    font-size: 10px;
    line-height: 12px;
    display: flex;
    align-items: center;
    padding-left: 17px;
    padding-top: 10px;
    justify-content: center;
}

h4{
    padding-left: 17px;
}

.info{
    font-size: 7px;
    line-height: 8px;
    display: flex;
    list-style: none;
    color: #FFFFFF;
    padding-left: 17px;
    padding-bottom: 0;
}

.info1{
    width: 72px;
    height: 16px;
    left: 340px;
    top: 431px;
    border: 0.5px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 3px;
    justify-content: center;
    align-items: center;
    padding-left: 7px;
    padding-top: 3px;
}

.info2{
    width: 48px;
    height: 16px;
    left: 417px;
    top: 431px;
    border: 0.5px solid #FFFFFF;
    border-radius: 3px;
    padding-left: 5px;
    padding-top: 3px;
    margin-left: 10px;
    justify-content: center;
}

.info3{
    width: 47px;
    height: 16px;
    left: 467px;
    top: 431px;
    border: 0.5px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 3px;
    padding-left: 5px;
    padding-top: 3px;
    margin-left: 10px;
}
.date{
    padding-left: 17px;
    height: 8px;
    left: 340px;
    top: 456px;
    font-size: 7px;
    line-height: 8px;
    display: flex;
    align-items: center;
}

.btn{
    color: #5582FF;
    width: 38px;
    height: 16px;
    font-size: 7px;
    line-height: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.seller{
    height: 12px;
    left: 381px;
    top: 487px;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    display: flex;
    align-items: flex-start;
    padding-bottom: 5px;
    justify-content: start;
    width: 140px;
}

.user-icon{
    justify-content: flex-end;
    padding-left: 17px;
    display: inline-table;
    margin-right: 5px;
}

.bigStar{
    padding-right: 40px;
}
.message{
    justify-content: flex-end;
    padding-right: 20px;
    margin-left: 20px;
}

.contact{
    width: 102px;
    height: 36px;
    left: 942px;
    top: 483px;
    background: #FFFFFF;
    border-radius: 10px;
}

</style>