<template>
    <div>
        <form @submit.prevent="listForm">
              <base-box>
                <div class="flex flex-col justify-start">
                  <div>
                    <label class="label" for="date">Date: </label>
                    <base-input
                      id= "date"
                      v-model.trim="enterDate"
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
                      v-model.trim="enterActivity"
                      @blur="validateActivity" />
                    <p v-if="invalidActivityInput" class="text-red-500">
                      Please enter activity!
                    </p>
                    </div>
                    <div class="ml-2">
                    <label class="label" for="time">Time: </label>
                    <base-input
                      id= "time"
                      v-model.trim="enterTime"
                      @blur="validateTime" />
                    </div>
                  </div>                 
                </div>

                <div class="mt-4">
                  <base-button
                    buttonLabel="Save"
                    buttonColor="bg-favyellow"
                    textColor="text-gray-900"
                    class="text-xl"/>
                </div>
            </base-box>
            </form>  
    </div>

</template>

<script>
// @ is an alias to /src
import BaseBox from "../components/BaseBox.vue";
import BaseInput from "../components/BaseInput.vue";
export default {
  name: 'ListForm',
  components: {
    BaseBox,
    BaseInput
  },
  emits: ['list-save'],
  data() {
    return {
      enterDate: '',
      enterActivity: '',
      enterTime: '',
      invalidDateInput: false,
      invalidActivityInput: false,
      invalidTimeInput: false
    }
  },
  methods: {
    listForm(){
      this.invalidDateInput = this.enterDate === '' ? true : false
      this.invalidActivityInput = this.enterActivity === '' ? true : false
      this.invalidTimeInput = this.enterTime === '' ? true : false

      console.log(`date value: ${this.enterDate}`)
      console.log(`activity value: ${this.enterActivity}`)
      console.log(`time value: ${this.enterTime}`)
      console.log(`invalid date: ${this.invalidDateInput}`)
      console.log(`invalid activity: ${this.invalidActivityInput}`)
      console.log(`invalid time: ${this.invalidTimeInput}`)

      const newSaved = {
        date: this.enterDate,
        activity: this.enterActivity,
        time: this.enterTime
      }
      this.enterDate = ''
      this.enterActivity = ''
      this.enterTime = ''
      this.$emit('list-save', newSaved)
    },


    validateDate(){
      this.invalidDateInput = this.enterDate === '' ? true : false
      console.log(`date: ${this.invalidDateInput}`)
    },

    validateActivity(){
      this.invalidActivityInput = this.enterActivity === '' ? true : false
      console.log(`activity: ${this.invalidActivityInput}`)
    },

    validateTime(){
      this.invalidTimeInput = this.enterTime === '' ? true : false
      console.log(`time: ${this.invalidTimeInput}`)
    }
  }
};
</script>