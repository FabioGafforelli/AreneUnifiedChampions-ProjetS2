<script>
import header1 from "../components/Header.vue"
import footer1 from "../components/Footer.vue"

export default {
    name:"App",
    components: { header1, footer1 },
}
</script>

<template class="bg-indigo-25">
    <header1 />
    <div class="bg-indigo-25 dark:bg-black">
<p class="w-auto h-auto m-auto text-2xl text-center font-bold text-blue-600">Contact</p>
<p class="flex pl-5 pt-5 pb-10 text-black dark:text-white sm:text-base lg:text-xl xl:text-2xl">Une question, une remarque à propos du tournoi de l'Arène ? Faites nous en part en remplissant le formulaire ci dessous :</p>
        <form>
        <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5  ">
 <div class="grid-cols-2 pl-10 pr-10 ">
     <p class="dark:text-white">Prénom*</p>
     <input type="text" class="w-full my-6 border relative:  border-blue-600" placeholder="Prénom"> 
  </div>
  <div class="grid-cols-2 pl-10 pr-10 ">
      <p class="dark:text-white">Nom*</p>
    <input type="text" class="w-full my-6 border relative:  border-blue-600" placeholder="Nom">
  </div>
        </div>
<br>
 <div class="grid grid-cols-1 pl-10 pr-10 ">
  <label class="dark:text-white" for="emailAddress">Adresse Mail*</label>
              <input id="emailAddress" type="email" name="email" placeholder="Fabio@adressemail.com" required class="my-6 border relative: border-blue-600">
  </div>
 <div class="grid grid-cols-1 pl-10 pr-10 ">
     <p class="dark:text-white">Objet du message*</p>
    <input type="text" class="my-6 border relative: border-blue-600" placeholder="Objet">
  </div>
  <div class="grid grid-cols-1 pl-10 pr-10">
      <p class="dark:text-white">Message*</p>
<textarea class="border border-blue-600" id="message" name="message"  placeholder="  Message" rows="7" required="my-3" ></textarea>
  </div>
  <input type="checkbox" id="j'accepte" name="j'accepte"
                            class="mr-5 h-6 w-6 border-2 border-blue-600" required>
                    <label for="j'accepte" class="check dark:text-white">J’accepte et j’ai  lu les conditions générales d’utilisations.</label>
  <div class="flex pl-10 pr-10 items-end">
      <button type="submit" class="rounded bg-blue-600 text-white">Envoyer</button>
  </div>
  </form>
  <p class="flex pl-5 pt-5 pb-10 text-black sm:text-base lg:text-xl xl:text-2xl">* champs obligatoires</p>
    </div>
    <footer1 />

</template>