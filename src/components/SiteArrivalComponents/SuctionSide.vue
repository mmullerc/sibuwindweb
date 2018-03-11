<template>
  <b-card id="suctionSideCard">
  <b-card-header
    header="2. Suction Side"
    header-tag="header"
    v-b-toggle.collapseSuctionSide
    slot="header">
  </b-card-header>
  <b-collapse id="collapseSuctionSide" class="mt-2">
    <template>
     <b-form>
       <b-form-group id="recievers"
                     class="bold"
                     label="2.1 Receptores de Para Raio posicionado"
                     label-for="recievers">
         <b-form-radio-group class="inspRadioGrp" id="radiosReciever" v-model="this.suctionSideData.selectedRecievers">
           <b-form-radio value="first">sim</b-form-radio>
           <b-form-radio value="second">não</b-form-radio>
           <b-btn v-b-toggle.collapseRecievers variant="outline-dark" size="sm">Ver imagens</b-btn>
           <b-collapse id="collapseRecievers" class="mt-2">
             <b-card>
               <b-row>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.suctionSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.suctionSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.suctionSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
              </b-row>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="identificationTags"
                     class="bold"
                     label="2.2 Etiquetas de identificação posicionadas"
                     label-for="identificationTags">
         <b-form-radio-group class="inspRadioGrp" id="identificationTagsDegree" v-model="this.suctionSideData.selectedIdentificationTags">
           <b-form-radio value="first">sim</b-form-radio>
           <b-form-radio value="second">não</b-form-radio>
           <b-btn v-b-toggle.collapseIdentificationTagsInner variant="outline-dark" size="sm">Ver imagens</b-btn>
           <b-collapse id="collapseIdentificationTagsInner" class="mt-2">
             <b-card>
               <b-row>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.suctionSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.suctionSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.suctionSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
              </b-row>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="surfaceDefects"
                     class="bold"
                     label="2.3 Superficie Livre de defeitos recobrimento"
                     label-for="surfaceDefects">
         <b-form-radio-group class="inspRadioGrp" id="radiosSurfaceDefects" v-model="this.suctionSideData.selectedSurfaceDefects">
           <b-form-radio value="first">sim</b-form-radio>
           <b-form-radio value="second">não</b-form-radio>
           <b-btn v-b-toggle.collapseSurfaceDefects variant="outline-dark" size="sm">Ver imagens</b-btn>
           <b-collapse id="collapseSurfaceDefects" class="mt-2">
             <b-card>
               <b-row>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.suctionSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
              </b-row>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="surfaceStructuralDefects"
                     class="bold"
                     label="2.4 Superficie livre de defeitos estruturais"
                     label-for="surfaceStructuralDefects">
         <b-form-radio-group class="inspRadioGrp" id="radiosBoltsAligned" v-model="this.suctionSideData.selectedSurfaceStructuralDefects">
           <b-form-radio value="first">sim</b-form-radio>
           <b-form-radio value="second">não</b-form-radio>
           <b-btn v-b-toggle.collapseSurfaceStructuralDefectsInner variant="outline-dark" size="sm">Ver imagens</b-btn>
           <b-collapse id="collapseSurfaceStructuralDefectsInner" class="mt-2">
             <b-card>
               <b-row>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.suctionSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.suctionSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.suctionSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.suctionSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
              </b-row>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="dustFree"
                     class="bold"
                     label="2.5 Superficie livre de sujeiras"
                     label-for="dustFree">
         <b-form-radio-group class="inspRadioGrp" id="radiosDustFree" v-model="this.suctionSideData.selectedDustFree">
           <b-form-radio value="first">sim</b-form-radio>
           <b-form-radio value="second">não</b-form-radio>
           <b-btn v-b-toggle.collapseDustFreeInner variant="outline-dark" size="sm">Ver imagens</b-btn>
           <b-collapse id="collapseDustFreeInner" class="mt-2">
             <b-card>
               <b-row>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.suctionSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.suctionSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.suctionSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.suctionSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
              </b-row>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="defectiveArea"
                     class="bold"
                     label="2.6 Area de suporte livre de defeitos"
                     label-for="rootZone">
         <b-form-radio-group class="inspRadioGrp" id="radiosDefectiveArea" v-model="this.suctionSideData.selectedDefectiveArea">
           <b-form-radio value="first">sim</b-form-radio>
           <b-form-radio value="second">não</b-form-radio>
           <b-btn v-b-toggle.collapseDefectiveAreaInner variant="outline-dark" size="sm">Ver imagens</b-btn>
           <b-collapse id="collapseDefectiveAreaInner" class="mt-2">
             <b-card>
               <b-row>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.suctionSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.suctionSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.suctionSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.suctionSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
              </b-row>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="generalDamagesSuction"
                     class="bold"
                     label="1.9 Danos gerais"
                     label-for="generalDamagesSuction">
         <b-form-radio-group class="inspRadioGrp" id="radiosGeneralDamagesSuction" v-model="this.suctionSideData.selectedGeneralDamagesSuction" >
           <b-form-radio value="first">sim</b-form-radio>
           <b-form-radio value="second">não</b-form-radio>
           <b-btn v-b-toggle.collapseGeneralDamagesSuctionInner variant="outline-dark" size="sm">Ver imagens</b-btn>
           <b-collapse id="collapseGeneralDamagesSuctionInner" class="mt-2">
             <b-card>
               <b-row>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.suctionSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.suctionSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.suctionSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
              </b-row>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
      </b-form>
    </template>
  </b-collapse>
  <b-modal id="suctionSideModal" title="Image">
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
   suctionSideData: { type: Object } // you need to give the parent components' data here.
  }
}
</script>
