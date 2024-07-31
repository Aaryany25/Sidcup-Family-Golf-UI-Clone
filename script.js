var csr = document.querySelector("#crsr")
var csrbl = document.querySelector("#crsrbl")
document.addEventListener("mousemove",function(dets){
  csr.style.top = dets.y+"px"
  csr.style.left = dets.x+"px"
    csrbl.style.top = dets.y-300+"px"
  csrbl.style.left = dets.x-300+"px"

})


var h4all = document.querySelectorAll("#nav h4")

h4all.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    csr.style.scale =3
    csr.style.backgroundColor="transparent"
    csr.style.border="1px solid #fff"
    elem.style.color="#95c11e"
  })
  elem.addEventListener("mouseleave",function(){
    csr.style.scale =1
    csr.style.backgroundColor="#95c11e"
    csr.style.border="1px solid #95c11e"
    elem.style.color="#fff"
  })
})

gsap.to("#nav",{
    backgroundColor:"black",
    duration:0.2,
    height:"120px",
    scrollTrigger:{
        trigger: "#nav",
        scroller:"body",
        start:"Top -10%",
        end:"Top -11%",
        scrub:1
    }
 })
 gsap.to("#main",{
  backgroundColor: "black",
  scrollTrigger:{
    trigger: "#main",
    scroller : "body",
    start: "top -30%",
    end:"top -80%",
    scrub:2
  }
 })
 gsap.from("#About-page img,#Aboutus",{
  opacity:0,
  y:50,
  duration:1,
  stagger:0.2,
  scrollTrigger:{
trigger:"#About-page",
scroller:"body",
// markers:true,
start:"top 60%",
end:"Top 58%",
scrub:2
  }
 })
 gsap.from("#colon1",{
  y:-50,
  x:-50,
  duration:1,
  opacity:0,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 60%",
    end:"Top 58%",
    scrub:2
  }
 })
 gsap.from("#colon2",{
  y:50,
  x:50,
  duration:0.5,
  opacity:0,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 60%",
    end:"Top 58%",
    scrub:2
  }
 })