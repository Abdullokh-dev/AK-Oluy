<template>
    <div>
        <div class="container">
            <div class="row my-5 py-5">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 mb-5">
                    <div class="card">
                        <form class="login">
                            <div class="login-title">
                                Log in
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" autocomplete="username" class="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp">
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" autocomplete="current-password" id="exampleInputPassword1">
                            </div>

                            <button type="submit" @click="auth" class="btn btn-primary">Log in</button>
                        </form>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-10 col-md-8 col-lg-4 col-xl-4">
                    <div class="card">
                        <div class="card-body">
                            <h5>Warning</h5>
                            <p>To fully use the possibilities of our site
                                we ask you to pass the authorization.
                            </p>
                            <p>
                                You can easily sell your apartment through this portal,
                                rent or buy a new house for yourself
                                you can get.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>

export default {
    name: "LoginPage",
    components: {},
    methods: {
        auth() {
            this.$router.push('/')
        }
    },
}
</script>

<style scoped>
.login, .card-body {
    padding: 40px;
}

.login-title {
    font-family: 'rubik', sans-serif;
    font-weight: 500;
    font-size: 36px;
    color: #00066E;
}

.card-body h5 {
    font-family: 'rubik', sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: #00066E;
}

.form-label {
    font-family: 'rubik', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #00066E;
}

.card-body p {
    font-family: 'rubik', sans-serif;
    font-weight: 400;
    font-size: 11px;
    color: #00066E;
}

.card {
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 10px;
}

</style>
