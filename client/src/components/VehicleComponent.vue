<template>
  <div class="container">
    <h3>Create new Vehicle</h3>
      <div class="col-sm-10 offset-sm-1">
      <form @submit="createVehicle">
        <div class="form-row">
          <div class="col">
            <input type="text"
              class="form-control"
              id="vehicleName"
              v-model="object.vehicle"
              placeholder="Name..."
            >
          </div>
          <div class="col">
            <input type="text"
              class="form-control"
              id="vehicleBrand"
              v-model="object.brand"
              placeholder="Brand..."
            >
          </div>
          <div class="col">
            <input type="text"
              class="form-control"
              id="vehicleYear"
              v-model="object.year"
              placeholder="Year..."
            >
          </div>
        </div>
        <div class="form-group mt-2">
          <textarea
            class="form-control"
            id="vehicleDescription"
            rows="3"
            v-model="object.description"
            placeholder="Description..."
          ></textarea>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary">Create</button>
        </div>
      </form>
    </div>
    <hr>
    <h3 class="mt-4 mb-3">All Vehicles</h3>
    <p class="error" v-if="error">{{ error }}</p>
    <form @submit="searchVehicle" class="col-sm-6 offset-sm-3 mb-3">
      <div class="form-inline">
        <input
          type="text"
          class="form-control searchInput"
          v-model="search"
          placeholder="Search..."
        >
        <button type="submit" class="btn btn-info">Search</button>
      </div>
    </form>
    <p class="mb-0" v-if="searchString">{{ searchString }}</p>
    <button @click="resetVehicles" v-if="searchString" class="btn btn-sm btn-info mb-3">
      Clear search
    </button>
    <div class="col-sm-8 offset-sm-2">
      <div
        class="vehicle alert alert-info"
        v-for="(vehicle, index) in vehicles"
        v-bind:item="vehicle"
        v-bind:key="vehicle._id"
      >
        <h6 class="light">{{ vehicle.year }}</h6>
        <h4 class="mr-2">{{ vehicle.brand }} - {{ vehicle.vehicle }}</h4>
        <button 
          class="btn btn-sm btn-danger btn-delete"
          @click="deleteVehicle(vehicle._id, index, $event)"
        >
          Delete
        </button>
        <p class="mb-0">{{ vehicle.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
const url = 'http://127.0.0.1:3000/vehicles';

export default {
  name: 'VehicleComponent',
  
  data() {
    return {
      vehicles: [],
      error: '',
      object: {
        vehicle: '',
        brand: '',
        year: '',
        description: ''
      },
      search: '',
      searchString: '',
    }
  },

  methods: {
    getVehicles() {
      axios.get(url).then(
        response => (this.vehicles = response.data)
      ).catch(
        error => { error.message }
      )
    },

    createVehicle(e) {
      e.preventDefault();
      axios.post(url, {
        vehicle: this.object.vehicle,
        brand: this.object.brand,
        year: this.object.year,
        description: this.object.description
      }).then(
        this.vehicles.unshift(this.object)
      ).catch(
        error => console.log(error)
      );
      this.object = {};
    },

    deleteVehicle(id, index, e) {
      e.preventDefault();
      axios.delete(`${url}/${id}`).then(
        this.vehicles.splice(index, 1)
      ).catch(
        error => console.log(error)
      );
    },

    searchVehicle(e) {
      e.preventDefault();
      if(this.search !== '') {
        axios.get(`${url}/search`, {
          params: {
            q: this.search
          }
        }).then(
          response => {
            if(response.data.length < 1) {
              this.vehicles = [];
              this.searchString = 'No vehicle found.';
            } else { 
              this.vehicles = response.data;
              this.searchString = `${this.vehicles.length} results found.`;
            }
          }
        ).catch(
          error => console.log(error)
        ); 
      }
    },

    resetVehicles(e) {
      e.preventDefault();
      this.searchString = '';
      this.search = '';
      this.vehicles = this.getVehicles();
    }
  },

  created() {
    this.vehicles = this.getVehicles();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .light {
    font-weight: 300;
    color: #999;
  }

  .btn-delete {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .searchInput {
    flex: 1;
  }
</style>
