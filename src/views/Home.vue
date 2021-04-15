<template>
  <div class="h-screen w-screen mx-auto flex flex-col items-center justify-center bg-gray-500">
    <div>
      <img alt="logo" src="../assets/logo.png" >
      <h2 class="text-3xl text-gray-900">Welcome to Time Manage!</h2>
    </div>
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

export default {
  name: 'Home',
  components: {

  }
}
</script>
