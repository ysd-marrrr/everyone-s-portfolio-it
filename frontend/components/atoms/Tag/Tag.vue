<template>
  <li>
    <span class="tag"><slot /></span>
  </li>
</template>

<style lang="scss" scoped>
li {
  display: inline;
  line-height: 2rem;
  margin-right: 0.5rem;
  font-size: 0.8rem;

  background-color: rgb(230, 230, 230);
  padding: 5px 8px;
  border-radius: 5px;
}
</style>
