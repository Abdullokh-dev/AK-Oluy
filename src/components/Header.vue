<template>
    <nav class="navbar navbar-expand-md navbar-dark py-4" style="background-color: #00066E;">
        <div class="container-fluid">
            <router-link class="navbar-brand ms-5 ps-1" to="/"><img src="/img/main-logo.png"></router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end me-5 pe-1" id="navbarNav">
                <ul class="navbar-nav justify-content-end">
                    <li class="nav-item">
                        <router-link class="nav-link"  to="/"><span class="selected">Homepage</span></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/search-house-page">Sale</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Rent</a>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/company-name">New houses</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Again</a>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/add-advertisement-page" id="add"><span>Add an ad +</span></router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
.nav-item a {
    color: #FFFFFF !important;
    font-family: 'rubik', sans-serif !important;
    font-weight: 500;
    font-size: 12px;
    font-style: normal;
    padding: 10px;
}

#add span {
    padding: 5px 15px;
    background-color: #5582FF;
    height: 20px;
    width: 98px;
    border-radius: 15px;
}

#navbarNav {
    margin-top: 12px;
}

.selected {
    border-bottom: 2px solid #FFFFFF;
}
</style>
