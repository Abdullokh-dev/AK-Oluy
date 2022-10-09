<template>
    <div class="container">
        <form class="advertisement-page">
            <div class="ad-title">
                <h1>Add an ad</h1>
                <h5>Informations:</h5>
            </div>

            <div class="i">
                <h5>I want</h5>
                <div class="row col-12">
                    <div class="house-type col-xl-4">
                        <input type="radio" class="btn-check col-12 col-sm-6 col-md-4" name="options" :value="1" id="Apartment" autocomplete="off" checked>
                        <label class="btn btn-outline-primary" for="Apartment">Apartment</label>
                        <input type="radio" class="btn-check col-12 col-sm-6 col-md-4" name="options" :value="2" id="Plot" autocomplete="on">
                        <label class="btn btn-outline-primary" for="Plot">Plot</label>
                        <input type="radio" class="btn-check col-12 col-sm-6 col-md-4" name="options" :value="3" id="dacha" autocomplete="off">
                        <label class="btn btn-outline-primary" for="dacha">Plot</label>
                        <input type="radio" class="btn-check col-12 col-sm-6 col-md-4" name="options" :value="4" id="Unsettled" autocomplete="off">
                        <label class="btn btn-outline-primary" for="Unsettled">Unsettled place</label>
                        <span class="looking-for">to</span>
                    </div>
                    <div class="to-do col-xl-6" :aria-checked="checkAll">
                        <input type="radio" class="btn-check col-sm-6 col-md-4" :value="true" name="maqsadoptions" id="sotmoqchiman" autocomplete="off" checked v-model="from.isForSale">
                        <label class="btn btn-outline-primary" for="sotmoqchiman">Sell</label>
                        <input type="radio" class="btn-check col-sm-6 col-md-4" :value="false" name="maqsadoptions" id="ijaragabermoqchiman" autocomplete="off" v-model="from.isForSale">
                        <label class="btn btn-outline-primary" for="ijaragabermoqchiman">Rent</label>
                    </div>
                </div>
            </div>

            <div class="hr"></div>

            <div class="parameters">
                <h5>Parameters</h5>
                <div class="row parameters-box col-12">
                    <div class="form-group col-md-4 col-xl-4">
                        <select class="custom-select  mt-0 mb-23" id="inlineFormCustomSelectPref">
                            <option selected value="" disabled>Rooms</option>
                            <option :value="1">1 room</option>
                            <option :value="2">2 rooms</option>
                            <option :value="3">3 rooms</option>
                        </select>
                    </div>
                    <div class="form-group col-md-4 col-xi-3">
                        <input type="text" class="form-text mt-0 mb-23" id="exampleFormControlInput1" placeholder="Field, m.kv">
                    </div>
                    <div class="form-group col-md-4 col-xl-3">
                        <div class="form-group">
                            <input type="text" class="form-text mt-0 mb-23" id="exampleFormControlInput1" placeholder="Living space, m.kv">
                        </div>
                    </div>
                </div>
                <div class="row parameters-box col-12">
                    <div class="form-group col-md-4 col-xi-3">
                        <select class="custom-select mt-0" id="inlineFormCustomSelectPref">
                            <option selected value="" disabled>Floor</option>
                            <option :value="1">1 floor</option>
                            <option :value="2">2 floors</option>
                            <option :value="3">3 floors</option>
                        </select>
                    </div>
                    <div class="form-group col-md-4 col-xi-3">
                        <select class="custom-select  mt-0" id="inlineFormCustomSelectPref">
                            <option selected value="" disabled>Total floors</option>
                            <option :value="1">9 floors</option>
                            <option :value="2">5 floor</option>
                            <option :value="3">4 floors</option>
                        </select>
                    </div>
                </div>
                <div class="row parameters-box col-12">
                    <div class="form-group col-md-4 col-xi-3">
                        <select class="custom-select  mt-0" id="inlineFormCustomSelectPref">
                            <option selected value="" disabled>Building foundation</option>
                            <option :value="1">Brick</option>
                            <option :value="2">Concrete</option>
                            <option :value="3">other</option>
                        </select>
                    </div>
                    <div class="form-group col-md-4 col-xi-3">
                        <select class="custom-select  mt-0" id="inlineFormCustomSelectPref">
                            <option selected value="" disabled>Status</option>
                            <option :value="1">New</option>
                            <option :value="2">Normal</option>
                            <option :value="3">Repair required</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="hr2"></div>

            <div class="additional-features">
                <h5 class="mb-3">Additional amenities</h5>
                <div class="row">
                    <div class="features-check col-12 col-md-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" v-bind:checked="checkAll" v-model="from.hasLift">
                            <label class="form-check-label" for="flexCheckChecked">
                                Lift
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1"  v-bind:checked="checkAll" v-model="from.hasConditioner">
                            <label class="form-check-label" for="flexCheckDefault1">
                                Conditioner
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" v-bind:checked="checkAll" v-model="from.hasBathroom">
                            <label class="form-check-label" for="flexCheckDefault2">
                                Separate bathroom
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3" v-bind:checked="checkAll" v-model="from.hasInternet">
                            <label class="form-check-label" for="flexCheckDefault3">
                                Internet
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault4" v-bind:checked="checkAll" v-model="from.hasWasher">
                            <label class="form-check-label" for="flexCheckDefault4">
                                Washing machine
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault5" v-bind:checked="checkAll" v-model="from.hasBasin">
                            <label class="form-check-label" for="flexCheckDefault5">
                                Pool
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault6" v-bind:checked="checkAll" v-model="from.hasSauna">
                            <label class="form-check-label" for="flexCheckDefault6">
                                Sauna
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault7" v-bind:checked="checkAll" v-model="from.hasFurniture">
                            <label class="form-check-label" for="flexCheckDefault7">
                                Furniture
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault8" v-bind:checked="checkAll" v-model="from.hasMicrowave">
                            <label class="form-check-label" for="flexCheckDefault8">
                                Microwave
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault9" v-bind:checked="checkAll" v-model="from.hasFridge">
                            <label class="form-check-label" for="flexCheckDefault9">
                                Refrigerator
                            </label>
                        </div>
                    </div>
                    <div class="features-check col-12 col-md-4">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault10" v-bind:checked="checkAll" v-model="from.hasTelephone">
                            <label class="form-check-label" for="flexCheckDefault10">
                                Telephone network
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11" v-bind:checked="checkAll" v-model="from.hasSecurity">
                            <label class="form-check-label" for="flexCheckDefault11">
                                Security
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault12" v-bind:checked="checkAll" v-model="from.hasTV">
                            <label class="form-check-label" for="flexCheckDefault12">
                                TV set
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault13" v-bind:checked="checkAll" v-model="from.hasVideo">
                            <label class="form-check-label" for="flexCheckDefault13">
                                Video surveillance
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault14" v-bind:checked="checkAll" v-model="from.hasPlayground">
                            <label class="form-check-label" for="flexCheckDefault14">
                                Playground
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault15" v-bind:checked="checkAll" v-model="from.hasSatellite">
                            <label class="form-check-label" for="flexCheckDefault15">
                                Satellite/Cable TV
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault16" v-bind:checked="checkAll" v-model="from.hasWater">
                            <label class="form-check-label" for="flexCheckDefault16">
                                Water supply
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault17" v-bind:checked="checkAll" v-model="from.hasCanalization">
                            <label class="form-check-label" for="flexCheckDefault17">
                                Sewage
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault18" v-bind:checked="checkAll" v-model="from.hasGas">
                            <label class="form-check-label" for="flexCheckDefault18">
                                Gas supply
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault19" v-bind:checked="checkAll" v-model="from.hasParking">
                            <label class="form-check-label" for="flexCheckDefault19">
                                Parking lot
                            </label>
                        </div>
                    </div>
                </div>

                <div class="features-button">
                    <button type="button" @click='check' class="btn btn-primary">All</button>
                    <button type="button" @click='uncheck' class="btn btn-outline-primary">Cancel</button>
                </div>
            </div>

            <div class="hr3"></div>

            <div class="description">
                <span class="description"><label for="description">Description</label></span>
                <textarea class="form-text-description col-12 " placeholder="Description" id="description" v-model="from.description" ></textarea>
            </div>

            <div class="hr3"></div>

            <div class="house-pictures">
                <h5>Pictures</h5>
                <div class="house-image-size col-12">The size of the file must not exceed 9.5 MB and its types must be jpg, gif, png, jpeg.</div>
                <div class="row">
                    <div class="img col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <label for="firstimg"><span class="imgfile" >+</span></label>
                        <input type="file" name="myFile" id="firstimg" style="display: none">
                    </div>
                    <div class="img col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <label for="firstimg1"><span class="imgfile">+</span></label>
                        <input type="file" name="myFile" id="firstimg1" style="display: none">
                    </div>
                    <div class="img col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <label for="firstimg2"><span class="imgfile">+</span></label>
                        <input type="file" name="myFile" id="firstimg2" style="display: none">
                    </div>
                    <div class="img col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <label for="firstimg"><span class="imgfile" >+</span></label>
                        <input type="file" name="myFile" id="firstimg3" style="display: none">
                    </div>
                    <div class="img col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 " >
                        <label for="firstimg1"><span class="imgfile">+</span></label>
                        <input type="file" name="myFile" id="firstimg4" style="display: none">
                    </div>
                    <div class="img col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <label for="firstimg"><span class="imgfile" >+</span></label>
                        <input type="file" name="myFile" id="firstimg5" style="display: none">
                    </div>
                    <div class="img col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <label for="firstimg1"><span class="imgfile">+</span></label>
                        <input type="file" name="myFile" id="firstimg6" style="display: none">
                    </div>
                    <div class="img col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <label for="firstimg"><span class="imgfile" >+</span></label>
                        <input type="file" name="myFile" id="firstimg7" style="display: none">
                    </div>
                </div>
            </div>

            <div class="clear"></div>

            <div class="hr4"></div>

            <div class="form-submit-button">
                <button type="submit" @click="Alert =false" class="btn btn-primary">Save</button>
            </div>
        </form>
        <br/><br/><br/>
    </div>
