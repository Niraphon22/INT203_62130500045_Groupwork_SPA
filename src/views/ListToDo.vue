<template>
    <div class="flex flex-row justify-around space-x-4">
        <div class="flex flex-col w-1/2 mt-4">
            <h2 class="heading">
                Form to list.
            </h2>
            <base-box>
            <div class="flex flex-col justify-start">
                <div>
              <label class="label" for="name">Date</label>

              <input
                class="input border border-black"
                id="name"
                type="text"
              />
              </div>
              <div>
              <label class="label" for="activity">Activity</label>

              <input
                class="input"
                id="activity"
                type="text"
            />
            </div>
            </div>
            </base-box>
            
        </div>

        <div class="w-1/2 mt-4">
            <base-box>
                <h1>This is base-box component</h1>
            </base-box>

        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import BaseBox from "../components/BaseBox";

export default {
  name: 'ListToDo',
  components: {
    BaseBox
  }
}
</script>