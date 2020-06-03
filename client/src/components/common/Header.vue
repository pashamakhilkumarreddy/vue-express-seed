<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="https://bulma.io/images/bulma-logo.png" importance="high" decoding="async"
            alt="Logo" />
        </a>

        <span role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
          data-target="main-navbar">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </span>
      </div>
      <div id="main-navbar" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      showMobileNavbar: false,
    };
  },
};

</script>
<style scoped="css">
  .header {
    border-bottom: 1px solid #ddd;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0.6, 0);
  }

</style>
