
<script>
export default {
  name: "Header",
}

</script>



<template>
  <div class="header">
    <div class="subheader">
      <div class="subheadercontent">
        <div>
          <img src="http://ec2-34-249-94-64.eu-west-1.compute.amazonaws.com/images/ico_CD_large.svg"
           alt="headerimage" /></div>
      </div>
       <div class="stepper">
        
        <div class="subheadercontentstep">
          <div class="number">1
          </div>
          <div>
            <p>Account</p>
          </div>
        </div>


        <div class="subheadercontentstep">
          <div class="number">2
          </div>
          <div>
            <p>Security</p>
          </div>
        </div>


        <div class="subheadercontentstep">
          <div class="number">3
          </div>
          <div>
            <p>Preference</p>
          </div>
        </div>

        <div class="subheadercontentstep">
          <div class="number">
            4
          </div>
          <div>
            <p>Details</p>
          </div>
        </div>

        <div class="subheadercontentstep">
          <div class="number">5
          </div>
          <div>
            <p>Identity</p>
          </div>
        </div>

    </div>

      <div class="subheadercontent">
        <i class="fa-solid fa-xmark"></i>
      </div>

    </div>
  </div>
</template>





<style>
.header {
  background-color: #ffffff;
  height: 100px;
}

.subheader {
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;


}

.subheadercontent {
  margin: 40px;
}

.subheadercontent img {
  height:32px;
  width: 160px;

}

.subheadercontent2 {
  width: max-content !important;
  height: 15px !important;
  display: flex;
  align-items: center !important;
}

.subheadercontentstep p {
  margin: 10px;
}

.crossicon {
  color: gray !important;
  font-size: 20px;
  font-weight: 100;
}

.subheadercontentstep {
  display: flex;
  justify-content: space-between !important;
  align-items: center !important;
  max-width: 400px;
  margin: 10px;
}

.subheadercontentstep p{
  margin-right: 10px;
}

.divider {
  color: gray !important;
}

.stepper{
  max-width: 200px;
  display: flex !important;
  /* margin-right: 800px */
  justify-content: center;
}

 .number{
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
   display: flex;
  justify-content: center !important;
  align-items: center !important;
  color:#ffffff !important;
  font: 5px;
  font-weight: bold;
 }

 .number p{
   display: flex;
 }
</style>