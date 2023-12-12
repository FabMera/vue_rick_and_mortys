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
                No se encontró el personaje "{{ busquedaActual }}"
            </div>
            <div v-else class="row">
                <div
                    class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4 "
                    v-for="item in personajesMostrados"
                    :key="item.id"
                >
                    <Personaje
                        :item="item"
                        @click-personaje="showCharacterInfo"
                    />
                </div>
            </div>

            <!-- Modal info PJ -->
            <div v-if="personajeInfo" @click="closeModal">
                <div class="overlay"></div>
                <Modal :item="personajeInfo" @close="closeModal" />
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
import Modal from "./components/Modal.vue";
import { mapActions, mapGetters } from "vuex";

export default {
    name: "HomeView",
    components: {
        NavBar,
        Footer,
        Buscador,
        Selector,
        Paginado,
        Personaje,
        Modal,
    },
    data() {
        return {
            ordenActual: null,
            busquedaActual: null,
            personajeInfo: null,
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
        ...mapActions([
            "getCharactersAndPagination",
            "prevPage",
            "nextPage",
            "getCharacter",
        ]),
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
        showCharacterInfo(id) {
            this.getCharacter(id);
            this.personajeInfo = this.getPersonajes.find(
                (item) => item.id === id
            );
            console.log(this.personajeInfo);
        },
        closeModal() {
            this.personajeInfo = null;
        },
    },
};
</script>

<style lang="css" scoped>
.mensaje-busqueda {
    text-align: center;
    color: rgb(0, 0, 0);
    font-size: 1.5em;
    margin-top: 2em;
    margin-bottom: 2em;
    padding: 1em;
    border: 1px solid rgb(91, 141, 156);
    border-radius: 5px;
}
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}
</style>
