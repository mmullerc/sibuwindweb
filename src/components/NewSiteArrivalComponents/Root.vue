<template>
  <b-card id="rootCard">
  <b-card-header
    header="1. Raíz"
    header-tag="header"
    v-b-toggle.collapseRoot
    slot="header">
  </b-card-header>
  <b-collapse id="collapseRoot" class="mt-2">
    <template>
     <b-form>
       <b-form-group id="identificationTags"
                     class="bold"
                     label="1.1 Etiquetas de identificação posicionadas"
                     label-for="identificationTags">
         <b-form-radio-group class="inspRadioGrp" id="identificationTagsDegree" v-model="this.rootData.selectedIdentificationTags">
           <b-row>
             <b-col>
               <b-form-radio value="first">sim</b-form-radio>
               <b-form-radio value="second">não</b-form-radio>
             </b-col>
             <b-col class="align-right">
               <b-btn v-b-toggle.collapseIdentificationTagsInner variant="outline-dark" size="sm">Ver imagens</b-btn>
             </b-col>
             <b-col >
               <b-form-file  class="align-right" plain size="sm" @change="onFileChange" placeholder="Choose a file..."></b-form-file>
             </b-col>
           </b-row>
           <b-collapse id="collapseIdentificationTagsInner" class="mt-2">
             <b-card>
               <b-row>
                <b-col v-if="this.image">
                  <b-img class="thumbnailSize" center v-b-modal.rootModal thumbnail fluid :src="this.image" alt="Thumbnail" />
                </b-col>
              </b-row>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="rootBand"
                     class="bold"
                     label="1.2 Selante do anel da raíz livre de defeitos"
                     label-for="rootBand">
         <b-form-radio-group class="inspRadioGrp" id="radiosRootBand" v-model="this.rootData.selectedRootBand">
           <b-row>
             <b-col>
               <b-form-radio value="first">sim</b-form-radio>
               <b-form-radio value="second">não</b-form-radio>
             </b-col>
             <b-col class="img-btns">
               <b-btn variant="outline-dark" size="sm">Adicione imagens</b-btn>
               <b-btn v-b-toggle.collapseRootBandInner variant="outline-dark" size="sm">Ver imagens</b-btn>
             </b-col>
           </b-row>
           <b-collapse id="collapseRootBandInner" class="mt-2">
             <b-card>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="boltsCorrosion"
                     class="bold"
                     label="1.3 Parafusos livre de oxidação"
                     label-for="boltsCorrosion">
         <b-form-radio-group class="inspRadioGrp" id="radiosScrews" v-model="this.rootData.selectedBolts">
           <b-row>
             <b-col>
               <b-form-radio value="first">sim</b-form-radio>
               <b-form-radio value="second">não</b-form-radio>
             </b-col>
             <b-col class="img-btns">
               <b-btn variant="outline-dark" size="sm">Adicione imagens</b-btn>
               <b-btn v-b-toggle.collapseBoltsCorrosion variant="outline-dark" size="sm">Ver imagens</b-btn>
             </b-col>
           </b-row>
           <b-collapse id="collapseBoltsCorrosion" class="mt-2">
             <b-card>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="boltsAligned"
                     class="bold"
                     label="1.4 Tampa do Close Out posicionada"
                     label-for="boltsAligned">
         <b-form-radio-group class="inspRadioGrp" id="radiosBoltsAligned" v-model="this.rootData.selectedBoltsAligned">
           <b-row>
             <b-col>
               <b-form-radio value="first">sim</b-form-radio>
               <b-form-radio value="second">não</b-form-radio>
             </b-col>
             <b-col class="img-btns">
               <b-btn variant="outline-dark" size="sm">Adicione imagens</b-btn>
               <b-btn v-b-toggle.collapseBoltsAlignedInner variant="outline-dark" size="sm">Ver imagens</b-btn>
             </b-col>
           </b-row>
           <b-collapse id="collapseBoltsAlignedInner" class="mt-2">
             <b-card>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="closeOutLid"
                     class="bold"
                     label="1.5 Tampa do Close Out posicionada"
                     label-for="closeOutLid">
         <b-form-radio-group class="inspRadioGrp" id="radiosCloseOutLid" v-model="this.rootData.selectedCloseOutLid">
           <b-row>
             <b-col>
               <b-form-radio value="first">sim</b-form-radio>
               <b-form-radio value="second">não</b-form-radio>
             </b-col>
             <b-col class="img-btns">
               <b-btn variant="outline-dark" size="sm">Adicione imagens</b-btn>
               <b-btn v-b-toggle.collapseCloseOutLidInner variant="outline-dark" size="sm">Ver imagens</b-btn>
             </b-col>
           </b-row>
           <b-collapse id="collapseCloseOutLidInner" class="mt-2">
             <b-card>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="rootZone"
                     class="bold"
                     label="1.6 Zona da Raíz livre de defeitos recobrimento"
                     label-for="rootZone">
         <b-form-radio-group class="inspRadioGrp" id="radiosRootZone" v-model="this.rootData.selectedRootZone">
           <b-row>
             <b-col>
               <b-form-radio value="first">sim</b-form-radio>
               <b-form-radio value="second">não</b-form-radio>
             </b-col>
             <b-col class="img-btns">
               <b-btn variant="outline-dark" size="sm">Adicione imagens</b-btn>
               <b-btn v-b-toggle.collapseRootZoneInner variant="outline-dark" size="sm">Ver imagens</b-btn>
             </b-col>
           </b-row>
           <b-collapse id="collapseRootZoneInner" class="mt-2">
             <b-card>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="rootZoneStructural"
                     class="bold"
                     label="1.7 Zona da Raíz livre de defeitos estruturais"
                     label-for="rootZoneStructural">
         <b-form-radio-group class="inspRadioGrp" id="radiosRootZoneStructural" v-model="this.rootData.selectedRootZoneStructural">
           <b-row>
             <b-col>
               <b-form-radio value="first">sim</b-form-radio>
               <b-form-radio value="second">não</b-form-radio>
             </b-col>
             <b-col class="img-btns">
               <b-btn variant="outline-dark" size="sm">Adicione imagens</b-btn>
               <b-btn v-b-toggle.collapseRootZoneStructuralInner variant="outline-dark" size="sm">Ver imagens</b-btn>
             </b-col>
           </b-row>
           <b-collapse id="collapseRootZoneStructuralInner" class="mt-2">
             <b-card>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="ceroDegreePLate"
                     class="bold"
                     label="1.8 Plaqueta Zero Graus posicionada"
                     label-for="rootZoneStructural">
         <b-form-radio-group class="inspRadioGrp" id="radiosCeroDegreePLate" v-model="this.rootData.selectedCeroDegreePLate">
           <b-row>
             <b-col>
               <b-form-radio value="first">sim</b-form-radio>
               <b-form-radio value="second">não</b-form-radio>
             </b-col>
             <b-col class="img-btns">
               <b-btn variant="outline-dark" size="sm">Adicione imagens</b-btn>
               <b-btn v-b-toggle.collapseCeroDegreePLateInner variant="outline-dark" size="sm">Ver imagens</b-btn>
             </b-col>
           </b-row>
           <b-collapse id="collapseCeroDegreePLateInner" class="mt-2">
             <b-card>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
         <hr>
       </b-form-group>
       <b-form-group id="generalDamages"
                     class="bold"
                     label="1.9 Danos gerais"
                     label-for="generalDamages">
         <b-form-radio-group class="inspRadioGrp" id="radiosGeneralDamages" v-model="this.rootData.selectedRootDamages" >
           <b-row>
             <b-col>
               <b-form-radio value="first">sim</b-form-radio>
               <b-form-radio value="second">não</b-form-radio>
             </b-col>
             <b-col class="img-btns">
               <b-btn variant="outline-dark" size="sm">Adicione imagens</b-btn>
               <b-btn v-b-toggle.collapseGeneralDamagesInner variant="outline-dark" size="sm">Ver imagens</b-btn>
             </b-col>
           </b-row>
           <b-collapse id="collapseGeneralDamagesInner" class="mt-2">
             <b-card>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
      </b-form>
    </template>
  </b-collapse>
  <b-modal id="rootModal" title="Image">
    <b-img fluid :src="this.image" alt="Thumbnail" />
  </b-modal>
  </b-card>
</template>

<style>
  .custom-file-input:lang(en)~.custom-file-label::after {
      content: "Browse";
  }
  .align-right{
    text-align: right;
  }
</style>
<script>

export default {
  mounted() {
    console.log(this.rootData);
},
methods : {
  onFileChange(e) {
    var files = e.target.files || e.dataTransfer.files;
    if (!files.length)
      return;
    this.createImage(files[0]);
  },
  createImage(file) {
     this.image = new Image();
    var reader = new FileReader();

    reader.onload = (e) => {
      this.image = e.target.result;
    };
    reader.readAsDataURL(file);
  },
  removeImage: function (e) {
    this.image = '';
  }
},
  data () {
    return {
      image : null
    }
  },
  props: {
   rootData: { type: Object } // you need to give the parent components' data here.
  }
}
</script>
