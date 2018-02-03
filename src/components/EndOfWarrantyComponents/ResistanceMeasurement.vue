<template>
  <b-card id="resistanceMeasurementCard">
  <b-card-header
    header="7. Resistance Measurement"
    header-tag="header"
    v-b-toggle.collapseResistanceMeasurementCard
    slot="header">
  </b-card-header>
  <b-collapse id="collapseResistanceMeasurementCard" class="mt-2">
    <template>
     <b-form >
       <div class="cold-md-5 col-md-offset-7">
        <div v-for="parameter in parameters">
            <label >{{parameter}}</label>
            <input type="text" class="form-control" v-model="inputParams" />
            <b-form-group id="generalDamages"
                          class="bold"
                          label="6.4 General Damages"
                          label-for="generalDamages">
              <b-form-radio-group id="radiosGeneralDamages"  name="radioSubComponent">
                <b-form-radio value="first">Yes</b-form-radio>
                <b-form-radio value="second">No</b-form-radio>
              </b-form-radio-group>
            </b-form-group>
        </div>
       </div>
      </b-form>
    </template>
  </b-collapse>
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
      parameters : {
        "parameter" : "test",
        "parameter" : "test1",
        "parameter" : "test2",
        "parameter" : "test3",
      }
    }
  },
  props: {
   rootData: this.rootData // you need to give the parent components' data here.
  }
}
</script>
