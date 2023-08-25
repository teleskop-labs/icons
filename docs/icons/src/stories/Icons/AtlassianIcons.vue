<script setup lang="ts">
import * as Core from '@teleskop-labs/atlassian-icons-vue'
import * as Bitbucket from '@teleskop-labs/atlassian-icons-vue/bitbucket'
import * as Editor from '@teleskop-labs/atlassian-icons-vue/editor'
import * as Emoji from '@teleskop-labs/atlassian-icons-vue/emoji'
import * as Hipchat from '@teleskop-labs/atlassian-icons-vue/hipchat'
import * as Jira from '@teleskop-labs/atlassian-icons-vue/jira'
import * as MediaServices from '@teleskop-labs/atlassian-icons-vue/media-services'
</script>

<template>
  <div class="t-box-icons">
    <h2>Core</h2>
    <div class="t-icons-wrapper">
      <div v-for="item in Core" :key="item.name" class="t-icons-item">
        <div class="t-icons-item__icon">
          <div class="t-icons-item__icon-border">
            <component :is="item" class="t-icons-item__icon-inner" />
          </div>
        </div>
        <div class="t-icons-item__name">{{ item.name }}</div>
      </div>
    </div>

    <h2>Bitbucket</h2>
    <div class="t-icons-wrapper">
      <div v-for="item in Bitbucket" :key="item.name" class="t-icons-item">
        <div class="t-icons-item__icon">
          <div class="t-icons-item__icon-border">
            <component :is="item" class="t-icons-item__icon-inner" />
          </div>
        </div>
        <div class="t-icons-item__name">{{ item.name }}</div>
      </div>
    </div>

    <h2>Editor</h2>
    <div class="t-icons-wrapper">
      <div v-for="item in Editor" :key="item.name" class="t-icons-item">
        <div class="t-icons-item__icon">
          <div class="t-icons-item__icon-border">
            <component :is="item" class="t-icons-item__icon-inner" />
          </div>
        </div>
        <div class="t-icons-item__name">{{ item.name }}</div>
      </div>
    </div>

    <h2>Emoji</h2>
    <div class="t-icons-wrapper">
      <div v-for="item in Emoji" :key="item.name" class="t-icons-item">
        <div class="t-icons-item__icon">
          <div class="t-icons-item__icon-border">
            <component :is="item" class="t-icons-item__icon-inner" />
          </div>
        </div>
        <div class="t-icons-item__name">{{ item.name }}</div>
      </div>
    </div>

    <h2>Hipchat</h2>
    <div class="t-icons-wrapper">
      <div v-for="item in Hipchat" :key="item.name" class="t-icons-item">
        <div class="t-icons-item__icon">
          <div class="t-icons-item__icon-border">
            <component :is="item" class="t-icons-item__icon-inner" />
          </div>
        </div>
        <div class="t-icons-item__name">{{ item.name }}</div>
      </div>
    </div>

    <h2>Jira</h2>
    <div class="t-icons-wrapper">
      <div v-for="item in Jira" :key="item.name" class="t-icons-item">
        <div class="t-icons-item__icon">
          <div class="t-icons-item__icon-border">
            <component :is="item" class="t-icons-item__icon-inner" />
          </div>
        </div>
        <div class="t-icons-item__name">{{ item.name }}</div>
      </div>
    </div>

    <h2>MediaServices</h2>
    <div class="t-icons-wrapper">
      <div v-for="item in MediaServices" :key="item.name" class="t-icons-item">
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
