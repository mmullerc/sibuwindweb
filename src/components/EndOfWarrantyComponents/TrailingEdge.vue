<template>
  <b-card id="trailingEdgeCard">
  <b-card-header
    header="4. Trailing Edge"
    header-tag="header"
    v-b-toggle.collapseTrailingEdge
    slot="header">
  </b-card-header>
  <b-collapse id="collapseTrailingEdge" class="mt-2">
    <template>
     <b-form >
       <b-form-group id="bondingLineVoids"
                     class="bold"
                     label="4.1 Bonding line voids"
                     label-for="bondingLineVoids">
         <b-form-radio-group id="radiosBondingLineVoids" v-model="selectedBondingLineVoids"  name="radioSubComponent">
           <b-form-radio value="first">Yes</b-form-radio>
           <b-form-radio value="second">No</b-form-radio>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="microCracks"
                     class="bold"
                     label="4.2 Micro cracks present"
                     label-for="greaseOil">
         <b-form-radio-group id="radiosMicroCracks" v-model="selectedMicroCracks" name="radioSubComponent">
           <b-form-radio value="first">Yes</b-form-radio>
           <b-form-radio value="second">No</b-form-radio>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="longitudeCracks"
                     class="bold"
                     label="4.3 Longitude cracks present"
                     label-for="foreignMaterials">
         <b-form-radio-group id="radiosLongitudeCracks" v-model="selectedLongitudeCracks" name="radioSubComponent">
           <b-form-radio value="first">Yes</b-form-radio>
           <b-form-radio value="second">No</b-form-radio>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="travesalCracks"
                     class="bold"
                     label="4.4 Traversal cracks present"
                     label-for="lpsCard">
         <b-form-radio-group id="radiosTravesalCracks" v-model="selectedTravesalCracks" name="radioSubComponent">
           <b-form-radio value="first">Yes</b-form-radio>
           <b-form-radio value="second">No</b-form-radio>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="openTrailingEdge"
                     class="bold"
                     label="4.5 Open trailing edge"
                     label-for="openTrailingEdge">
         <b-form-radio-group id="radiosOpenTrailingEdge" v-model="selectedOpenTrailingEdge" name="radioSubComponent">
           <b-form-radio value="first">Yes</b-form-radio>
           <b-form-radio value="second">No</b-form-radio>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="generalDamages"
                     class="bold"
                     label="4.6 General Damages"
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