</template>

<script>
export default {
    name: "AddAdvertisementPage",
    methods: {
        check() {
            console.log(
                this.from.hasLift = true,
                this.from.hasConditioner = true,
                this.from.hasBathroom = true,
                this.from.hasInternet = true,
                this.from.hasWasher = true,
                this.from.hasBasin = true,
                this.from.hasSauna = true,
                this.from.hasFurniture = true,
                this.from.hasMicrowave = true,
                this.from.hasFridge = true,
                this.from.hasTelephone = true,
                this.from.hasSecurity = true,
                this.from.hasTV = true,
                this.from.hasVideo = true,
                this.from.hasPlayground = true,
                this.from.hasSatellite = true,
                this.from.hasWater = true,
                this.from.hasCanalization = true,
                this.from.hasGas = true,
                this.from.hasParking = true,
          )
        },
        uncheck() {
            console.log(
                this.from.hasLift = false,
                this.from.hasConditioner = false,
                this.from.hasBathroom = false,
                this.from.hasInternet = false,
                this.from.hasWasher = false,
                this.from.hasBasin = false,
                this.from.hasSauna = false,
                this.from.hasFurniture = false,
                this.from.hasMicrowave = false,
                this.from.hasFridge = false,
                this.from.hasTelephone = false,
                this.from.hasSecurity = false,
                this.from.hasTV = false,
                this.from.hasVideo = false,
                this.from.hasPlayground = false,
                this.from.hasSatellite = false,
                this.from.hasWater = false,
                this.from.hasCanalization = false,
                this.from.hasGas = false,
                this.from.hasParking = false,
            )
        }
    },
    data() {
        return {
            from: {
                type: '',
                isForSale: '',
                address: '',
                rooms: '',
                floor: '',
                floors: '',
                area: '',
                liveArea: '',
                state: '',
                base: '',
                description: '',
                hasLift: '',
                hasConditioner: '',
                hasBathroom: '',
                hasInternet: '',
                hasWasher: '',
                hasBasin: '',
                hasSauna: '',
                hasFurniture: '',
                hasMicrowave: '',
                hasFridge: '',
                hasTelephone: '',
                hasSecurity: '',
                hasTV: '',
                hasVideo: '',
                hasPlayground: '',
                hasSatellite: '',
                hasWater: '',
                hasCanalization: '',
                hasGas: '',
                hasParking: '',
            },
            checkAll: false,
        }
    }
}
</script>

