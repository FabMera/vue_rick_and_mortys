<template>
    <form @submit.prevent ="buscarPersonaje" className="d-flex mb-3">
        <input v-model="searchPersonaje" type="text" placeholder="Search...personaje" class="form-control me-2" />
        <button class="btn btn-info text-white" type="submit">Search</button>
    </form>
</template>

<script>
export default {
    name: "Buscador",
    components: {},
    data() {
        return {
            searchPersonaje: "",
        };
    },
    methods: {
        buscarPersonaje() {
            this.$emit("buscarPersonaje", this.searchPersonaje);
        },
    },
};
</script>

<style lang="scss" scoped></style>
