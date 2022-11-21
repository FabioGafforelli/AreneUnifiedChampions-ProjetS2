<template>
<header class=" bg-gradient-to-br bg-red-700 drop-shadow-lg z-10 fixed top-0 left-0 right-0 px-5 lg:py-8 py-3">
    <a href="#content" class="sr-only focus:not-sr-only text-lg text-white"> Passez au contenu </a>
    <nav class=" lg:flex lg:justify-between items-center">
      <div class="flex justify-between items-center">
       <RouterLink to="/">		
	   <h1 class="text-gray-50 text-xl font-bold lg:text-3xl">BFC TV</h1>
    </RouterLink> 	
      <span class="text-3xl cursor-pointer lg:hidden block w-8 h-8 mr-25  ">
        <MenuIcon class=" text-white"  aria-controls="menu"
        :aria-expanded="menuOuvert"
        @click="menuOuvert = !menuOuvert">
        </MenuIcon>
        <span class="sr-only ">Menu</span>
      </span>
      </div>
      <Transition
        enter="transition duration-2000 ease-out"
        enterFrom="transform translate-x-full opacity-0"
        enterTo="transform translate-x-0 opacity-100"
        leave="transition duration-1750 ease-out"
        leaveFrom="transform  translate-x-0 opacity-100"
        leaveTo="transform translate-x-full opacity-0"
      >
      <ul id="menu" v-if="menuOuvert" class="lg:hidden w-full  text-xl font-museomoderno  py-4 text-center" >
        <li class="my-3">
          <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm font-museomoderno text-white  " to="/poliique">Politique</RouterLink>
        </li>
        <li class="my-3">
          <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm font-museomoderno text-white  " to="/societe">Société</RouterLink>
        </li>
        <li class="my-3">
          <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm font-museomoderno text-white " to="/economie">Economie</RouterLink>
        </li>
        <li class="my-3">
          <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm text-white font-museomoderno " to="/sport">Sport</RouterLink>
        </li>
        <li class="my-3">
          <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm font-museomoderno text-white " to="/sante">Santé</RouterLink>
        </li>
      </ul>
      </Transition>
      <ul class="lg:flex  gap-6 lg:items-center text-white text-xl font-algerian mx-6 py-4 hidden" >
        <li class="my-3">
          <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm font-museomoderno text-white  " to="/politique">Politique</RouterLink>
        </li>
        <li class="my-3">
          <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm font-museomoderno text-white  " to="/histoire">Société</RouterLink>
        </li>
        <li class="my-3">
          <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm font-museomoderno text-white " to="/reglement">Economie</RouterLink>
        </li>
        <li class="my-3">
          <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm text-white font-museomoderno " to="/jeux">Sport</RouterLink>
        </li>
        <li class="my-3">
          <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm font-museomoderno text-white " to="/inscription">Santé</RouterLink>
        </li>
      </ul>    
    </nav>
  </header>
</template>

<script>
import { MenuIcon, } from "@heroicons/vue/solid";
export default {
  name: "App",
  components: { MenuIcon, },
    data() {
    return {
      menuOuvert: false,
    };
    },
}
</script>
