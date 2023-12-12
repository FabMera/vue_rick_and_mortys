<template>
    <HomeView />
    <div v-if="loading" class="loading-modal">
        <Loading />
    </div>
</template>

<script>
import { mapState } from "vuex";
import HomeView from "./HomeView.vue";
import Loading from "./components/Loading.vue";
export default {
    name: "App",
    components: {
        HomeView,
        Loading,
    },
    computed: {
        ...mapState(["loading"]),
    },
};
</script>

<style>
body {
    background-color: rgb(208, 210, 212);
}
.loading-modal {
    position: fixed; /* Posiciona el elemento de manera absoluta respecto a la ventana */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Fondo semi-transparente */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Asegura que el overlay esté por encima de otros elementos */
}
</style>
