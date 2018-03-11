<template>
  <div>
    <h2>Windfarms</h2>
    <b-row class="windfarm-search">
      <b-col md="qw" class="my-1">
        <b-form-group class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Search" />
            <b-input-group-button>
              <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
            </b-input-group-button>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <gmap-map
        :center="center"
        :zoom="7"
        style="width: 500px; height: 450px; flex: 100% 1 1"
      >
        <gmap-marker
          :key="index"
          :position="center"
          :clickable="true"
          :draggable="true"
        ></gmap-marker>
      </gmap-map>
    </b-row>
  </div>
</template>

<script>
export default {
    data () {
      return {
        center: {lat: -23.6821604, lng: -46.8754915}
      }
    }
  }
</script>

<style>
.title {
  color: #312377;
}
.windfarm-search {
  justify-content: flex-end;
}
</style>
