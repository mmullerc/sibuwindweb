<template>
  <b-card id="internalInspectionCard">
  <b-card-header
    header="3. Internal Inspections"
    header-tag="header"
    v-b-toggle.collapseInternalInspection
    slot="header">
  </b-card-header>
  <b-collapse id="collapseInternalInspection" class="mt-2">
    <template>
     <b-form >
       <b-form-group id="closeoutHatch"
                     class="bold"
                     label="3.1 Closeout hatch mechanism functions properly"
                     label-for="closeoutHatch">
         <b-form-radio-group id="radiosCloseoutHatch" v-model="selectedCloseoutHatch"  name="radioSubComponent">
           <b-form-radio value="first">Yes</b-form-radio>
           <b-form-radio value="second">No</b-form-radio>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="greaseOil"
                     class="bold"
                     label="3.2 Grease or oil present"
                     label-for="greaseOil">
         <b-form-radio-group id="radiosGreaseOil" v-model="selectedGreaseOil" name="radioSubComponent">
           <b-form-radio value="first">Yes</b-form-radio>
           <b-form-radio value="second">No</b-form-radio>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="foreignMaterials"
                     class="bold"
                     label="3.3 Loose bonding paste or foreign materials present"
                     label-for="foreignMaterials">
         <b-form-radio-group id="radiosForeignMaterials" v-model="selectedForeignMaterials" name="radioSubComponent">
           <b-form-radio value="first">Yes</b-form-radio>
           <b-form-radio value="second">No</b-form-radio>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="lpsCard"
                     class="bold"
                     label="3.4 LPS card is in good state"
                     label-for="lpsCard">
         <b-form-radio-group id="radiosLpsCard" v-model="selectedLpsCard" name="radioSubComponent">
           <b-form-radio value="first">Yes</b-form-radio>
           <b-form-radio value="second">No</b-form-radio>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="shearWeb"
                     class="bold"
                     label="3.5 Shear web delaminations"
                     label-for="shearWeb">
         <b-form-radio-group id="radiosShearWeb" v-model="selectedShearWeb" name="radioSubComponent">
           <b-form-radio value="first">Yes</b-form-radio>
           <b-form-radio value="second">No</b-form-radio>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="bondingLine"
                     class="bold"
                     label="3.6 Bonding line voids"
                     label-for="bondingLine">
         <b-form-radio-group id="radiosBondingLine" v-model="selectedBondingLine" name="radioSubComponent">
           <b-form-radio value="first">Yes</b-form-radio>
           <b-form-radio value="second">No</b-form-radio>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="generalDamages"
                     class="bold"
                     label="3.7 General Damages"
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
