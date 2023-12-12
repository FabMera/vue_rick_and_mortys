<template>
    <div>
        <nav-bar />
        <div class="container mt-5 d-flex flex-row justify-content-around">
            <div class="row mt-5">
                <div class="col-12 col-md-6 mb-3">
                    <Selector @orden-seleccionado="ordenSeleccionado" />
                </div>
                <div class="col-12 col-md-6 mb-3">
                    <Buscador @buscar-personaje="searchPersonaje" />
                </div>
            </div>
        </div>
        <nav>
            <Paginado @prev-page="prevPage" @next-page="nextPage" />
        </nav>
        <div class="container mt-5">
            <div
                class="mensaje-busqueda"
                v-if="personajesMostrados.length === 0"
            >
                No se encontro el personaje "{{ busquedaActual }}"
            </div>
            <div v-else class="row">
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
            busquedaActual: null,
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
            let personajes = this.ordenActual
                ? this.getSortedPersonajes(this.ordenActual)
                : this.getPersonajes;
            if (this.busquedaActual && this.busquedaActual.trim() !== "") {
                personajes = personajes.filter((item) => {
                    return item.name
                        .toLowerCase()
                        .includes(this.busquedaActual.toLowerCase());
                });
            }
            return personajes;
        },
    },
    methods: {
        ...mapActions(["getCharactersAndPagination", "prevPage", "nextPage"]),
        ordenSeleccionado(orden) {
            this.ordenActual = orden;
        },
        searchPersonaje(busqueda) {
            if (!busqueda || busqueda.trim() === "") {
                alert("Debes ingresar un personaje a buscar");
                return;
            }
            this.busquedaActual = busqueda;
        },
    },
};
</script>

<style lang="css" scoped>
.mensaje-busqueda {
    text-align: center;
    color: #eceaea;
    font-size: 1.5em;
    margin-top: 2em;
    margin-bottom: 2em;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>
