<template>
  <ul
    class="meta-sources flex flex-col md:flex-row flex-wrap items-stretch gap-4 w-full"
  >
    <li v-for="source in sources" :key="source.name">
      <VButton
        as="VLink"
        variant="tertiary"
        size="disabled"
        :href="source.url"
        class="w-full md:w-auto text-sr font-bold p-4 md:py-2 md:px-3"
      >
        {{ source.name }}
        <sup class="top-0">
          <VIcon
            :icon-path="externalLinkIcon"
            :size="4"
            :rtl-flip="true"
            class="ms-2"
          />
        </sup>
      </VButton>
    </li>
  </ul>
</template>

<script>
import { computed } from '@nuxtjs/composition-api'

import getLegacySourceUrl, {
  legacySourceMap,
} from '~/utils/get-legacy-source-url'

import VButton from '~/components/VButton.vue'
import VIcon from '~/components/VIcon/VIcon.vue'

import externalLinkIcon from '~/assets/icons/external-link.svg'

export default {
  name: 'MetaSourceList',
  components: { VButton, VIcon },
  props: {
    type: { type: String },
    query: { type: Object },
  },
  setup(props) {
    const sources = computed(() =>
      Object.keys(legacySourceMap)
        .filter((sourceName) => legacySourceMap[sourceName][props.type])
        .map((source) => ({
          name: source,
          url: getLegacySourceUrl(props.type)(source, props.query),
        }))
    )

    return {
      externalLinkIcon,
      sources,
    }
  },
}
</script>
