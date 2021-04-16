<template>
    <div class="flex flex-row justify-around space-x-4">
        <div class="flex flex-col w-1/2 mt-4">
            <h2 class="heading font-medium text-3xl">
                Form To List
            </h2>

            <form @submit.prevent="submitForm">
              <base-box>
                <div class="flex flex-col justify-start">
                  <div>
                    <label class="label" for="date">Date: </label>
                    <base-input
                      id= "date"
                      type= "text"/>
                  </div>

                  <div class="flex flex-row mt-2">
                    <div>
                    <label class="label" for="activity1">Activity1: </label>
                    <base-input
                      id= "activity1"
                      type= "text"/>
                    </div>
                    <div class="ml-2">
                    <label class="label" for="time1">Time: </label>
                    <base-input
                      inputId= "time1"
                      inputType= "text" />
                    </div>
                  </div>

                  <div class="flex flex-row mt-2">
                    <div>
                    <label class="label" for="activity2">Activity2: </label>
                    <base-input
                      id= "activity2"
                      type= "text"/>
                    </div>
                    <div class="ml-2">
                    <label class="label" for="time2">Time: </label>
                    <base-input
                      inputId= "time2"
                      inputType= "text" />
                    </div>
                  </div>

                  <div class="flex flex-row mt-2">
                    <div>
                    <label class="label" for="activity3">Activity3: </label>
                    <base-input
                      id= "activity3"
                      type= "text"/>
                    </div>
                    <div class="ml-2">
                    <label class="label" for="time2">Time: </label>
                    <base-input
                      inputId= "time3"
                      inputType= "text" />
                    </div>
                  </div>

                  <div class="flex flex-row mt-2">
                    <div>
                    <label class="label" for="activity4">Activity4: </label>
                    <base-input
                      id= "activity4"
                      type= "text"/>
                    </div>
                    <div class="ml-2">
                    <label class="label" for="time4">Time: </label>
                    <base-input
                      inputId= "time4"
                      inputType= "text" />
                    </div>
                  </div>

                  <div class="flex flex-row mt-2">
                    <div>
                    <label class="label" for="activity5">Activity5: </label>
                    <base-input
                      id= "activity5"
                      type= "text"/>
                    </div>
                    <div class="ml-2">
                    <label class="label" for="time5">Time: </label>
                    <base-input
                      inputId= "time5"
                      inputType= "text" />
                    </div>
                  </div>

                  <div class="flex flex-row mt-2">
                    <div>
                    <label class="label" for="activity6">Activity6: </label>
                    <base-input
                      id= "activity6"
                      type= "text"/>
                    </div>
                    <div class="ml-2">
                    <label class="label" for="time6">Time: </label>
                    <base-input
                      inputId= "time6"
                      inputType= "text" />
                    </div>
                  </div>
    
                  <div class="flex flex-row mt-2">
                    <div>
                    <label class="label" for="activity7">Activity7: </label>
                    <base-input
                      id= "activity7"
                      type= "text"/>
                    </div>
                    <div class="ml-2">
                    <label class="label" for="time7">Time: </label>
                    <base-input
                      inputId= "time7"
                      inputType= "text" />
                    </div>
                  </div>

                  <div class="flex flex-row mt-2">
                    <div>
                    <label class="label" for="activity8">Activity8: </label>
                    <base-input
                      id= "activity8"
                      type= "text"/>
                    </div>
                    <div class="ml-2">
                    <label class="label" for="time8">Time: </label>
                    <base-input
                      inputId= "time8"
                      inputType= "text" />
                    </div>
                  </div>

                  <div class="flex flex-row mt-2">
                    <div>
                    <label class="label" for="activity9">Activity9: </label>
                    <base-input
                      id= "activity9"
                      type= "text"/>
                    </div>
                    <div class="ml-2">
                    <label class="label" for="time9">Time: </label>
                    <base-input
                      inputId= "time9"
                      inputType= "text" />
                    </div>
                  </div>
                </div>

                <div class="mt-4">
                  <router-link to="/listtodo">
                  <base-button
                    buttonLabel="Save"
                    buttonColor="bg-favyellow"
                    textColor="text-gray-900"
                    class="text-xl"/>
                  </router-link>
                </div>
            </base-box>
            </form>  
        </div>

        <!-- List To Do -->
        <div class="flex flex-col w-1/2 mt-4">
            <h2 class="heading font-medium text-3xl">
              List To Do
            </h2>
            <base-box>
                <h1>This is base-box component</h1>
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
  }
}
</script>