<style scoped>
.advertisement-page {
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    margin-left: 82px;
    margin-right: 82px;
    margin-top: 76px;
}

.ad-title, h1 {
    font-size: 36px;
    letter-spacing: 0.1rem;
    margin-bottom: 34px;
    color: #00066E;
}

.ad-title h5 {
    font-size: 18px;
    letter-spacing: 0.1rem;
    margin-bottom: 91px;
    color: #000000;
}
.i h5 {
    font-size: 18px;
    letter-spacing: 0.1rem;
    margin-bottom: 8px;
    color: #000000;
}

.i label {
    font-size: 14px;
    font-weight: 400;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    margin-right: 13px;
    margin-bottom: 13px;
    padding: 9px 15px;
    background-color: #FFFFFF;
    color: #000000;
}

input[type="radio"] {
    display: none;
}

input[type="radio"]:checked + .btn {
    color: #fff;
    background: #5582FF!important;
}

.house-type {
    inline-size: 447px;
    padding-right: 0;
}

.to-do {
    padding-left: 13px;
}

.looking-for {
    padding-left: 0;
    font-size: 18px;
    letter-spacing: 0.1rem;
    color: #000000;
    margin-bottom: 13px;
}

.hr2 {
    margin-top: 7px;
    margin-bottom: 32px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    transform: rotate(0.01deg);
    background-color: #000000;
    opacity: 25%;
}

