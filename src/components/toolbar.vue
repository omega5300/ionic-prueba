<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ $route.name }}</ion-title>
      <ion-buttons slot="end">
        <ion-button color="secondary" @click="openPopover">
          <ion-icon slot="icon-only" :icon="ellipsisVertical"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonButtons,
  popoverController,
} from "@ionic/vue";

import { ellipsisVertical } from "ionicons/icons";

import Popover from "./popover.vue";

export default {
  name: "toolbar",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonButtons,
  },
  setup() {
    return { ellipsisVertical };
  },
  methods: {
    async openPopover(e: Event) {
      const popover = await popoverController.create({
        component: Popover,
        cssClass: 'content',
        event: e,
        translucent: true,
        mode: "ios"
      });
      return popover.present();
    },
  },

};
</script>

<style>
.content {
  --width: auto;
  --box-shadow: 2px 2px 4px #00f;
}
</style>
