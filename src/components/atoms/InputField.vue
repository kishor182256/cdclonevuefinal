<template>
    <input
      :type="Value"
      :placeholder="placeholder" 
    >
    
  </template>
  
  <script>
  
  
  export default {
    props: {
        placeholder: {
        type: String,
        default: '',
        
      },
      Value: {
        type: [String, Number],
        default: ''
      },
      password:{
        type: String
      }


    },
  
  }
  </script>
  