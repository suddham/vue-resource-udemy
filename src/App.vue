<template>
  <div id="app">
    <div class="columns">
      <div class="colmun">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Enter your details
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Username</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <p class="control">
                      <input
                        v-model="user.username"
                        class="input"
                        type="text"
                        placeholder="Enter an username"
                      />
                    </p>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Email</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <p class="control">
                      <input
                        v-model="user.email"
                        class="input"
                        type="email"
                        placeholder="Enter an email"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer class="card-footer">
            <button class="button is-primary" @click.prevent="submit">
              Submit
            </button>
            <button class="button is-success" @click.prevent="getData">
              Get Data
            </button>
            Delete
          </footer>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <ul class="list">
          <li class="list-item" v-for="(user, key) in fireStoreData" :key="key">
            Username: {{ user.username }}

            <br />

            Email: {{ user.email }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      user: {
        username: "",
        email: ""
      },
      fireStoreData: []
    };
  },
  methods: {
    submit() {
      this.$http
        .post("", this.user)
        .then(response => console.log(response))
        .catch(error => console.error(error));
    },
    getData() {
      this.$http
        .get('')
        .then(({ data }) => (this.fireStoreData = data))
        .catch(error => console.error(error));
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
