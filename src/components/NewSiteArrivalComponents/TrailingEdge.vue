<template>
  <b-card id="suctionSideCard">
  <b-card-header
    header="4. Trailing Edge"
    header-tag="header"
    v-b-toggle.collapseTrailingEdge
    slot="header">
  </b-card-header>
  <b-collapse id="collapseTrailingEdge" class="mt-2">
    <template>
     <b-form>
       <b-form-group id="surfaceDefectsT"
                     class="bold"
                     label="4.1 Superficie Livre de defeitos recobrimento"
                     label-for="surfaceDefectsT">
         <b-form-radio-group class="inspRadioGrp" id="radiosSurfaceDefectsT" v-model="this.trailingEdgeData.selectedSurfaceDefectsT">
           <b-row>
             <b-col>
               <b-form-radio value="first">sim</b-form-radio>
               <b-form-radio value="second">não</b-form-radio>
             </b-col>
             <b-col class="img-btns">
               <b-btn variant="outline-dark" size="sm">Adicione imagens</b-btn>
               <b-btn v-b-toggle.collapseSurfaceDefectsT variant="outline-dark" size="sm">Ver imagens</b-btn>
             </b-col>
           </b-row>
           <b-collapse id="collapseSurfaceDefectsT" class="mt-2">
             <b-card>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="surfaceStructuralDefectsT"
                     class="bold"
                     label="4.2 Superficie livre de defeitos estruturais"
                     label-for="surfaceStructuralDefectsT">
         <b-form-radio-group class="inspRadioGrp" id="radiosStructuralDefectsT" v-model="this.trailingEdgeData.selectedSurfaceStructuralDefectsT">
           <b-row>
             <b-col>
               <b-form-radio value="first">sim</b-form-radio>
               <b-form-radio value="second">não</b-form-radio>
             </b-col>
             <b-col class="img-btns">
               <b-btn variant="outline-dark" size="sm">Adicione imagens</b-btn>
               <b-btn v-b-toggle.collapseSurfaceStructuralDefectsTInner variant="outline-dark" size="sm">Ver imagens</b-btn>
             </b-col>
           </b-row>
           <b-collapse id="collapseSurfaceStructuralDefectsTInner" class="mt-2">
             <b-card>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="dustFreeT"
                     class="bold"
                     label="4.3 Superficie livre de sujeiras"
                     label-for="dustFreeT">
         <b-form-radio-group class="inspRadioGrp" id="radiosDustFreeT" v-model="this.trailingEdgeData.selectedDustFreeT">
           <b-row>
             <b-col>
               <b-form-radio value="first">sim</b-form-radio>
               <b-form-radio value="second">não</b-form-radio>
             </b-col>
             <b-col class="img-btns">
               <b-btn variant="outline-dark" size="sm">Adicione imagens</b-btn>
               <b-btn v-b-toggle.collapseDustFreeTInner variant="outline-dark" size="sm">Ver imagens</b-btn>
             </b-col>
           </b-row>
           <b-collapse id="collapseDustFreeTInner" class="mt-2">
             <b-card>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="generalDamagesT"
                     class="bold"
                     label="1.4 Danos gerais"
                     label-for="generalDamagesT">
         <b-form-radio-group class="inspRadioGrp" id="radiosGeneralDamagesT" v-model="this.trailingEdgeData.selectedGeneralDamagesT" >
           <b-row>
             <b-col>
               <b-form-radio value="first">sim</b-form-radio>
               <b-form-radio value="second">não</b-form-radio>
             </b-col>
             <b-col class="img-btns">
               <b-btn variant="outline-dark" size="sm">Adicione imagens</b-btn>
               <b-btn v-b-toggle.collapseGeneralDamagesTInner variant="outline-dark" size="sm">Ver imagens</b-btn>
             </b-col>
           </b-row>
           <b-collapse id="collapseGeneralDamagesTInner" class="mt-2">
             <b-card>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
      </b-form>
    </template>
  </b-collapse>
  <b-modal id="trailingEdgeModal" title="Image">
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
   trailingEdgeData: { type: Object } // you need to give the parent components' data here.
  }
}
</script>
