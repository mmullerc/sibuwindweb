<template>
  <div @submit="onSubmit">
    <b-row>
      <b-col>
        <div>
          <h6>
            Blade Serial Number: 12312312
          </h6>
          <h6>
            Technichian: Raul Mendez
          </h6>
          <h6>
            Date: 10/12/2017
          </h6>
        </div>
      </b-col>
      <b-col>
        <div>
          <h6>
            Windfarm: Los Vientos
          </h6>
          <h6>
            Location: Spain
          </h6>
          <h6>
            Inspection type: End of Warranty
          </h6>
        </div>
      </b-col>
      <b-col>
        <h6>
          Severity: 5
        </h6>
        <h6>
          Damages: 8
        </h6>
        <h6>
          Status: In progress
        </h6>
      </b-col>
      <b-col>
        <div class="submitDiv">
          <b-button class="submitBtn" variant="outline-primary">Aprove</b-button>
          <b-button class="submitBtn" variant="danger">Reject</b-button>
        </div>
      </b-col>
    </b-row>
    <hr>
    <Root :rootData="rootData"></Root>
    <br>
    <Shells :rootData="rootData"></Shells>
    <br>
    <InternalInspections :rootData="rootData"></InternalInspections>
    <br>
    <TrailingEdge :rootData="rootData"></TrailingEdge>
    <br>
    <LeadingEdge :rootData="rootData"></LeadingEdge>
    <br>
    <Tip :rootData="rootData"></Tip>
    <br>
    <ResistanceMeasurement :rootData="rootData"></ResistanceMeasurement>
    <br>
    <GeneralObservations :rootData="rootData"></GeneralObservations>
  </div>
</template>

<script>
import Root from '../components/EndOfWarrantyComponents/Root';
import Shells from '../components/EndOfWarrantyComponents/Shells';
import InternalInspections from '../components/EndOfWarrantyComponents/InternalInspections';
import TrailingEdge from '../components/EndOfWarrantyComponents/TrailingEdge';
import LeadingEdge from '../components/EndOfWarrantyComponents/LeadingEdge';
import Tip from '../components/EndOfWarrantyComponents/Tip';
import ResistanceMeasurement from '../components/EndOfWarrantyComponents/ResistanceMeasurement';
import GeneralObservations from '../components/EndOfWarrantyComponents/GeneralObservations';

export default {
  beforeCreated() {
      console.log(this.$route.params.inspectionNumber);
  },
  components: {
    Root,
    Shells,
    InternalInspections,
    TrailingEdge,
    LeadingEdge,
    Tip,
    ResistanceMeasurement,
    GeneralObservations
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
        selectedDegree  : 'first',
        selectedRootBand : 'first',
        selectedReinforcement : 'second',
        selectedRootCracks : 'first',
        selectedRootDamages : 'first'
      },
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
