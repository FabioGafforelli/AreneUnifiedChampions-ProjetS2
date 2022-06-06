<template>
<div class="w-full bg-blue-800 text-white rounded-xl px-4 pt-3 shadow-card">
    <div class="flex">
        <img class="rounded-xl w-1/3" :src="logojeux" alt="Image de l'artiste">
        <div class="mx-4">
            <h3 class="text-base">{{ nom }}</h3>
            <p class="text-sm mt-4 md:text-lg lg:text-xl">{{ description }}</p>
        </div>
    </div>
    
</div>
</template>
<script>

export default {
    props : {
        nom: String,
        description: String,
        logojeux:String
    }
};
</script>