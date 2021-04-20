<template>
  <div class="flex flex-row justify-around space-x-4">
        <div class="flex flex-col w-1/2 mt-4">
            <h2 class="font-medium text-3xl">
                Form To List
            </h2>
            <form @submit.prevent="listForm">
              <base-box>
                <div class="flex flex-col justify-start overflow-y-auto" >
                  <div>
                    <label for="date">Date: </label>
                    <input
                      type= "text" class="font-medium rounded-md border-2 border-bluegray border-opacity-75y px-4 py-2 mb-0.5"
                      id= "date"
                      v-model.trim="enterDate"
                      @blur="validateDate" />

                    <p v-if="invalidDateInput" class="text-red-500">
                      Please enter date!
                    </p>
                  </div>

                  <div class="flex flex-row mt-2">
                    <div>
                    <label for="activity">Activity: </label>
                    <input
                      type= "text" class="font-medium rounded-md border-2 border-bluegray border-opacity-75y px-4 py-2 mb-0.5"
                      id= "activity"
                      v-model.trim="enterActivity"
                      @blur="validateActivity" />
                    <p v-if="invalidActivityInput" class="text-red-500">
                      Please enter activity!
                    </p>
                    </div>
                    <div class="ml-2">
                    <label for="time">Time: </label>
                    <input
                      type= "text" class="font-medium rounded-md border-2 border-bluegray border-opacity-75y px-4 py-2 mb-0.5"
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

        <!-- List To Do -->
        <div class="flex flex-col w-1/2 mt-4">
            <h2 class="font-medium text-3xl">
              List To Do
            </h2>
            <base-box>
                <ul class="text-left ml-4" v-for="list in listResults" :key="list.id">
                  <base-box>
                  <li>
                    <span>{{ list.date }} </span> 
                    <span class="ml-4">{{ list.time }} </span>                    
                    <span class="ml-8">{{ list.activity }} </span>                   
                  </li>
                  <div class="flex flex-row">
                    <base-button
                      @btn-click="showInfo(list)"
                      buttonLabel="Edit"
                      buttonColor="bg-favyellow"
                      textColor="text-gray-900"
                      ></base-button>
                    <base-button
                      @btn-click="deleteList(list.id)"
                      buttonLabel="Delete"
                      buttonColor="bg-red-500"
                      textColor="text-gray-900"
                      ></base-button>
                  </div>
                  </base-box>
                </ul>
            </base-box>
        </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ListToDo',
  components: {

  },
  data() {
    return {
      url: ' http://localhost:5000/listResults',
      listResults: [ ],
      isEdit: false,
      editId: '',
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

      if (this.enterDate !== '' && this.enterActivity !== '' && this.enterTime !== ''){
        
        if (this.isEdit){
          this.editSave({
          id: this.editId,
          date: this.enterDate,
          activity: this.enterActivity,
          time: this.enterTime
        })
      } else {
        this.addNewSave({
          date: this.enterDate,
          activity: this.enterActivity,
          time: this.enterTime
        })
      }
    }
    this.enterDate=''
    this.enterActivity=''
    this.enterTime = ''
    },

    validateDate(){
      this.invalidDateInput = this.enterDate === '' ? true : false
      console.log(`date: ${this.invalidDateInput}`)
    },

    validateActivity(){
      this.invalidActivityInput = this.enterActivity === '' ? true : false
      console.log(`activity: ${this.invalidActivityInput}`)
    },

    showInfo(oldSave){
      this.isEdit = true
      this.editId = oldSave.id
      this.enterDate = oldSave.date
      this.enterActivity = oldSave.activity
      this.enterTime = oldSave.time
    },

    async addNewSave(newSave){
      try {
      const rest =await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          date: newSave.date,
          time: newSave.time,
          activity: newSave.activity
        }),
      });
      const info = await rest.json();
      this.listResults = [...this.listResults, info];    
    } catch (error) {
      console.log(`Could not add ${error}`);
    }
    this.enterDate = ''
    this.enterActivity = ''
    this.enterTime = ''
    },

    async fetchListResult(){
      try{
        const rest = await fetch(this.url);
        const info = await rest.json();
        return info;
      } catch (error) {
        console.log(`Could not get! ${error}`);
      }
    },

    async deleteList(deleteId) {
      try{
        await fetch(`${this.url}/${deleteId}`, {
          method: 'DELETE'
        })
        this.listResults = this.listResults.filter(
          (list) => list.id !== deleteId
        )
      }catch (error) {
        console.log(`Could not delete list! ${error}`)
    }
  },

    async editSave(editingSave) {
      try{
      const rest = await fetch(`${this.url}/${editingSave.id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          date: editingSave.date,
          activity: editingSave.activity,
          time: editingSave.time
        })
      })
      const info = await rest.json()
      this.listResults = this.listResults.map((list) =>
        list.id === editingSave.id
          ? {
              ...list,
              date: info.date,
              activity: info.activity,
              time: info.time
            }
          : list
      )
      this.isEdit = false
      this.editId = ''
      this.enterDate = ''
      this.enterActivity = ''
      this.enterTime = ''
    } catch (error) {
      console.log(`Could not edit list! ${error}`)
    }
  }
  },

  async created(){
    this.listResults = await this.fetchListResult();
  }
}
</script>