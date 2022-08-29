<template>
    <div class="container">
        <div class="row">

            <!--start of left side-->
            <div class="col-xs-12 col-sm-12 col-md-5 col-lg-4 col-xl-4 mt-5">
                <div class="formTitle">
                    <h1>Help</h1>
                </div>
                <div class="card_item">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">General questions</li>
                        <li class="list-group-item">About posting an ad</li>
                        <li class="list-group-item">About search</li>
                    </ul>
                </div>

                <div class="input_form mb-3">
                    <form>
                        <div class="ask_me">
                            <h5>Ask the question</h5>
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control" placeholder="Name*" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Email*" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <input type="tel" class="form-control" placeholder="Telephone" value="+998" id="exampleInputPassword1">
                        </div>
                        <div class="mb-3 questions-select-form">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>General questions</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="question-area mb-3">
                            <div class="form-floating">
                                <textarea class="form-control" id="floatingTextarea"></textarea>
                                <label for="floatingTextarea">Your question</label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Send question</button>
                    </form>
                </div>
            </div>
            <!--end of left side-->


            <!--start of right side-->
            <div class="col-xs-12 col-sm-12 col-md-7 col-lg-8 col-xl-8 mt-5 pt-5">
                <h2 class="formTitle">-GENERAL QUESTIONS</h2>
                <div class="accordions">
                    <div class="accordion" id="accordionPanelsStayOpenExample">

                        <!--start of accordion-->
                        <div class="accordion-item mb-3">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    I want to sell my house, I need realtor help!
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                 data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare elit nulla, a
                                    interdum nisl condimentum non. Vestibulum urna libero, cursus id diam id, euismod
                                    pharetra nulla.
                                </div>
                            </div>
                        </div>
                        <!--end of accordion-->

                        <!--start of accordion-->
                        <div class="accordion-item mb-3">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                        aria-controls="panelsStayOpen-collapseOne">
                                    Price of houses in newly built constructions I wanted to know
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
                                 aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare elit nulla, a
                                    interdum nisl condimentum non. Vestibulum urna libero, cursus id diam id, euismod
                                    pharetra nulla.
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--end of accordion-->

                    <h2 class="formTitle">-ADD AN AD</h2>

                    <!--start of accordion-->
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseTwo">
                                I wanted to add an ad, please help
                                can you?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
                             aria-labelledby="panelsStayOpen-headingTwo">
                            <div class="accordion-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare elit nulla, a
                                interdum nisl condimentum non. Vestibulum urna libero, cursus id diam id, euismod
                                pharetra nulla.
                            </div>
                        </div>
                    </div>
                    <!--end of accordion-->

                    <h2 class="formTitle mt-5">-SEARCH</h2>

                    <!--start of accordion-->
                    <div class="accordion-item mb-5">
                        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseThree">
                                3-room house near Arizona metro station, Florida district
                                must!
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse"
                             aria-labelledby="panelsStayOpen-headingThree">
                            <div class="accordion-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare elit nulla, a
                                interdum nisl condimentum non. Vestibulum urna libero, cursus id diam id, euismod
                                pharetra nulla.
                            </div>
                        </div>
                    </div>
                </div>
                <!--end of right side-->

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Help"
}
</script>

<style scoped>
.formTitle {
    color: #00066E;
    font-family: 'rubik', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
}

.card_item, .list-group, .list-group-flush {
    border-radius: 10px;
}

.card_item {
    border: 1px solid #000000;
}

.list-group-item {
    height: 53px;
}

.accordion-item h2 button {
    position: relative;
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5) !important;
    height: 45px;
    border-radius: 15px !important;
}


.accordion-item {
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 10px;
}

.accordion-button:not(.collapsed) {
    background: #FFFFFF;
    color: #000000;
}

.input_form {
    margin-top: 30px;
    border: 1px solid #000000;
    border-radius: 10px;
    padding: 15px;
}

.btn, .btn-primary {
    width: 100%;
}


</style>