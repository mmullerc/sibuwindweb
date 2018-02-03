<template>
  <b-card id="shellsCard">
  <b-card-header
    header="2. Shells"
    header-tag="header"
    v-b-toggle.collapseShells
    slot="header">
  </b-card-header>
  <b-collapse id="collapseShells" class="mt-2">
    <template>
     <b-form >
       <b-form-group id="lightningReceptors"
                     class="bold"
                     label="2.1 Lightning receptors show damage"
                     label-for="lightningReceptors">
         <b-form-radio-group id="radiosLightning" v-model="selectedLightning"  name="radioSubComponent">
           <b-form-radio value="first">Yes</b-form-radio>
           <b-form-radio value="second">No</b-form-radio>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="hoistPoint"
                     class="bold"
                     label="2.2 Hoist point indentifiers are visible"
                     label-for="hoistPoint">
         <b-form-radio-group id="radiosHoistPoint" v-model="selectedHoistPoint" name="radioSubComponent">
           <b-form-radio value="first">Yes</b-form-radio>
           <b-form-radio value="second">No</b-form-radio>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="lpsMeasurements"
                     class="bold"
                     label="2.3 LPS measurements are within specification"
                     label-for="lpsMeasurements">
         <b-form-radio-group id="radiosLpsMeasurements" v-model="selectedLpsMeasurements" name="radioSubComponent">
           <b-form-radio value="first">Yes</b-form-radio>
           <b-form-radio value="second">No</b-form-radio>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="generalDamages"
                     class="bold"
                     label="2.4 General Damages"
                     label-for="generalDamages">
         <b-form-radio-group id="radiosGeneralDamages"  name="radioSubComponent">
           <b-form-radio value="first">Yes</b-form-radio>
           <b-form-radio value="second">No</b-form-radio>
         </b-form-radio-group>
       </b-form-group>
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
    }
  },
  props: {
   rootData: this.rootData // you need to give the parent components' data here.
  }
}
</script>
