<template>
  <main class="home">
    <div class="workflow">
      <section class="content">
        <router-view></router-view>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="scss">
/* Workflow */
.workflow {
  padding-top: $gutter * 2;
  .content {
    background: #fff;
    border-radius: 4px;
    padding: $gutter * 2 $gutter;
    @media (min-width: $container-width) {
      padding: $gutter * 2;
    }
  }
    label {
    display: block;
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
  }
}

/* Platforms */
.platforms {
  max-width: 519px;
  display: inline-flex;
  flex-direction: column;
  @media (min-width: $container-width) {
    flex-direction: row;
  }
  img {
    width: 100%;
    max-width: 120px;
    max-height: 25px;
  }
  .btn-platform {
    flex: 1 1 0;
    background-color: #fff;
    margin: 5px;
    border: none;
    transition: all 0.5s;
    padding: 10px;
    border: 2px solid #f3f3f3;
    border-radius: 4px;
    outline: none;
    @media (min-width: $container-width / 2) {
      padding: 10px 20px;
    }
    &.facebook {
      img {
        max-height: 28px;
      }
    }
    &:hover {
      cursor: pointer;
    }
    &.selected {
      transform: scale(1.1);
      border: 2px solid $green;
    }
  }
}

/* Amount */
.amount {
  input[type="number"] {
    border: 2px solid #f3f3f3;
    outline: none;
    border-right: 0px;
    @media (max-width: $container-width - 1) {
      width: 60%;
    }
  }
  input[type="submit"] {
    appearance: none;
    @media (max-width: $container-width - 1) {
      width: 40%;
    }
    color: #fff;
    transition: all 0.3s ease-in-out;
  }
}

/* Result */
.result {
  .button {
    font-size: 16px;
  }
  p {
    font-weight: bold;
    &:first-child {
      margin-top: 0;
    }
  }
  .message {
    font-size: 22px;
    font-style: italic;
  }
  blockquote {
    font-size: 22px;
    font-style: italic;
    padding: 20px 30px;
    background: rgba($green, 0.2);
    border-radius: 20px;
  }
  .bubble {
    white-space: pre-wrap;
    text-align: left;
  }
}
</style>