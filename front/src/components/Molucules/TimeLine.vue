<template>
  <v-row align="center" justify="center" class="grey lighten-4">
    <v-col cols="12" md="7">
      <v-timeline :dense="dense">
        <v-timeline-item
          v-for="(item, index) in lineItems"
          :key="index"
          :icon="item.icon || 'mdi-star'"
        >
          <MyCard width="100vw" height="200" title-class="blue lighten-2 pa-5">
            <template #cardTitle>
              <h2 class="white--text font-weight-light">
                {{ item.title }}
              </h2>
            </template>
            <template #cardText>
              <v-container>
                <v-row align="center" justify="center">
                  <v-col cols="12" md="9">
                    {{ item.text }}
                  </v-col>
                  <v-col cols="6" md="3">
                    <v-img :src="item.src" />
                  </v-col>
                </v-row>
              </v-container>
            </template>
          </MyCard>
        </v-timeline-item>
      </v-timeline>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {
    MyCard: () => import('@/components/Atom/TheCard'),
  },
  props: {
    lineItems: { type: Array, required: true },
    dense: Boolean,
  },
}
</script>
