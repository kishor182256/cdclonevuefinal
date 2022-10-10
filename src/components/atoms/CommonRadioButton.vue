<template>
    <input
        type="radio"
        v-bind="{  onChange: updateValue }"
        :checked="modelValue === value"
        :id="uuid"
      />
    
    
  </template>
  
  <script>
  
  export default {
    name:"CommonInputRadioButton",
    props: {
      label: {
        type: String,
        default: ''
      },
      modelValue: {
        type: [String, Number]
      },
      value: {
        type: [String, Number]
      },
     
    },
   
  }
  </script>
  