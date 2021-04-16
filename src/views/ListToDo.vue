<template>
    <div class="flex flex-row justify-around space-x-4">
        <div class="flex flex-col w-1/2 mt-4">
            <h2 class="heading font-medium text-3xl">
                Form To List
            </h2>

            <form @submit.prevent="listForm">
              <base-box>
                <div class="flex flex-col justify-start">
                  <div>
                    <label class="label" for="date">Date: </label>
                    <base-input
                      id= "date"
                      type= "text"
                      v-model="enterDate"
                      @blur="validateDate" />
                    <p v-if="invalidDateInput" class="text-red-500">
                      Please enter date!
                    </p>
                  </div>

                  <div class="flex flex-row mt-2">
                    <div>
                    <label class="label" for="activity">Activity: </label>
                    <base-input
                      id= "activity"
                      type= "text"
                      v-model="enterActivity"
                      @blur="validateActivity" />
                    <p v-if="invalidActivityInput" class="text-red-500">
                      Please enter activity!
                    </p>
                    </div>
                    <div class="ml-2">
                    <label class="label" for="time">Time: </label>
                    <base-input
                      inputId= "time"
                      inputType= "text" />
                    </div>
                  </div>

                  
                </div>

                <div class="mt-4">
                  <base-button @save="addNewSave"
                    buttonLabel="Save"
                    buttonColor="bg-favyellow"
                    textColor="text-gray-900"
                    class="text-xl"/>
                </div>
            </base-box>
            </form>  
        </div>

        <!-- List To Do -->
        <div class="flex flex-col w-1/2 mt-4">
            <h2 class="font-medium text-3xl">
              List To Do
            </h2>
            <base-box>
                <ul v-for="result in listResult" :key="result.id">
                  <li>
                    <span>{{ result.date }} </span>
                    <span>{{ result.time }} </span>
                    <span>{{ result.activity }} </span>
                    
                  </li>
                </ul>
            </base-box>

        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import BaseBox from "../components/BaseBox";
import BaseInput from "../components/BaseInput";
export default {
  name: 'ListToDo',
  components: {
    BaseBox,
    BaseInput
  },
  emits: ['save'],
  data() {
    return {
      enterDate: '',
      enterActivity: '',
      enterTime: '',
      invalidDateInput: false,
      invalidActivityInput: false,
      invalidTimeInput: false,
      listResult: [ ]
    }
  },
  methods: {
    listForm(){
      this.invalidDateInput = this.enterDate === '' ? true : false
      this.invalidActivityInput = this.enterActivity === '' ? true : false
      this.invalidTimeInput = this.enterTime === '' ? true : false

      const newSaved = {
        date: this.enterDate,
        activity: this.enterActivity,
        time: this.enterTime
      }
      this.enterDate = ''
      this.enterActivity = ''
      this.enterTime = ''
      this.$emit('save', newSaved)
    },

    validateDate(){
      this.invalidDateInput = this.enterDate === '' ? true : false
    },

    validateActivity(){
      this.invalidActivityInput = this.enterActivity === '' ? true : false
    },

    addNewSave(newSave){
      this.listResult.id = new Date().toISOString()
      this.listResult.date = newSave.deactivated() 
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