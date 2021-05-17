<template>
    <div id="bursaries" class="bursaries">
        <BursariesMainImage id="main-image"/>
        <div id="Bursaries-content" class="Bursaries-content">
            
        </div>
    </div>
</template>

<script>
import BursariesMainImage from "./Bursaries-children/BursariesMainImage.vue"

export default {
    name: "Bursaries",
    components: {BursariesMainImage}
}
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap'); 
    @import './styles/Funds.scss';
</style>