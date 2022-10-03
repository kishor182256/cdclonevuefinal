
<script>
export default {
    name: "Footer",
}

</script>
    
    
    
<template>
    <div class="footer">
        <div class="footersubdiv">
            <div class="footercontent">
                <p>Terms & Conditions</p>
            </div>
            <div class="footercontent">
                <p>Privacy policy</p>
            </div>
            <div class="footercontent">
                <p>Cookies</p>
            </div>
            <div class="footercontent">
                <p>Regulatory information</p>
            </div>
        </div>
    </div>
</template>
    
    
    
    
    
<style>
.footer {
    background-color: #ffffff;
    height: 110px;
    display: flex;
    margin-top: 50px;
}

.footersubdiv {
    display: flex;
    align-items: center;
    margin-right: 40px !important;
}

.footercontent{
    margin: 10px;
    font-size: 13px;
    color: #6f6f6f;
    letter-spacing: 0;
}

.footercontent p{
    font-family: Circular-Book,Arial,Helvetica,sans-serif;
    font-size: 100;

}

.footercontent p:hover{
    text-decoration: underline;
    cursor: pointer;
}
</style>