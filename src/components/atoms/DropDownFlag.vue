<script>
    export default{
      name:'DropDownFlag'
    }
  </script>
  
  
  <template>
    <div>
            <vue-country-code class="userdetailsselect" @onSelect="onSelect"></vue-country-code>
          </div>
  </template>
  
  
  <style>
  
  .userdetailsselect {
    width: 200px !important;
    margin-top: 10px;
    background-color: #ffffff !important;
  }
  </style>