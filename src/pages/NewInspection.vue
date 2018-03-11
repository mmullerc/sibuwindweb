<template>
  <b-container fluid>
    <!-- User Interface controls -->
    <b-row>
      <b-col>
        <h2>New Inspection</h2>
      </b-col>
    </b-row>
    <hr style="border-color:#007bff">
    <br>
    <b-row>
      <b-col>
        <b-row>
          <b-col class="mb-3">
            <b-form-group
                label="Windfarm: "
                class="bold">
                <b-form-select v-model="newInspectionData.selectedWindFarm" :options="newInspectionDataOptions.optionsWindFarm" class="mb-3" />
            </b-form-group>
          </b-col>
          <b-col class="mb-3">
            <b-form-group
                label="Turbine #: "
                class="bold">
                <b-form-select v-model="newInspectionData.selectedTurbineNumber" :options="newInspectionDataOptions.optionsTurbineNumber" class="mb-3" />
            </b-form-group>
          </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-row >
            <b-col class="mb-3">
                <b-form-group
                    label="Component Type: "
                    class="bold">
                    <b-form-select v-model="newInspectionData.selectedComponentType" :options="newInspectionDataOptions.optionsComponentType" class="mb-3" />
                </b-form-group>
              </b-col>
              <b-col class="mb-3">
                <b-form-group
                    label="Component Number: "
                    class="bold">
                    <b-form-select v-model="newInspectionData.selectedComponentNumber" :options="newInspectionDataOptions.optionsComponentNumber" class="mb-3" />
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="mb-3">
                <b-form-group
                    label="Checklist Type: "
                    class="bold">
                    <b-form-select v-model="newInspectionData.selectedCheckListType" :options="newInspectionDataOptions.optionsCheckListType" class="mb-3" />
                </b-form-group>
              </b-col>
              <br>
              <b-col>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <hr style="border-color:#007bff">
        <b-row class="submitBtnRow">
          <b-button class="submitBtn" @click="continueInspection()" variant="outline-primary">Continue</b-button>
        </b-row>
  </b-container>
</template>

<script>
import InspectionEndOfWarranty from './InspectionEndOfWarranty';
import InspectionSiteArrival from './InspectionSiteArrival';
import store from '../store';

export default {
  data () {
    return {
      newInspectionData : {
        selectedWindFarm : null,
        selectedTurbineNumber : null,
        selectedComponentType : null,
        selectedCheckListType : null,
        selectedComponentNumber : null
      },
      newInspectionDataOptions : {
        optionsWindFarm: [
         { value: null, text: 'Select' },
         { value: 'Mesquitte', text: 'Mesquitte' },
         { value: 'White oak', text: 'White oak' },
         { value: 'Orangeville', text: 'Orangeville' },
         { value: 'Los molinos', text: 'Los molinos' }
        ],
        optionsTurbineNumber: [
         { value: null, text: 'Select' },
         { value: '22', text: '22' },
         { value: '23', text: '23' },
         { value: '24', text: '24' },
         { value: '25', text: '25' }
        ],
        optionsComponentType: [
         { value: null, text: 'Select' },
         { value: 'Blade', text: 'Blade' },
         { value: 'Nacelle', text: 'Nacelle' },
         { value: 'Hub', text: 'Hub' },
         { value: 'Tower', text: 'Tower' },
         { value: 'Foundation', text: 'Foundation' },
         { value: 'Gear box', text: 'Gear box' },
        ],
        optionsCheckListType: [
         { value: null, text: 'Select' },
         { value: 'Site Arrival', text: 'Site Arrival' }
        ],
        optionsComponentNumber: [
         { value: null, text: 'Select' },
         { value: '2334', text: '2337' },
         { value: '2335', text: '2338' },
         { value: '2336', text: '2339' },
         { value: '2337', text: '2339' }
        ],
      }
    }
  },
  computed: {
  },
  methods: {
    continueInspection() {
      console.log('here');
      console.log(this.newInspectionData);
      store.dispatch('newInspection', this.newInspectionData);
      this.$router.push({ name: 'NewSiteArrival',  path: `/inspection/newsitearrival`});
    }
  }
}
</script>
<style>
  .bold > label {
    font-weight: 600;
    color: #343a40;
  }
  .center {
    justify-content: center;
  }
  .right {
    justify-content: flex-end;
  }
  table.b-table>thead>tr>th{
    color: #007bff;
  }
  .margin-bot-20 {
    margin-bottom: 20px;
  }
  .margin-top-40 {
    margin-top: 40px;
  }
  .padding-left-15 {
    padding-left: 15px;
  }
  .advancedBtn {
    text-align: right;
  }
  .custom-select {
    background-image: none;
  }
  .submitBtnRow {
    justify-content: center;
  }
</style>
