<template>
    <ul className="pagination justify-content-center">
        <li class="page-item">
            <button @click="prevPage" class="page-link">Prev</button>
        </li>

        <li className="page-item">
            <button @click="nextPage" class="page-link">Next</button>
        </li>
    </ul>
</template>

<script>
export default {
    name: "Paginado",
    components: {},
    data() {
        return {};
    },
    methods: {
        prevPage() {
            this.$emit("prevPage");
        },
        nextPage() {
            this.$emit("nextPage");
        },
    },
};
</script>

<style lang="scss" scoped></style>
