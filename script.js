var tl = gsap.timeline()

tl.from("#nav1 h1,#nav1 img,#nav2",{
    y:-30,
    duration:0.5,
    delay:1,
    opacity:0,
    stagger:0.2
})
tl.from("#part1 h1,#part1 button",{
    y:-30,
    duration:0.5,
    delay:1,
    opacity:0,
    stagger:0.2
},"-=1")
gsap.from("#part2 #p1 img",{
    x:-100,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#part2 #p1 img",
        scroller:"body",
        start:"top 65%"
        
    }
})
gsap.from("#part2 #p2 h1,#part2 #p2 p,#part2 #p2 button",{
    x:20,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#part2 #p1 img",
        scroller:"body",
        start:"top 50%",
       
        
    }
})
tl.from("#part3 #p1 h4 h1",{
    y:-30,
    duration:0.5,
    delay:1,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#part3",
        scroller:"body",
        start:"top 65%"
        
    }
})