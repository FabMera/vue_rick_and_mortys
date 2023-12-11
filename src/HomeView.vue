<template>
    <div>
        <nav-bar />
        <div class="container mt-4 d-flex flex-row justify-content-around">
            <div class="row">
                <div class="col-12 col-md-6 mb-3">
                    <Selector @orden-seleccionado="ordenSeleccionado" />
                </div>
                <div class="col-12 col-md-6 mb-3">
                    <Buscador />
                </div>
            </div>
        </div>
        <nav>
            <Paginado @prev-page="prevPage" @next-page="nextPage" />
        </nav>
        <div class="container mt-5">
            <div class="row">
                <div
                    class="col-12 col-sm-6 col-md-4 col-lg-3"
                    v-for="item in personajesMostrados"
                    :key="item.id"
                >
                    <Personaje :item="item" />
                </div>
            </div>
        </div>
        <Paginado @prev-page="prevPage" @next-page="nextPage" />
        <Footer />
    </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import Buscador from "./components/Buscador.vue";
import Selector from "./components/Selector.vue";
import Paginado from "./components/Paginado.vue";
import Personaje from "./components/Personaje.vue";
import { mapActions, mapGetters } from "vuex";

export default {
    name: "HomeView",
    components: { NavBar, Footer, Buscador, Selector, Paginado, Personaje },
    data() {
        return {
            ordenActual: null,
        };
    },
    mounted() {
        this.getCharactersAndPagination();
    },

    computed: {
        ...mapGetters(["getPersonajes", "getSortedPersonajes"]),
//Si ordenActual es true, devuelve getSortedPersonajes, si no, devuelve getPersonajes
//Si no hay orden, devuelve getPersonajes (por defecto)
        personajesMostrados() {
            return this.ordenActual
                ? this.getSortedPersonajes(this.ordenActual)
                : this.getPersonajes;
        },
    },
    methods: {
        ...mapActions(["getCharactersAndPagination", "prevPage", "nextPage"]),
        ordenSeleccionado(orden) {
            this.ordenActual = orden;
        },
    },
};
</script>

<style lang="scss" scoped></style>
