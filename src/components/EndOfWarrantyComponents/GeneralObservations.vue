<template>
  <b-card id="generalObservationsCard">
  <b-card-header
    header="8. General Observations"
    header-tag="header"
    v-b-toggle.collapseGeneralObservationsCard
    slot="header">
  </b-card-header>
  <b-collapse id="collapseGeneralObservationsCard" class="mt-2">
    <template>
     <b-form >
       <div>
         <b-form-textarea id="textarea1"
                       v-model="text"
                       :rows="10"
                       :max-rows="20">
          </b-form-textarea>
        </div>
      </b-form>
    </template>
  </b-collapse>
  </b-card>
</template>
<script>

export default {
  afterCreated() {
      console.log(this.rootData + 'data');
      console.log('test')
  },
  data () {
    return {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  },
  props: {
   rootData: this.rootData // you need to give the parent components' data here.
  }
}
</script>
