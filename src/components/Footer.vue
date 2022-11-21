<script>

</script>


<template>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.6/css/line.css">


<footer class="bg-gradient-to-bl from-red-500 to-red-700 pt-10 sm:mt-10">
    <div>
        <RouterLink to="/">
        <Logo class=" w-24 h-24 ml-6" /></RouterLink>
    </div>
        <div class="max-w-6xl m-auto text-white flex flex-wrap justify-left">

            <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">

                <div class="text-xs uppercase text-white font-bold mb-6">
                    A propos
                </div>
                    Devenir partenaire
            </div>


            <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">

               <RouterLink to="/mentions"><div class="text-xs uppercase text-white font-bold mb-6">
                    Mentions légales
                </div></RouterLink>
            </div>

            <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
               <RouterLink to="/inscription"> <div class="text-xs uppercase text-white font-bold mb-6">
                    S'inscrire
                </div></RouterLink>
            </div>

            <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
              <RouterLink to="/contact"><div class="text-xs uppercase text-white font-bold mb-6">
                    Contact
                </div></RouterLink>
            </div>
  
        </div>


    <div class="pt-2">
        <div class="flex pb-5 px-3 m-auto pt-5 
            border-t border-indigo-100 text-white text-sm 
            flex-col md:flex-row max-w-6xl">
            <div class="mt-2 text-center">
                ©2022 BFC TV. All rights reserved
            </div>
        </div>
    </div>
</footer>
</template>
