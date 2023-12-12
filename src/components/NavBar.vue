<template>
    <nav class="navbar">
        <div class="container">
           
            <a class="navbar-brand text-uppercase" href="/"> <img class="logo" src="/klipartz.com.png"/></a>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
    components: {},
    data() {
        return {};
    },
    methods: {},
};
</script>

<style lang="css" scoped>
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000; 
    background-color: #333; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
    padding: 10px 15px; 
    background: linear-gradient(to right, #333, #666);
    
}

.logo{
    height: 50px;
    width: auto;
}


.navbar .icon {
    margin-right: 5px; /* Esto añade un poco de espacio a la derecha de los iconos */
}
</style>
