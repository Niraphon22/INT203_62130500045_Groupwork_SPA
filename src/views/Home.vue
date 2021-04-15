<template>
  <div class="flex flex-col items-center justify-center bg-gray-50">
    <img alt="logo" src="../assets/logo.png" class="mt-14">
    <h2 class="text-3xl text-gray-900">Welcome to Time Manage!</h2>
    <div class="mt-4">
    <router-link to="/listtodo">
      <base-button
        buttonLabel="Get Start"
        buttonColor="bg-favyellow"
        textColor="text-gray-900"
        class="text-xl"/>
    </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseButton from "../components/BaseButton";

export default {
  name: 'Home',
  components: {
    BaseButton

  }
}
</script>
