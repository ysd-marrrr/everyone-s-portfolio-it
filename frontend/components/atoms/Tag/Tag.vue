<template>
  <li>
    <span class="tag"><slot /></span>
  </li>
</template>

<style lang="scss" scoped>
li {
  display: inline;
  padding: 5px 8px;
  margin-right: 0.5rem;
  font-size: 0.8rem;
  line-height: 2rem;
  background-color: rgb(230, 230, 230);
  border-radius: 5px;
}
</style>
