<template>
    <div class="loader"></div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.loader {
    display: inline-block;
    width: 80px;
    height: 80px;
}
.loader:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #3498db;
    border-color: #3498db transparent #3498db transparent;
    animation: loader 1.2s linear infinite;
}
@keyframes loader {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
