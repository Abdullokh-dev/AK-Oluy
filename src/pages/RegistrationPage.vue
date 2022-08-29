  <template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-10 col-sm-10 col-md-10 col-xl-7 col-xxl-7 mt-5 mx-5 my-6 border: solid border-radius: 3px">
                <div class="card mb-xl-4">
                    <div class="card-body">
                        <form @submit.prevent="register">
                            <h1>Sign up</h1>
                            <div class="mb-3">
                                <select class="form-select" aria-label="Disabled select example" >
                                    <option selected>Physical person</option>
                                    <option value="1">Legal entity</option>

                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputText1" class="form-label"></label>
                                <input type="text" class="form-control" id="exampleInputText1" aria-describedby="textHelp" placeholder="Name*" required>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputText2" class="form-label"></label>
                                <input type="text" class="form-control" id="exampleInputtext2" aria-describedby="textHelp" placeholder="FamilyName*" required>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail3" class="form-label"></label>
                                <input type="email" class="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Email*" required>
                            </div>
                            <div class="mb-5">
                                <label for="exampleInputPassword1" class="form-label"></label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password*" required :minlength="6">
                            </div>
                            <div class="mb-4">
                                <input type="tel" class="form-control" placeholder="Phone*" value="+998" required>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" required>
                                <label class="form-check-label" for="exampleCheck1">I accept the terms of use of the site</label>
                            </div>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end mx-6">
                                <router-link to="/login" class="btn">I have an account</router-link>
                                <button type="submit" @click="shouldShowUsers = false" class="btn btn-primary me-md-2">Sign up</button>
                            </div>
                        </form>
                     </div>
                </div>
            </div>
            <div class="col-10 col-sm-10 col-md-10 col-xl-3 col-xxl-2 mt-5 mx-5 my-6 border: solid border-radius: 3px">
                <div class="card mb-4" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Warning</h5>
                        <p>
                            We ask you to register in order to fully use the possibilities of our site
                        </p>
                        <p>
                            You can easily sell your apartment through this portal,
                            you can rent or buy a new house for yourself.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

export default {
    name: "registration",
    methods: {
        register() {
            this.$router.push('/login')
        }
    },
}
</script>

<style scoped>
    h1, h5, p {
        color: #00066E
    }
    button {
        margin: auto;
        padding: 10px 40px;
    }

</style>
