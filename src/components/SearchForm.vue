<template>
    <div class="container">
        <!-- Search -->
        <div class="container">
            <div class="row">
                <div class="search">
                    Search
                </div>
            </div>
        </div>

        <!-- Search card -->
        <form>
            <div class="row">
                <div class="titles mt-4 ms-4">
                    <input type="radio" class="btn-check" name="option" id='sell' autocomplete="off" checked>
                    <label class="btn text-light me-2" for="sell">Sell</label>
                    <input type="radio" class="btn-check" name="option" id='rent' autocomplete="off" >
                    <label class="btn text-light me-2" for="rent">Rent</label>
                    <input type="radio" class="btn-check" name="option" id='new_house' autocomplete="off">
                    <label class="btn text-light me-2" for="new_house">New house</label>
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-sm-12 col-md-6">

                    <div class="row ms-3 me-3">
                        <div class="col-12 col-sm-6 mt-4">
                            <select class="form-select province" aria-label="Default select example" v-model="form.state">
                                <option selected disabled value="">Province...</option>
                                <option
                                    v-for="house in 10"
                                    :key="house.index"
                                    :value="'/api/houses/' + house.index"
                                >
                                    {{ house }} province
                                </option>
                            </select>
                        </div>
                        <div class="col-12 col-sm-6 mt-4">
                            <select class="form-select building" aria-label="Default select example" v-model="form.type">
                                <option selected disabled value="">type of building...</option>
                                <option
                                    v-for="house in 5"
                                    :key="house.index"
                                    :value=" '/api/houses/' + house.index"
                                >
                                    {{house}} type
                                </option>
                            </select>
                        </div>
                    </div>

                    <div
                        class="row ms-3 me-3">
                        <div class="col-12 mt-4">
                            <input
                                type="text"
                                class="form-control address"
                                placeholder="add address..."
                                aria-label="Username"
                                aria-describedby="addon-wrapping"
                            >
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-12 col-md-6">

                    <div class="row ms-3 me-3">
                        <div class="col-12 mt-4">
                            <div class="input-group">
                                <input type="text" class="form-control fromPrice" placeholder="price to" aria-label="Username">
                                <input type="text" class="form-control price" placeholder="price" aria-label="Server">
                            </div>
                        </div>
                    </div>

                    <div class="row ms-3 me-3">
                        <div class="col-12 col-sm-6 mt-4">
                            <select class="form-select filter" aria-label="Default select example">
                                <option selected>additional filters</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="col-12 col-sm-6 mt-4 mb-5 d-flex justify-content-end">
                            <button type="submit" class="btn-search">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "SearchForm",
    data() {
        return {
            form: {
                state: '',
                type: '',
            }
        }
    }
}
</script>

<style scoped>
.search {
    font-size: 36px;
    color: #00066E;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-style: normal;
}

form {
    background-color: #5582FF;
    border-radius: 17px;
    font-family: 'Rubik', sans-serif;
}

.province, .building, .address, .filter, .fromPrice, .price, .btn-search {
    border-radius: 17px;
}

.btn-search {
    background-color: #00066E;
    color: white;
    width: 180px;
    height: 38px;
}

input[type="radio"] {
    display: none;
}

input[type="radio"]:checked + .btn {
    color: #fff;
    background-color: #00066E;
    border-radius: 17px;
}
</style>