<template>
    <div>
        <form @submit.prevent="listForm">
              <base-box>
                <div class="flex flex-col justify-start overflow-y-auto" >
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
                      v-model.trim="enterTime" />
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
import BaseInput from "../components/BaseInput.vue";
export default {
  name: 'ListForm',
  components: {
    BaseInput
  },

  props: {
    oldId: {
      type: Number,
      required: false,
      default: null
    },
    oldDate: {
      type: String,
      required: false,
      defualt: ''
    },
    oldActivity: {
      type: String,
      required: false,
      defualt: ''
    },
    oldTime: {
      type: String,
      required: false,
      defualt: ''
    }
  },
  emits: ['list-save'],
  data() {
    return {
      id: this.oldId,
      enterDate: this.oldDate,
      enterActivity: this.oldActivity,
      enterTime: this.oldTime,
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

      if (!this.invalidDateInput && !this.invalidActivityInput) {
        let newListSaved = {
          id: this.id,
          date: this.enterDate,
          activity: this.enterActivity,
          time: this.enterTime
        }
        this.id = ''
        this.enterDate = ''
        this.enterActivity = ''
        this.enterTime = ''
         this.$emit('list-save', newListSaved)
      }
    },


    validateDate(){
      this.invalidDateInput = this.enterDate === '' ? true : false
      console.log(`date: ${this.invalidDateInput}`)
    },

    validateActivity(){
      this.invalidActivityInput = this.enterActivity === '' ? true : false
      console.log(`activity: ${this.invalidActivityInput}`)
    }
  }
};
</script>