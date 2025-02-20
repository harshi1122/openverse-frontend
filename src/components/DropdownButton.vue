<template>
  <div class="relative block max-w-min text-sm md:text-base">
    <!-- rounded-X-none is required to fight Edge UA styles that apply a 2px border radius to all `button` elements -->
    <div class="flex">
      <slot
        :button-props="{
          class: `dropdown-button rounded-s-sm ${
            isSingleItem ? 'rounded-e-sm' : 'rounded-e-none'
          } dropdown-button-${size}`,
          type: 'button',
        }"
      />
      <button
        v-if="!isSingleItem"
        ref="dropdownButton"
        type="button"
        class="dropdown-button ms-1 rounded-e-sm rounded-s-none w-14"
        :class="[
          isOpen && 'dropdown-button-active',
          `dropdown-icon-button-${size}`,
        ]"
        aria-haspopup="menu"
        :aria-label="safeDropdownAriaLabel"
        :aria-expanded="isOpen"
        @click="toggleOpen"
        @keydown.space.prevent="toggleOpen"
      >
        <svg class="h-2 w-4 pointer-events-none">
          <use :href="`${icons.caretDown}#icon`" />
        </svg>
      </button>
    </div>

    <div
      ref="dropdownContainer"
      class="dropdown-container"
      :class="{ hidden: !isOpen }"
      role="menu"
      :aria-hidden="!isOpen"
      @focusout="onFocusout"
    >
      <slot
        name="items"
        :item-class="'dropdown-item'"
        :item-a11y-props="{ role: 'menuitem' }"
        :toggle-open="toggleOpen"
        :active-item-class="'dropdown-item-active'"
        :on-item-keydown="onItemKeydown"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

import { keycodes } from '~/constants/key-codes'

import caretDown from '~/assets/icons/caret-down.svg'

const DropdownButton = defineComponent({
  name: 'DropdownButton',
  props: {
    dropdownAriaLabel: {
      type: String,
      required: false,
    },
    isSingleItem: {
      type: Boolean,
      required: false,
    },
    size: {
      type: /** @type {import('@nuxtjs/composition-api').PropType<'medium' | 'small'>} */ (
        String
      ),
      default: 'medium',
      validator: (v) => ['medium', 'small'].includes(v),
    },
  },
  data() {
    return {
      isOpen: false,
      icons: {
        caretDown,
      },
      safeDropdownAriaLabel:
        this.dropdownAriaLabel || this.$t('dropdown-button.aria.arrow-label'),
    }
  },
  computed: {
    sizeClass() {
      return `dropdown-button-${this.size}`
    },
  },
  mounted() {
    document.addEventListener('click', this.onClickout)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.onClickout)
  },
  methods: {
    getItems() {
      return Array.from(
        this.$refs.dropdownContainer.querySelectorAll('[role="menuitem"]')
      )
    },
    onClickout(event) {
      if (
        event.target !== this.$refs.dropdownButton &&
        !this.$refs.dropdownContainer.contains(event.target)
      ) {
        this.isOpen = false
      }
    },
    onFocusout(event) {
      if (!this.$el.contains(event.relatedTarget)) {
        this.toggleOpen()
      }
    },
    toggleOpen() {
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        this.focusElement(this.getItems()[0])
      } else {
        this.focusElement(this.$refs.dropdownButton)
      }
    },
    focusElement(element) {
      window.setTimeout(() => element.focus(), 0)
    },
    onItemKeydown(event) {
      const items = this.getItems()
      const itemIndex = items.findIndex((item) => item === event.target)
      switch (event.key) {
        case keycodes.ArrowUp: {
          if (itemIndex === 0) {
            // don't do anything if pressing up on the first item
            return
          }
          this.focusElement(items[itemIndex - 1])
          break
        }
        case keycodes.ArrowDown: {
          if (itemIndex === items.length - 1) {
            // don't do anything if pressing down on the last item
            return
          }
          this.focusElement(items[itemIndex + 1])
          break
        }
        case keycodes.Escape: {
          this.toggleOpen()
          break
        }
        case keycodes.Home:
        case keycodes.PageUp: {
          this.focusElement(items[0])
          break
        }
        case keycodes.End:
        case keycodes.PageDown: {
          this.focusElement(items[items.length - 1])
          break
        }
      }
    },
  },
})

export default DropdownButton
</script>

<style scoped>
.dropdown-button {
  @apply flex items-center justify-center bg-pink text-white font-bold transition-shadow duration-100 ease-linear disabled:opacity-70 focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-pink hover:bg-dark-pink no-underline appearance-none;
}

.dropdown-icon-button-medium,
.dropdown-button-medium {
  @apply py-4 px-6 leading-6;
}

/*
Note the bespoke `py-[0.86rem]` class used below is necessary
to match the height of the small Audio play/pause button.

This is currently the only application of the DropdownButton
component (via the DownloadButton component) so as a stop-gap
solution to get the redesign out the door in a timely manner it
is necessary.

In the future it would be nice to coordinate these sizes across
all our buttons, regardless of content (icon vs text for example)
so that don't have to worry about things like this. We should feel
free to use sizes like 0.86rem if they're the right size, but it is
good to avoid the long term effects of scattering too many ad-hoc
sizes throughout the codebase.
*/
.dropdown-button-small {
  @apply px-4 py-[0.86rem] leading-3;
}

.dropdown-icon-button-small {
  @apply px-0 py-[0.86rem] leading-3 w-10;
}

.dropdown-button-active {
  @apply bg-dark-pink;
}

.dropdown-container {
  @apply absolute right-0 z-50 bg-white border border-light-gray rounded-sm px-2 pt-2 pb-1 mt-2 max-w-min whitespace-nowrap shadow;
}

.dropdown-item {
  @apply hover:bg-light-gray px-2 py-1 mb-1 rounded-sm focus:outline-none focus:ring focus:ring-offset-2 focus:ring-pink;
}

.dropdown-item-active {
  @apply bg-light-gray;
}
</style>
