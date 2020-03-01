<template>
  <div class="container">
    <h3>Create new Vehicle</h3>
    <div class="sixty">
      <form @submit="createVehicle">
        <div class="form-group">
          <input type="text"
            class="form-control"
            id="vehicleName"
            v-model="object.name"
            placeholder="Name..."
          >
        </div>
        <div class="form-group">
          <input type="text"
            class="form-control"
            id="vehicleBrand"
            v-model="object.brand"
            placeholder="Brand..."
          >
        </div>
        <div class="form-group">
          <input type="text"
            class="form-control"
            id="vehicleYear"
            v-model="object.year"
            placeholder="Year..."
          >
        </div>
        <div class="form-group">
          <input type="text"
            class="form-control"
            id="vehicleDescription"
            v-model="object.description"
            placeholder="Description..."
          >
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary">Create</button>
        </div>
      </form>
    </div>
    <hr>
    <h2 class="mt-4 mb-4">All Vehicles</h2>
    <p class="error" v-if="error">{{ error }}</p>
    <div class="vehicles-container">
      <div
        class="vehicle mt-4"
        v-for="(vehicle, index) in vehicles"
        v-bind:item="vehicle"
        v-bind:key="vehicle._id"
      >
        <h4 class="d-inline mr-2">- {{ vehicle.brand }} {{ vehicle.vehicle }} / {{ vehicle.year }}</h4>
        <button 
          class="btn btn-sm btn-danger d-inline"
          @click="deleteVehicle(vehicle._id, index, $event)"
        >
          Delete
        </button>
        <p>{{ vehicle.description }}</p>
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
        name: '',
        brand: '',
        year: '',
        description: ''
      }
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
        vehicle: this.object.name,
        brand: this.object.brand,
        year: this.object.year,
        description: this.object.description
      }).then(
        response => this.vehicles.push(response.data)
      ).catch(
        error => console.log(error)
      );
    },

    deleteVehicle(id, index, e) {
      e.preventDefault();
      axios.delete(`${url}/${id}`).then(
        this.vehicles.splice(index, 1)
      ).catch(
        error => console.log(error)
      );
    }
  },

  created() {
    this.vehicles = this.getVehicles();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sixty {
    width: 60%;
    margin: 0 auto;
  }
</style>
