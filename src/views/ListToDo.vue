<template>
  <div class="flex flex-row justify-around space-x-4">
        <div class="flex flex-col w-1/2 mt-4">
            <h2 class="heading font-medium text-3xl">
                Form To List
            </h2>
            <list-form
              v-if="isEdit"
              :oldId="oldId"
              :oldDate="oldDate"
              :oldActivity="oldActivity"
              :oldTime="oldTime"
              @list-save="editSave"
            ></list-form>

            <list-form v-else @list-save="addNewSave"> </list-form>
        </div>

        <!-- List To Do -->
        <div class="flex flex-col w-1/2 mt-4">
            <h2 class="font-medium text-3xl">
              List To Do
            </h2>
            <base-box>
                <ul class="text-left ml-4" v-for="result in listResults" :key="result.id">
                  <base-box>
                  <li>
                    <span>{{ result.date }} </span> 
                    <span class="ml-4">{{ result.time }} </span>                    
                    <span class="ml-8">{{ result.activity }} </span>                   
                  </li>
                  <div class="flex flex-row">
                    <base-button
                      @btn-click="editList($event, result.id, result.date, result.activity, result.time)"
                      buttonLabel="Edit"
                      buttonColor="bg-favyellow"
                      textColor="text-gray-900"
                      ></base-button>
                    <base-button
                      @btn-click="deleteList($event, result.id)"
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
      url: ' http://localhost:5000/listResults',
      errorMessage: null,
      oldId: '',
      oldActivity: '',
      oldTime: '',
      listResults: [ ],
      isEdit: false
    }
  },
  methods: {
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

    async deleteList(passinginfo, id) {
      try{
        await fetch(`${this.url}/${id}`, {
          method: 'DELETE'
        })
        this.listResults = this.listResults.filter(
          (list) => list.id !== id
        )
      }catch (error) {
        console.log(`Could not delete list! ${error}`)
    }
  },

    editList(passingData, editId, editDate, editActivity, editTime){
      this.isEdit = true
      this.oldId = editId
      this.oldDate = editDate
      this.oldActivity = editActivity
      this.oldTime = editTime
    },

    async editSave(editingData) {
      const rest = await fetch(`${this.url}/${editingData.id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          date: editingData.date,
          activity: editingData.activity,
          time: editingData.time
        })
      })
      const info = await rest.json()
      this.listResults = this.listResults.map((list) =>
        list.id === info.id
          ? {
              ...list,
              date: info.date,
              activity: info.activity,
              time: info.time
            }
          : list
      )
      this.isEdit = false
    }
},

  async created(){
    this.listResults = await this.fetchListResult();
  }
}
</script>