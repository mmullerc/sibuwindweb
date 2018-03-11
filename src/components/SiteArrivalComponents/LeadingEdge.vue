<template>
  <b-card id="leadingEdgeCard">
  <b-card-header
    header="5. Leading Edge"
    header-tag="header"
    v-b-toggle.collapseLeadingEdge
    slot="header">
  </b-card-header>
  <b-collapse id="collapseLeadingEdge" class="mt-2">
    <template>
     <b-form>
       <b-form-group id="surfaceDefectsL"
                     class="bold"
                     label="5.1 Superficie Livre de defeitos recobrimento"
                     label-for="surfaceDefectsL">
         <b-form-radio-group class="inspRadioGrp" id="radiosSurfaceDefectsL" v-model="this.leadingEdgeData.selectedSurfaceDefectsL">
           <b-form-radio value="first">sim</b-form-radio>
           <b-form-radio value="second">não</b-form-radio>
           <b-btn v-b-toggle.collapseSurfaceDefectsT variant="outline-dark" size="sm">Ver imagens</b-btn>
           <b-collapse id="collapseSurfaceDefectsL" class="mt-2">
             <b-card>
               <b-row>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.leadingEdgeModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
              </b-row>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="surfaceStructuralDefectsL"
                     class="bold"
                     label="5.2 Superficie livre de defeitos estruturais"
                     label-for="surfaceStructuralDefectsL">
         <b-form-radio-group class="inspRadioGrp" id="radiosStructuralDefectsL" v-model="this.leadingEdgeData.selectedSurfaceStructuralDefectsL">
           <b-form-radio value="first">sim</b-form-radio>
           <b-form-radio value="second">não</b-form-radio>
           <b-btn v-b-toggle.collapseSurfaceStructuralDefectsTInner variant="outline-dark" size="sm">Ver imagens</b-btn>
           <b-collapse id="collapseSurfaceStructuralDefectsLInner" class="mt-2">
             <b-card>
               <b-row>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.leadingEdgeModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.leadingEdgeModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.leadingEdgeModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.leadingEdgeModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
              </b-row>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="dustFreeT"
                     class="bold"
                     label="5.3 Superficie livre de sujeiras"
                     label-for="dustFreeT">
         <b-form-radio-group class="inspRadioGrp" id="radiosDustFreeT" v-model="this.leadingEdgeData.selectedDustFreeL">
           <b-form-radio value="first">sim</b-form-radio>
           <b-form-radio value="second">não</b-form-radio>
           <b-btn v-b-toggle.collapseDustFreeTInner variant="outline-dark" size="sm">Ver imagens</b-btn>
           <b-collapse id="collapseDustFreeLInner" class="mt-2">
             <b-card>
               <b-row>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.leadingEdgeModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.leadingEdgeModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.leadingEdgeModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.leadingEdgeModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
              </b-row>
             </b-card>
           </b-collapse>
           <hr>
           <b-form-group id="generalDamagesL"
                         class="bold"
                         label="5.4 Danos gerais"
                         label-for="generalDamagesL">
             <b-form-radio-group class="inspRadioGrp" id="radiosGeneralDamagesL" v-model="this.leadingEdgeData.selectedGeneralDamagesL" >
               <b-form-radio value="first">sim</b-form-radio>
               <b-form-radio value="second">não</b-form-radio>
               <b-btn v-b-toggle.collapseGeneralDamagesTInner variant="outline-dark" size="sm">Ver imagens</b-btn>
               <b-collapse id="collapseGeneralDamagesLInner" class="mt-2">
                 <b-card>
                   <b-row>
                    <b-col>
                      <b-img class="thumbnailSize" center v-b-modal.leadingEdgeModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                    </b-col>
                    <b-col>
                      <b-img class="thumbnailSize" center v-b-modal.leadingEdgeModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                    </b-col>
                    <b-col>
                      <b-img class="thumbnailSize" center v-b-modal.leadingEdgeModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                    </b-col>
                  </b-row>
                 </b-card>
               </b-collapse>
             </b-form-radio-group>
           </b-form-group>
         </b-form-radio-group>
       </b-form-group>
       <hr>
      </b-form>
    </template>
  </b-collapse>
  <b-modal id="leadingEdgeModal" title="Image">
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
    console.log(this.suctionSideData);

  //  alert('here');
//  props.suctionSideData;

  //  selectedDegree = this.suctionSideData.selectedDegree;
},
  afterCreated() {
    alert('here');
      // console.log(this.suctionSideData + 'data');
      // console.log('test')
      //
      // this.root.selectedDegree =
  },
  data () {
    return {
    }
  },
  props: {
   leadingEdgeData: { type: Object } // you need to give the parent components' data here.
  }
}
</script>
