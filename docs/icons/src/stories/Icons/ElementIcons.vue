<script setup lang="ts">
import * as ElementPlus from '@teleskop-labs/element-icons-vue'
</script>

<template>
  <div class="t-box-icons">
    <h2>Element Plus</h2>
    <div class="t-icons-wrapper">
      <div v-for="item in ElementPlus" :key="item.name" class="t-icons-item">
        <div class="t-icons-item__icon">
          <div class="t-icons-item__icon-border">
            <component :is="item" class="t-icons-item__icon-inner" />
          </div>
        </div>
        <div class="t-icons-item__name">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<style>
@import url('./style.css');
</style>
