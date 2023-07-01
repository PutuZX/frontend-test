<template>
  <svg
    :width="size"
    :height="size * 51 / 60"
    viewBox="0 0 60 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="2"
      width="52.6316"
      height="36.8421"
      rx="2"
      stroke="#03A84E"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M38 20H34L31 29L25 11L22 20H18"
      stroke="#03A84E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.7894 49.3684H38.8421"
      stroke="#03A84E"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M28.3158 38.8422V49.3685"
      stroke="#03A84E"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <rect
      x="7"
      y="7"
      width="52.6316"
      height="36.8421"
      rx="2"
      fill="#4EB548"
      fill-opacity="0.15"
    />
  </svg>
</template>

<script>

export default {
  props: {
    size: {
      type: Number,
      default: 60
    }
  }
}
</script>
