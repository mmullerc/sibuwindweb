<template>
  <b-container fluid>
    <!-- User Interface controls -->
    <b-row>
      <b-col>
        <h2>Users</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="advancedBtn insp-btns">
        <b-button class="right" variant="outline-primary">Add User</b-button>
      </b-col>
    </b-row>
    <br>
    <b-row class="padding-left-15 margin-bot-20">
      <b-col md="qw" class="my-1">
        <b-form-group class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Type to Search" />
            <b-input-group-button>
              <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
            </b-input-group-button>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>

    <!-- Main table element -->
    <b-table show-empty
             bordered
             stacked="md"
             :items="items"
             :fields="fields"
             :current-page="currentPage"
             :per-page="perPage"
             :filter="filter"
             :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             @filtered="onFiltered"
    >

      <template slot="name" slot-scope="row"></template>
      <template slot="isActive" slot-scope="row"></template>
      <template slot="actions" slot-scope="row">
        <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
        <b-button size="sm"  class="mr-1">
          View
        </b-button>
      </template>
    </b-table>

    <!-- Info modal -->
    <b-modal id="modalInfo" @hide="resetModal" :title="modalInfo.title" ok-only>
      <pre>{{ modalInfo.content }}</pre>
    </b-modal>
    <template md="6" class="my-1">
      <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="center margin-top-40" />
    </template>
  </b-container>
</template>

<script>
import InspectionEndOfWarranty from './InspectionEndOfWarranty';
import InspectionSiteArrival from './InspectionSiteArrival';

const items = [
  { userId: '21',  nombre : 'Juan', lastName: 'Aguilar', 'email': 'jaguilar@gmail.com', profileType: 'Technician'},
  { userId: '22',  nombre : 'Andres', lastName: 'Carranza', 'email': 'acarranza@gmail.com', profileType: 'Technician',},
  { userId: '26',  nombre : 'John', lastName: 'Smith', 'email': 'jsmith@gmail.com', profileType: 'Technician'},
  { userId: '29',  nombre : 'Armando', lastName: 'Lorena', 'email': 'alorena@gmail.com', profileType: 'Engineer',}
]

export default {
  data () {
    return {
      items: items,
      fields: [
        { key: 'userId', label: 'User Id', sortable: true },
        { key: 'nombre', label: 'Name'},
        { key: 'lastName', label: 'Last name'},
        { key: 'email', label: 'Email'},
        { key: 'profileType', label: 'Profile type' },
        { key: 'actions', label: 'Actions' }
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: items.length,
      pageOptions: [ 5, 10, 15 ],
      sortBy: null,
      sortDesc: false,
      filter: null,
      modalInfo: { title: '', content: '' }
    }
  },
  computed: {
    sortOptions () {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => { return { text: f.label, value: f.key } })
    }
  },
  methods: {
    info (item, index, button) {
      var inspection = item.Type.toLowerCase().trim().replace(/\s/g,'');

      console.log(item.inspectionNumber);

      if (inspection == "endofwarranty") {
        //  this.$router.push({ name: 'InspectionEndOfWarranty', path: `/inspection/endofwarranty${item.Id}` });
          this.$router.push({ name: 'InspectionEndOfWarranty',  path: `/inspection/endofwarranty${item.inspectionNumber}`})
      } else if (inspection == "sitearrival") {
          this.$router.push({ name: 'InspectionSiteArrival',  path: `/inspection/sitearrival${item.inspectionNumber}`})
      }
    },
    resetModal () {
      this.modalInfo.title = ''
      this.modalInfo.content = ''
    },
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    goToAdvanced() {
      this.$router.push({ name: 'AdvancedSearch',  path: `/advancedsearch`});
    },
    goToNewInspection() {
      this.$router.push({ name: 'NewInspection',  path: `/newinspection`});
    }
  }
}
</script>
<style>
  @media screen and (max-width: 490px) {
    .insp-btns {
      margin-top: 10px;
      text-align: left;
    }
    .advancedBtn {
      text-align: left;
    }
  }
  .center {
    justify-content: center;
  }
  .right {
    justify-content: flex-end;
    width: 157px;
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
</style>
