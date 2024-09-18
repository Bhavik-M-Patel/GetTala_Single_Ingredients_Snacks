
function init(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
init();



var menu = document.querySelector("#nav-prt2 i")
var full = document.querySelector("#full-scr-nav")

var flag = 0;
menu.addEventListener("click",function(){

    if(flag == 0){
        full.style.top = "0%";
        document.querySelector("#nav h2").style.color = "#222";
        document.querySelector("#nav h3").style.color = "#222";
        document.querySelector("#nav i").style.color = "#222";
        flag = 1;
    }else{
        full.style.top = "-100%";
        document.querySelector("#nav h2").style.color = "#dadada";
        document.querySelector("#nav h3").style.color = "#dadada";
        document.querySelector("#nav i").style.color = "#dadada";
        flag = 0;
    }
})

var tl = gsap.timeline();

tl.from("#page1 p",{
    y: 60,
    duration: 0.6,
    opacity: 0
})
tl.from("#page1 h2",{
    y: 50,
    duration: 0.5,
    opacity: 0,
    delay: "-0.2"
})
tl.from("#page1 h3",{
    y: 50,
    duration: 0.5,
    opacity: 0,
    delay: "-0.1"
})

tl.from("#page3 #divider",{
    y: 50,
    // width:"88vw",
    duration: 0.4,
    opacity: 0,
    delay: "-0.2"
})
gsap.to("#page2 img",{
    scale: .98,
    scrollTrigger:{
        trigger: "#page2 img",
        scroller: "#main",
        // markers: true,
        start: "top 80%",
        end: "top 0%",
        scrub: 3
    }
})

gsap.to("#page2 h1",{
    rotateX: 0,
    opacity: 1,
    scrollTrigger:{
        trigger: "#h11",
        scroller: "#main",
        // markers: true,
        start:"top 85%",
        end:"top 75%",
        scrub: 3
    }
})

gsap.to("#page5-content img",{
    rotate: 360,
    repeat: -1,
    duration: 2,
    ease: "linear"
})

var slide1h1 = document.querySelectorAll("#page6 .slide1 h1")
slide1h1.forEach(function(elem){
    gsap.to(elem,{
        transform:'translate(-100%)',
        duration:4,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"#main",
            scrub:4
        }
    })
})
var slide2h1 = document.querySelectorAll("#page6 .slide2 h1")
slide2h1.forEach(function(elem){
    gsap.to(elem,{
        transform:'translate(0%)',
        duration:4,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"#main",
            scrub:4
        }
    })
})  

document.querySelector("#element1").addEventListener("mousemove",function(dets){
    document.querySelector("#element1 img").style.opacity = 1;
    document.querySelector("#element1 img").style.left = `${dets.x}px`;
    document.querySelector("#element1 img").style.top = `${dets.y - 350}px`;
})
document.querySelector("#element1").addEventListener("mouseleave",function(){
    document.querySelector("#element1 img").style.opacity = 0;
})

document.querySelector("#element2").addEventListener("mousemove",function(dets){
    document.querySelector("#element2 img").style.opacity = 1; 
    document.querySelector("#element2 img").style.left = `${dets.x}px`;
    document.querySelector("#element2 img").style.top = `${dets.y - 350}px`;
})
document.querySelector("#element2").addEventListener("mouseleave",function(){
    document.querySelector("#element2 img").style.opacity = 0;
})

document.querySelector(".page3-list1").addEventListener("mousemove",function(dets){
    document.querySelector(".page3-list1>.img1").style.opacity = 1;
    document.querySelector("#list-text1 h1").style.color = "rgb(35,32,37)";
    document.querySelector(".page3-list1 #float-right").style.opacity = 1; 
    document.querySelector(".page3-list1>.img1").style.top = `${dets.y - 400}px`;
    document.querySelector(".page3-list1>.img1").style.left = `${dets.x - 50}px`;
})
document.querySelector(".page3-list1").addEventListener("mouseleave",function(){
    document.querySelector(".page3-list1>.img1").style.opacity = 0;
    document.querySelector("#list-text1 h1").style.color = "#adadad";
    document.querySelector(".page3-list1 #float-right").style.opacity = 0; 
})
document.querySelector(".page3-list2").addEventListener("mousemove",function(dets){
    document.querySelector(".page3-list2>.img2").style.opacity = 1; 
    document.querySelector("#list-text2 h1").style.color = "rgb(35,32,37)";
    document.querySelector(".page3-list2 #float-right").style.opacity = 1; 
    document.querySelector(".page3-list2>.img2").style.top = `${dets.y - 450}px`;
    document.querySelector(".page3-list2>.img2").style.left = `${dets.x - 50}px`;
})
document.querySelector(".page3-list2").addEventListener("mouseleave",function(){
    document.querySelector(".page3-list2>.img2").style.opacity = 0;
    document.querySelector("#list-text2 h1").style.color = "#adadad";
    document.querySelector(".page3-list2 #float-right").style.opacity = 0; 
})
document.querySelector(".page3-list3").addEventListener("mousemove",function(dets){
    document.querySelector(".page3-list3>.img3").style.opacity = 1; 
    document.querySelector("#list-text3 h1").style.color = "rgb(35,32,37)";
    document.querySelector(".page3-list3 #float-right").style.opacity = 1; 
    document.querySelector(".page3-list3>.img3").style.top = `${dets.y - 550}px`;
    document.querySelector(".page3-list3>.img3").style.left = `${dets.x - 50}px`;
})
document.querySelector(".page3-list3").addEventListener("mouseleave",function(){
    document.querySelector(".page3-list3>.img3").style.opacity = 0;
    document.querySelector("#list-text3 h1").style.color = "#adadad";
    document.querySelector(".page3-list3 #float-right").style.opacity = 0; 
})
