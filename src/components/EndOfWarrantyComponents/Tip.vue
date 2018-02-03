<template>
  <b-card id="tipCard">
  <b-card-header
    header="6. Tip"
    header-tag="header"
    v-b-toggle.collapseTipCard
    slot="header">
  </b-card-header>
  <b-collapse id="collapseTipCard" class="mt-2">
    <template>
     <b-form >
       <b-form-group id="drainHole"
                     class="bold"
                     label="6.1 Drain hole is clear of obstructions"
                     label-for="drainHole">
         <b-form-radio-group id="radiosDrainHole" v-model="selectedDrainHole"  name="radioSubComponent">
           <b-form-radio value="first">Yes</b-form-radio>
           <b-form-radio value="second">No</b-form-radio>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="noiseDefects"
                     class="bold"
                     label="6.2 Noise causing defects"
                     label-for="noiseDefects">
         <b-form-radio-group id="radiosNoiseDefects" v-model="selectedNoiseDefects" name="radioSubComponent">
           <b-form-radio value="first">Yes</b-form-radio>
           <b-form-radio value="second">No</b-form-radio>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="tipBondingCracks"
                     class="bold"
                     label="6.3 Cracks along the tip bonding"
                     label-for="tipBondingCracks">
         <b-form-radio-group id="radiosTipBondingCracks" v-model="selectedTipBondingCracks" name="radioSubComponent">
           <b-form-radio value="first">Yes</b-form-radio>
           <b-form-radio value="second">No</b-form-radio>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="generalDamages"
                     class="bold"
                     label="6.4 General Damages"
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
