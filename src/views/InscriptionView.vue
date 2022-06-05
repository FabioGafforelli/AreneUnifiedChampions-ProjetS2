<script>
import header1 from "../components/Header.vue"
import footer1 from "../components/Footer.vue"

export default {
    name:"App",
    components: { header1, footer1 },
}
</script>

<template>
    <header1 />
    <div class="">
    <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5  ">

    </div>

    </div>
    <footer1 />
</template>