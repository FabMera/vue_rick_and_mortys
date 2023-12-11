<template>
    <select class="form-select" v-model="ordenSeleccionado" @change="emitirOrdenSeleccionado">
        <option value="">Ordena la lista de Personajes</option>
        <option value="AZname">Order by name : A-Z</option>
        <option value="AZespecie">Order by Especie: A-Z</option>
    </select>
</template>

<script>
export default {
    name: "Selector",
    components: {},
    data() {
        return {
            ordenSeleccionado: "",
        };
    },
    methods: {
        emitirOrdenSeleccionado() {
            this.$emit("orden-seleccionado", this.ordenSeleccionado);
        },
    },
};
</script>

<style lang="scss" scoped></style>
