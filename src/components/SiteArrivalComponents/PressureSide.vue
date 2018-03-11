<template>
  <b-card id="pressureSideCard">
  <b-card-header
    header="3. Pressure Side"
    header-tag="header"
    v-b-toggle.collapsepressureSide
    slot="header">
  </b-card-header>
  <b-collapse id="collapsepressureSide" class="mt-2">
    <template>
     <b-form>
       <b-form-group id="recieversPressure"
                     class="bold"
                     label="3.1 Receptores de Para Raio posicionado"
                     label-for="recieversPressure">
         <b-form-radio-group class="inspRadioGrp" id="radiosReciever" v-model="this.pressureSideData.selectedRecieversPressure">
           <b-form-radio value="first">sim</b-form-radio>
           <b-form-radio value="second">não</b-form-radio>
           <b-btn v-b-toggle.collapseRecieversPressure variant="outline-dark" size="sm">Ver imagens</b-btn>
           <b-collapse id="collapseRecieversPressure" class="mt-2">
             <b-card>
               <b-row>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.pressureSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.pressureSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.pressureSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
              </b-row>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="identificationTagsPressure"
                     class="bold"
                     label="3.2 Etiquetas de identificação posicionadas"
                     label-for="identificationTagsPressure">
         <b-form-radio-group class="inspRadioGrp" id="radioIdentificationTagsPressure" v-model="this.pressureSideData.selectedIdentificationTagsPressure">
           <b-form-radio value="first">sim</b-form-radio>
           <b-form-radio value="second">não</b-form-radio>
           <b-btn v-b-toggle.collapseIdentificationTagsPressureInner variant="outline-dark" size="sm">Ver imagens</b-btn>
           <b-collapse id="collapseIdentificationTagsPressureInner" class="mt-2">
             <b-card>
               <b-row>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.pressureSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.pressureSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.pressureSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
              </b-row>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="surfaceDefectsP"
                     class="bold"
                     label="3.3 Superficie Livre de defeitos recobrimento"
                     label-for="surfaceDefectsP">
         <b-form-radio-group class="inspRadioGrp" id="radiossurfaceDefectsP" v-model="this.pressureSideData.selectedsurfaceDefectsP">
           <b-form-radio value="first">sim</b-form-radio>
           <b-form-radio value="second">não</b-form-radio>
           <b-btn v-b-toggle.collapsesurfaceDefectsP variant="outline-dark" size="sm">Ver imagens</b-btn>
           <b-collapse id="collapsesurfaceDefectsP" class="mt-2">
             <b-card>
               <b-row>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.pressureSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
              </b-row>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="surfaceStructuralDefectsP"
                     class="bold"
                     label="3.4 Superficie livre de defeitos estruturais"
                     label-for="surfaceStructuralDefectsP">
         <b-form-radio-group class="inspRadioGrp" id="radiosSurfaceStructuralDefectsP" v-model="this.pressureSideData.selectedSurfaceStructuralDefectsP">
           <b-form-radio value="first">sim</b-form-radio>
           <b-form-radio value="second">não</b-form-radio>
           <b-btn v-b-toggle.collapseSurfaceStructuralDefectsPInner variant="outline-dark" size="sm">Ver imagens</b-btn>
           <b-collapse id="collapseSurfaceStructuralDefectsPInner" class="mt-2">
             <b-card>
               <b-row>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.pressureSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.pressureSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.pressureSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.pressureSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
              </b-row>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="dustFreeP"
                     class="bold"
                     label="3.5 Superficie livre de sujeiras"
                     label-for="dustFreeP">
         <b-form-radio-group class="inspRadioGrp" id="radiosDustFreeP" v-model="this.pressureSideData.selectedDustFreeP">
           <b-form-radio value="first">sim</b-form-radio>
           <b-form-radio value="second">não</b-form-radio>
           <b-btn v-b-toggle.collapseDustFreePInner variant="outline-dark" size="sm">Ver imagens</b-btn>
           <b-collapse id="collapseDustFreePInner" class="mt-2">
             <b-card>
               <b-row>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.pressureSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.pressureSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.pressureSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.pressureSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
              </b-row>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="defectiveAreaP"
                     class="bold"
                     label="3.6 Area de suporte livre de defeitos"
                     label-for="rootZone">
         <b-form-radio-group class="inspRadioGrp" id="radiosdefectiveAreaP" v-model="this.pressureSideData.selecteddefectiveAreaP">
           <b-form-radio value="first">sim</b-form-radio>
           <b-form-radio value="second">não</b-form-radio>
           <b-btn v-b-toggle.collapsedefectiveAreaPInner variant="outline-dark" size="sm">Ver imagens</b-btn>
           <b-collapse id="collapsedefectiveAreaPInner" class="mt-2">
             <b-card>
               <b-row>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.pressureSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.pressureSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.pressureSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.pressureSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
              </b-row>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
       <hr>
       <b-form-group id="generalDamagesP"
                     class="bold"
                     label="3.7 Danos gerais"
                     label-for="generalDamagesP">
         <b-form-radio-group class="inspRadioGrp" id="radiosgeneralDamagesP" v-model="this.pressureSideData.selectedgeneralDamagesP" >
           <b-form-radio value="first">sim</b-form-radio>
           <b-form-radio value="second">não</b-form-radio>
           <b-btn v-b-toggle.collapsegeneralDamagesPInner variant="outline-dark" size="sm">Ver imagens</b-btn>
           <b-collapse id="collapsegeneralDamagesPInner" class="mt-2">
             <b-card>
               <b-row>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.pressureSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.pressureSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
                <b-col>
                  <b-img class="thumbnailSize" center v-b-modal.pressureSideModal thumbnail fluid src="../../assets/damage5.png" alt="Thumbnail" />
                </b-col>
              </b-row>
             </b-card>
           </b-collapse>
         </b-form-radio-group>
       </b-form-group>
      </b-form>
    </template>
  </b-collapse>
  <b-modal id="pressureSideModal" title="Image">
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
    console.log(this.pressureSideData);

  //  alert('here');
//  props.pressureSideData;

  //  selectedDegree = this.pressureSideData.selectedDegree;
},
  afterCreated() {
    alert('here');
      // console.log(this.pressureSideData + 'data');
      // console.log('test')
      //
      // this.root.selectedDegree =
  },
  data () {
    return {
    }
  },
  props: {
   pressureSideData: { type: Object } // you need to give the parent components' data here.
  }
}
</script>
