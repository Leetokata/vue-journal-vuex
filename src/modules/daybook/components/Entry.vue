<template>
    <div class="entry-container pointer mb-3 p-2"
        @click="$router.push({name:'entry', params: {id: 10}})"
    >
        <div class="entry-tittle d-flex">
            <span class="fs-5 text-success fw-bold">06</span>
            <span class="mx-1 fs-5">Noviembre</span>
            <span class="mx-2 fw-light">2022, Domingo</span>

        </div>
        <div class="entry-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, iusto! Aperiam ab perspiciatis rem sit ad eius labore corrupti debitis temporibus esse id alias nam voluptatum velit, autem cumque excepturi!
        </div>
    </div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;

    }
    .entry-description{
        font-size: 12px;
    }
}
</style>