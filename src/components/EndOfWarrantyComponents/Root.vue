<template>
  <b-card id="rootCard">
  <b-card-header
    header="1. Root"
    header-tag="header"
    v-b-toggle.collapseRoot
    slot="header">
  </b-card-header>
  <b-collapse id="collapseRoot" class="mt-2">
    <template>
     <b-form>
       <b-form-group id="serialNumber"
                     class="bold"
                     label="1.1 Serial Number"
                     label-for="serialNumber">
         <b-form-input id="serialNumberInput"
                       type="text"
                       v-model="this.rootData.form.serialNumber"
                       required
                       disabled>
         </b-form-input>
       </b-form-group>
       <hr>
       <b-form-group id="degreePlates"
                     class="bold"
                     label="1.2 Degree plates are properly fixed"
                     label-for="degreePlates">
         <b-form-radio-group class="inspRadioGrp" id="radiosDegree" v-model="this.rootData.selectedDegree">
           <b-form-radio value="first">Yes</b-form-radio>
           <b-form-radio value="second">No</b-form-radio>
           <b-btn v-b-toggle.collapseDegreePlatesInner variant="outline-dark" size="sm">View Images</b-btn>
           <b-collapse id="collapseDegreePlatesInner" class="mt-2">
             <b-card>
               <b-row>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.rootModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.rootModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.rootModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
              </b-row>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="rootBand"
                     class="bold"
                     label="1.3 Root band is free of defects"
                     label-for="rootBand">
         <b-form-radio-group class="inspRadioGrp" id="radiosRootBand" v-model="this.rootData.selectedRootBand">
           <b-form-radio value="first">Yes</b-form-radio>
           <b-form-radio value="second">No</b-form-radio>
           <b-btn v-b-toggle.collapseRootBandInner variant="outline-dark" size="sm">View Images</b-btn>
           <b-collapse id="collapseRootBandInner" class="mt-2">
             <b-card>
               <b-row>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.rootModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.rootModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
              </b-row>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="reinforcementLayer"
                     class="bold"
                     label="1.4 Reinforcement layers are free of defects"
                     label-for="reinforcementLayer">
         <b-form-radio-group class="inspRadioGrp" id="radiosReinforcement" v-model="this.rootData.selectedReinforcement">
           <b-form-radio value="first">Yes</b-form-radio>
           <b-form-radio value="second">No</b-form-radio>
           <b-btn v-b-toggle.collapseReinforcementInner variant="outline-dark" size="sm">View Images</b-btn>
           <b-collapse id="collapseReinforcementInner" class="mt-2">
             <b-card>
               <b-row>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.rootModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
              </b-row>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="rootCracks"
                     class="bold"
                     label="1.5 Root has cracks"
                     label-for="rootCracks">
         <b-form-radio-group class="inspRadioGrp" id="radiosRootCracks" v-model="this.rootData.selectedRootCracks">
           <b-form-radio value="first">Yes</b-form-radio>
           <b-form-radio value="second">No</b-form-radio>
           <b-btn v-b-toggle.collapseRootCracksInner variant="outline-dark" size="sm">View Images</b-btn>
           <b-collapse id="collapseRootCracksInner" class="mt-2">
             <b-card>
               <b-row>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.rootModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.rootModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.rootModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.rootModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
              </b-row>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="generalDamages"
                     class="bold"
                     label="1.6 General Damages"
                     label-for="generalDamages">
         <b-form-radio-group class="inspRadioGrp" id="radiosGeneralDamages" v-model="this.rootData.selectedRootDamages" >
           <b-form-radio value="first">Yes</b-form-radio>
           <b-form-radio value="second">No</b-form-radio>
           <b-btn v-b-toggle.collapseGeneralDamagesInner variant="outline-dark" size="sm">View Images</b-btn>
           <b-collapse id="collapseGeneralDamagesInner" class="mt-2">
             <b-card>
               <b-row>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.rootModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.rootModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.rootModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
              </b-row>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
      </b-form>
    </template>
  </b-collapse>
  <b-modal id="rootModal" title="Image">
    <b-img fluid src="../../assets/damage5.png" alt="Thumbnail" />
  </b-modal>
  </b-card>
</template>

<script>

export default {

  mounted() {
    // console.log(data.selectedDegree);
    //console.log(props);
  //  console.log(selectedRootBand);
    console.log(this.rootData);

  //  alert('here');
//  props.rootData;

  //  selectedDegree = this.rootData.selectedDegree;
},
  afterCreated() {
    alert('here');
      // console.log(this.rootData + 'data');
      // console.log('test')
      //
      // this.root.selectedDegree =
  },
  data () {
    return {
      selectedDegree : this.rootData.selectedDegree,
      selectedRootBand : this.rootData.selectedRootBand,
      selectedReinforcement : this.rootData.selectedReinforcement,
      selectedRootCracks : this.rootData.selectedRootCracks,
      selectedRootDamages : this.rootData.selectedRootDamages
    }
  },
  props: {
   rootData: { type: Object } // you need to give the parent components' data here.
  }
}
</script>
