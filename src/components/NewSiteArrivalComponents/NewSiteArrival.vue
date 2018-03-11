<template>
  <div @submit="onSubmit">
    <b-row>
      <b-col>
        <div>
          <h6>
            Número de séria da Pá: {{this.componentNumber}}
          </h6>
          <h6>
            Técnico: Raul Mendez
          </h6>
          <h6>
            Data: 10/12/2017
          </h6>
        </div>
      </b-col>
      <b-col>
        <div>
          <h6>
            Parque eólico: {{this.windFarm}}
          </h6>
          <h6>
            Localização: Spain
          </h6>
          <h6>
            Tipo de Inspeção: {{this.checkListType}}
          </h6>
        </div>
      </b-col>
      <b-col>
        <h6>
          Severidade: 5
        </h6>
        <h6>
          Dano: 8
        </h6>
        <h6>
          Estatus: In progress
        </h6>
      </b-col>
      <b-col>
        <div class="submitDiv">
          <b-button class="submitBtn" variant="outline-primary">Salvar</b-button>
          <b-button class="submitBtn" variant="danger">Cancelar</b-button>
        </div>
      </b-col>
    </b-row>
    <hr>
    <Root :rootData="rootData"></Root>
    <br>
    <SuctionSide :suctionSideData="suctionSideData"></SuctionSide>
    <br>
    <PressureSide :pressureSideData="pressureSideData"></PressureSide>
    <br>
    <TrailingEdge :trailingEdgeData="trailingEdgeData"></TrailingEdge>
    <br>
    <LeadingEdge :leadingEdgeData="leadingEdgeData"></LeadingEdge>
    <br>
    <Tip :tipData="tipData"></Tip>
  </div>
</template>

<script>
import Root from './Root';
import SuctionSide from './SuctionSide';
import PressureSide from './PressureSide';
import LeadingEdge from './LeadingEdge';
import TrailingEdge from './TrailingEdge';
import Tip from './Tip';
import store from '../../store';

export default {
  beforeCreate() {
    this.windFarm = store.getters.windFarm;
    this.componentNumber = store.getters.componentNumber;
    this.componentType = store.getters.componentType;
    this.checkListType = store.getters.checkListType;
    this.turbineNumber = store.getters.turbineNumber;

    console.log('over here')
    console.log(store.getters.checkListType);
  },
  components: {
    Root,
    SuctionSide,
    PressureSide,
    TrailingEdge,
    LeadingEdge,
    Tip
  },
  data () {
    return {
      rootData: {
        form: {
          serialNumber: '12312312',
          name: '',
          food: null,
          checked: []
        },
        selectedIdentificationTags : null,
        selectedRootBand  : null,
        selectedBolts : null,
        selectedBoltsAligned : null,
        selectedCloseOutLid : null,
        selectedRootZone : null,
        selectedRootZoneStructural : null,
        selectedCeroDegreePLate : null,
        selectedRootDamages : null
      },
      suctionSideData : {
        selectedRecievers : null,
        selectedIdentificationTags : null,
        selectedSurfaceDefects : null,
        selectedSurfaceStructuralDefects : null,
        selectedDustFree : null,
        selectedDefectiveArea : null,
        selectedGeneralDamages : null
      },
      pressureSideData : {
        selectedRecieversPressure : null,
        selectedIdentificationTagsPressure : null,
        selectedSurfaceDefects : null,
        selectedSurfaceStructuralDefects : null,
        selectedDustFree : null,
        selectedDefectiveArea : null,
        selectedGeneralDamages : null
      },
      trailingEdgeData : {
        selectedSurfaceDefectsT : null,
        selectedSurfaceStructuralDefectsT : null,
        selectedDustFreeT : null,
        selectedGeneralDamagesT : null
      },
      leadingEdgeData : {
        selectedSurfaceDefectsL : null,
        selectedSurfaceStructuralDefectsL : null,
        selectedDustFreeL : null,
        selectedGeneralDamagesL : null
      },
      tipData : {
        selectedDrainHole : null,
        selectedNoiseDefects : null,
        selectedTipBondingCracks : null
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
  mounted() {
  },
  props: {
   newInspectionData: { type: Object } // you need to give the parent components' data here.
  }
}
</script>

<style>
  .submitBtn {
    width: 120px;
  }

  @media screen and (max-width: 1180px) {
    .submitBtn {
      margin-top: 10px;
    }
  }
  .submitDiv {
    margin-top: 3%;
  }
  .img-btns {
    text-align: right;
  }
  .bold > label {
    font-weight: 600;
    color: #343a40;
  }
  header.card-header {
    background-color: #0062cc;
    color: white;
  }
  .card > .card-header {
    padding:0;
  }
  .inspRadioGrp > span {
    text-align: right;
  }
  .submitBtn {
    width: 120px;
  }

  /* @media screen and (max-width: 1180px) {
    .submitBtn {
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 1160px) {
    .inspRadioGrp > button {
      margin-left: 60%;
    }
  }

  @media screen and (max-width: 920px) {
    .inspRadioGrp > button {
      margin-left: 50%;
    }
  }

  @media screen and (max-width: 760px) {
    .inspRadioGrp > button {
      margin-left: 20%;
    }
  }

  @media screen and (max-width: 535px) {
    .inspRadioGrp > button {
      margin-left: 0%;
    }
  }
  @media screen and (max-width: 435px) {
    .submitBtn {
      margin-top: 10px;
    } */
  /* } */
  .thumbnailSize{
    height: 160px;
    width: 160px;
  }
  .submitDiv {
    margin-top: 3%;
  }
</style>
