<script>
    export default {
       name:"Button",
       props: {
         buttonLabel: {
            type: String,
            default: "Continue",
         }
       },
    }
</script>


<template>

<button type="button" name="save"  class="accountbutton">
            {{buttonLabel}}
        </button>
</template>


<style>
.accountbutton {
    height: 50px;
    width: 480px;
    border-radius: 25px;
    border: none;
    color: #ffffff;
    background: linear-gradient(95deg, #f03ea6 4.1%, #ff6b00 95.1%, #f03ea6 200%);
    margin-top: 80px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: bolder;
}
</style>