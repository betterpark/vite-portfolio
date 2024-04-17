import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function intro(){
    gsap.registerPlugin(ScrollTrigger)
    const frameConst=9
    const offsetValue=550

    gsap.to('.img',{
        backgroundPosition:(-offsetValue*frameConst)+'px',
        ease:'steps('+frameConst+')',
        scrollTrigger:{
            trigger:'#intro',
            start:'top top',
            end:'+='+(frameConst*offsetValue),
            pin:true,
            scrub:true

        }

    })
   
}