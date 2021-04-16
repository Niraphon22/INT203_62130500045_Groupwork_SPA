<template>
  <div class="flex flex-row justify-around space-x-4">
        <div class="flex flex-col w-1/2 mt-4">
            <h2 class="heading font-medium text-3xl">
                Form To List
            </h2>
            <list-form @save="addNewSave"> </list-form>

        </div>

        <!-- List To Do -->
        <div class="flex flex-col w-1/2 mt-4">
            <h2 class="font-medium text-3xl">
              List To Do
            </h2>
            <base-box>
                <ul class="text-left ml-4" v-for="result in listResult" :key="result.id">
                  <li>
                    <span>{{ result.date }} </span> 
                    <span class="ml-4">{{ result.time }} </span>                    
                    <span class="ml-8">{{ result.activity }} </span>                   
                  </li>
                </ul>
            </base-box>
        </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseBox from "../components/BaseBox.vue";
import ListForm from "../components/ListForm.vue";
export default {
  name: 'ListToDo',
  components: {
    BaseBox,
    ListForm
  },
  data() {
    return {
      listResult: [ ]
    }
  },
  methods: {
    addNewSave(newSave){
      this.listResult.id = new Date().toISOString()
      this.listResult.date = newSave.date
      this.listResult.activity = newSave.activity
      this.listResult.time = newSave.time
      this.listResult.push(newSave)
    
    },

    async fetchListResult(){
      const url = await fetch('http://localhost:5000/listResult')
      const info = await url.json()
      return info
    }
  },
  async created(){
    this.listResult = await this.fetchListResult()
  }
}
</script>