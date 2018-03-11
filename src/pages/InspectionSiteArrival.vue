<template>
  <div @submit="onSubmit">
    <b-row>
      <b-col>
        <div>
          <h6>
            Número de séria da Pá: 12312312
          </h6>
          <h6>
            Técnico: Raul Mendez
          </h6>
          <h6>
            Data: 10/12/2017
          </h6>
          <b-button class="submitBtn" variant="outline-primary">PDF</b-button>
        </div>
      </b-col>
      <b-col>
        <div>
          <h6>
            Parque eólico: Los Vientos
          </h6>
          <h6>
            Localização: Spain
          </h6>
          <h6>
            Tipo de Inspeção: Site Arrival
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
          <b-button class="submitBtn" variant="outline-primary">Aprovar</b-button>
          <b-button class="submitBtn" variant="danger">Rejeitar</b-button>
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
import Root from '../components/SiteArrivalComponents/Root';
import SuctionSide from '../components/SiteArrivalComponents/SuctionSide';
import PressureSide from '../components/SiteArrivalComponents/PressureSide';
import LeadingEdge from '../components/SiteArrivalComponents/LeadingEdge';
import TrailingEdge from '../components/SiteArrivalComponents/TrailingEdge';
import Tip from '../components/SiteArrivalComponents/Tip';

export default {
  beforeCreated() {
      console.log(this.$route.params.inspectionNumber);
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
        selectedIdentificationTags : 'first',
        selectedRootBand  : 'first',
        selectedBolts : 'first',
        selectedBoltsAligned : 'second',
        selectedCloseOutLid : 'first',
        selectedRootZone : 'first',
        selectedRootZoneStructural : 'first',
        selectedCeroDegreePLate : 'second',
        selectedRootDamages : 'first'
      },
      suctionSideData : {
        selectedRecievers : 'first',
        selectedIdentificationTags : 'first',
        selectedSurfaceDefects : 'second',
        selectedSurfaceStructuralDefects : 'first',
        selectedDustFree : 'second',
        selectedDefectiveArea : 'second',
        selectedGeneralDamages : 'second'
      },
      pressureSideData : {
        selectedRecieversPressure : 'first',
        selectedIdentificationTagsPressure : 'first',
        selectedSurfaceDefects : 'second',
        selectedSurfaceStructuralDefects : 'first',
        selectedDustFree : 'second',
        selectedDefectiveArea : 'second',
        selectedGeneralDamages : 'second'
      },
      trailingEdgeData : {
        selectedSurfaceDefectsT : 'first',
        selectedSurfaceStructuralDefectsT : 'first',
        selectedDustFreeT : 'second',
        selectedGeneralDamagesT : 'first'
      },
      leadingEdgeData : {
        selectedSurfaceDefectsL : 'first',
        selectedSurfaceStructuralDefectsL : 'first',
        selectedDustFreeL : 'second',
        selectedGeneralDamagesL : 'first'
      },
      tipData : {
        selectedDrainHole : 'second',
        selectedNoiseDefects : 'second',
        selectedTipBondingCracks : 'first'
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
  }
}
</script>

<style>
  @import '../styles/page-breaks.scss';

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
  .inspRadioGrp > button {
    margin-left: 70%;
  }
  .submitBtn {
    width: 120px;
  }

  @media screen and (max-width: 1180px) {
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
    }
  }
  .thumbnailSize{
    height: 160px;
    width: 160px;
  }
  .submitDiv {
    margin-top: 3%;
  }
</style>
