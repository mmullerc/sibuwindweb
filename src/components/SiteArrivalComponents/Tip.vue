<template>
  <b-card id="tipCard">
  <b-card-header
    header="6. Ponta"
    header-tag="header"
    v-b-toggle.collapseTipCard
    slot="header">
  </b-card-header>
  <b-collapse id="collapseTipCard" class="mt-2">
    <template>
     <b-form >
       <b-form-group id="drainHole"
                     class="bold"
                     label="6.1 Furo de dreno desobstruído"
                     label-for="drainHole">
         <b-form-radio-group class="inspRadioGrp" id="radiosDrainHole" v-model="this.tipData.selectedDrainHole">
           <b-form-radio value="first">Yes</b-form-radio>
           <b-form-radio value="second">No</b-form-radio>
           <b-btn v-b-toggle.collapseDrainHoleInner variant="outline-dark" size="sm">Ver imagens</b-btn>
           <b-collapse id="collapseDrainHoleInner" class="mt-2">
             <b-card>
               <b-row>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.tipModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.tipModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.tipModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
              </b-row>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="noiseDefects"
                     class="bold"
                     label="6.2 Selamento do receptor intacto"
                     label-for="noiseDefects">
         <b-form-radio-group id="radiosNoiseDefects" class="inspRadioGrp" v-model="this.tipData.selectedNoiseDefects">
           <b-form-radio value="first">Yes</b-form-radio>
           <b-form-radio value="second">No</b-form-radio>
           <b-btn v-b-toggle.collapsenoiseDefectsInner variant="outline-dark" size="sm">Ver imagens</b-btn>
           <b-collapse id="collapsenoiseDefectsInner" class="mt-2">
             <b-card>
               <b-row>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.tipModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.tipModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.tipModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
              </b-row>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="tipBondingCracks"
                     class="bold"
                     label="6.3 Ponta Metalica não apresenta marcas de impacto"
                     label-for="tipBondingCracks">
         <b-form-radio-group id="radiosTipBondingCracks" class="inspRadioGrp" v-model="this.tipData.selectedTipBondingCracks">
           <b-form-radio value="first">Yes</b-form-radio>
           <b-form-radio value="second">No</b-form-radio>
           <b-btn v-b-toggle.collapsetipBondingCracksInner variant="outline-dark" size="sm">Ver imagens</b-btn>
           <b-collapse id="collapsetipBondingCracksInner" class="mt-2">
             <b-card>
               <b-row>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.tipModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.tipModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.tipModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
              </b-row>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="generalDamagesTip"
                     class="bold"
                     label="6.4 Danos gerais"
                     label-for="generalDamagesSuction">
         <b-form-radio-group class="inspRadioGrp" id="radiosGeneralDamagesTip" v-model="this.tipData.selectedGeneralDamagesTip" >
           <b-form-radio value="first">sim</b-form-radio>
           <b-form-radio value="second">não</b-form-radio>
           <b-btn v-b-toggle.collapseGeneralDamagesTipInner variant="outline-dark" size="sm">Ver imagens</b-btn>
           <b-collapse id="collapseGeneralDamagesTipInner" class="mt-2">
             <b-card>
               <b-row>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.tipModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.tipModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.tipModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
              </b-row>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
         </b-form-group>
      </b-form>
    </template>
  </b-collapse>
  <b-modal id="tipModal" title="Image">
    <b-img fluid src="../../assets/damage5.png" alt="Thumbnail" />
  </b-modal>
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
   tipData:  { type: Object }  // you need to give the parent components' data here.
  }
}
</script>
