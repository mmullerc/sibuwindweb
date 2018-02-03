<template>
  <b-card id="leadingEdgeCard">
  <b-card-header
    header="5. Leading edge"
    header-tag="header"
    v-b-toggle.collapseLeadingEdgeCard
    slot="header">
  </b-card-header>
  <b-collapse id="collapseLeadingEdgeCard" class="mt-2">
    <template>
     <b-form >
       <b-form-group id="bondingLineVoidsLE"
                     class="bold"
                     label="5.1 Bonding Line voids"
                     label-for="bondingLineVoidsLE">
         <b-form-radio-group id="radiosBondingLineVoidsLE" v-model="selectedBondingLineVoidsLE"  name="radioSubComponent">
           <b-form-radio value="first">Yes</b-form-radio>
           <b-form-radio value="second">No</b-form-radio>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="microCracksLE"
                     class="bold"
                     label="5.2 Micro cracks present"
                     label-for="microCracksLE">
         <b-form-radio-group id="radiosMicroCracksLE" v-model="selectedMicroCracksLE" name="radioSubComponent">
           <b-form-radio value="first">Yes</b-form-radio>
           <b-form-radio value="second">No</b-form-radio>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="openLeadingEdge"
                     class="bold"
                     label="5.3 Open leading edge"
                     label-for="openLeadingEdge">
         <b-form-radio-group id="radiosOpenLeadingEdge" v-model="selectedOpenLeadingEdge" name="radioSubComponent">
           <b-form-radio value="first">Yes</b-form-radio>
           <b-form-radio value="second">No</b-form-radio>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="generalDamages"
                     class="bold"
                     label="5.4 General Damages"
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