.hr3 {
    margin-top: 43px;
    margin-bottom: 32px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    transform: rotate(0.01deg);
    background-color: #000000;
    opacity: 25%;
}

.house-location h5 {
    font-size: 18px;
    letter-spacing: 0.1rem;
    margin-bottom: 8px;
}

.hr {
    margin-top: 43px;
    margin-bottom: 32px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    transform: rotate(0.01deg);
    background-color: #000000;
    opacity: 25%;
}

.parameters h5 {
    font-size: 18px;
    letter-spacing: 0.1rem;
    margin-bottom: 23px;
}

.parameters-box {
    margin-right: 147px;
}

.parameters-box select {
    font-size: 14px;
    font-weight: 400;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    margin-bottom: 36px;
    padding: 9px 14px;
    width: 172px;
    height: 36px;
    background-color: #FFFFFF;
    color: #000000;
}

.form-text {
    font-size: 14px;
    font-weight: 400;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    margin-bottom: 36px;
    width: 172px;
    height: 36px;
    padding: 9px 14px;
    background-color: #FFFFFF;
    color: #000000;
}

input::placeholder {
    font-size: 14px;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    opacity: 50%;
    color: #000000;
}

.additional-features h5 {
    font-size: 18px;
    letter-spacing: 0.1rem;
    margin-bottom: 43px;
    color: #000000;
}
.form-check-input:checked {
    background-color: #5582FF;
    border-color: rgba(0, 0, 0, 0.01);
}
input.form-check-input {
    width: 20px;
    height: 20px;
}

.features-check {
    width: 220px;
}

.form-check-label {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 15px;
    margin-left: 14px;
}

.features-button button {
    font-size: 14px;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    border-radius: 10px;
    margin-right: 23px;
    margin-top: 13px;

}
.btn-primary {
    background-color: #5582FF;
}

.btn-outline-primary{
    color: #000000;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.5);
}

.description span {
    font-size: 18px;
    letter-spacing: 0.1rem;
    margin-bottom: 23px;
    color: #000000;
}

.form-text-description {
    padding: 20px;
    resize: none;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    height: 267px;
}

textarea::placeholder {
    font-size: 14px;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    color: #000000;
    opacity: 50%;
    padding: 10px;
}

.house-pictures h5 {
    font-size: 18px;
    letter-spacing: 0.1rem;
    color: #000000;
    margin-bottom: 8px;
}

.house-image-size {
    margin-bottom: 23px;
    font-size: 14px;
    color: #000000;
    opacity: 50%;
}

.house-image-frames li {
    width: 128px;
    height: 128px;
    list-style-type: none;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    margin-left: 0;
    margin-bottom: 32px;
    margin-right: 32px;

}
.house-image-frames ul li:after {
    padding-left:  0;
    content: '\02795';
    font-size: 13px;
    color: #777;
    position: relative;
    left: 4em;
    top: 4em;
}

.imgfile {

    width: 128px;
    height: 128px;
    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 25px;
    cursor: pointer;
    color: #777;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    margin-bottom: 30px;
}

.house-image-frames ul {
    padding-left: 0;
}

.hr4 {
    margin-top: 11px;
    margin-bottom: 49px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    transform: rotate(0.01deg);
    background-color: #000000;
    opacity: 25%;
}

.form-submit-button button {
    font-size: 14px;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    border-radius: 10px;
    margin-right: 23px;
    margin-top: 13px;
}

</style>
