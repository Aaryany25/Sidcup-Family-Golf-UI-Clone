var csr = document.querySelector("#crsr")
var csrbl = document.querySelector("#crsrbl")
document.addEventListener("mousemove",function(dets){
  csr.style.top = dets.y+"px"
  csr.style.left = dets.x+"px"
  console.log(dets.x)
  console.log(dets.y)
})
document.addEventListener("mousemove",function(dets){
  csrbl.style.top = dets.y-100+"px"
  csrbl.style.left = dets.x-100+"px"
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