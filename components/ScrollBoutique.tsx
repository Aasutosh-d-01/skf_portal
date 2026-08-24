"use client";

import { useEffect, useRef } from "react";
import { individualAttars } from "../lib/catalog";

const scenes = [
  {id:"aura",name:"Aura Series",title:"Modern oud, lit from within.",copy:"Amber warmth, purple mystery and a royal woody trail move through an emerald-gold world.",image:"/media/4k/aura-scroll-4k.webp",index:"01"},
  {id:"ethnic",name:"Ethnic Series",title:"India, remembered in fragrance.",copy:"Sandalwood, mogra and imperial rose meet Mughal light, warm stone and enduring ritual.",image:"/media/4k/ethnic-scroll-4k.webp",index:"02"},
  {id:"sovereign",name:"Sovereign Series",title:"A signature that enters first.",copy:"Three expressive attars composed for ceremony, confidence and a presence that remains.",image:"/media/4k/sovereign-scroll-4k.webp",index:"03"},
];

function progressFor(element:HTMLElement){
  const rect=element.getBoundingClientRect();
  const travel=Math.max(1,element.offsetHeight-window.innerHeight);
  return Math.max(0,Math.min(1,-rect.top/travel));
}

export function CinematicScroll(){
  const root=useRef<HTMLElement>(null);
  useEffect(()=>{
    const el=root.current;if(!el)return;
    let frame=0;
    const render=()=>{
      frame=0;
      const p=progressFor(el);
      el.style.setProperty("--scroll-progress",String(p));
      const scaled=p*(scenes.length-1);
      el.querySelectorAll<HTMLElement>("[data-scene]").forEach((scene,index)=>{
        const distance=Math.abs(scaled-index);
        const opacity=Math.max(0,1-distance*1.65);
        scene.style.opacity=String(opacity);
        scene.style.transform=`scale(${1.02+Math.min(1,distance)*.035+p*.025}) translate3d(0,${(index-scaled)*2.5}%,0)`;
      });
      el.querySelectorAll<HTMLElement>("[data-scene-copy]").forEach((copy,index)=>{
        const distance=Math.abs(scaled-index);
        copy.style.opacity=String(Math.max(0,1-distance*2.4));
        copy.style.transform=`translate3d(0,${(index-scaled)*42}px,0)`;
      });
      const active=Math.min(scenes.length-1,Math.max(0,Math.round(scaled)));
      el.dataset.active=String(active);
    };
    const queue=()=>{if(!frame)frame=requestAnimationFrame(render)};
    render();window.addEventListener("scroll",queue,{passive:true});window.addEventListener("resize",queue);
    return()=>{window.removeEventListener("scroll",queue);window.removeEventListener("resize",queue);if(frame)cancelAnimationFrame(frame)};
  },[]);
  return <section className="cinematic-scroll" ref={root} aria-label="Explore the three fragrance worlds">
    <div className="cinematic-sticky">
      <div className="cinematic-scenes">{scenes.map((scene,index)=><img data-scene key={scene.id} src={scene.image} alt={`${scene.name} luxury attar collection`} className={index===0?"is-first":""}/>)}</div>
      <div className="cinematic-shade"/>
      <div className="cinematic-copy-stack">{scenes.map((scene)=><div data-scene-copy key={scene.id}><p className="kicker">{scene.index} · {scene.name}</p><h2>{scene.title}</h2><p>{scene.copy}</p><a href={`#${scene.id}-collection`}>Discover {scene.name} ↓</a></div>)}</div>
      <div className="cinematic-rail">{scenes.map((scene,index)=><span key={scene.id} data-index={index}>{scene.index}</span>)}</div>
      <div className="scroll-meter"><i/></div>
    </div>
  </section>;
}

export function ThrowScroll(){
  const root=useRef<HTMLElement>(null);
  useEffect(()=>{
    const el=root.current;if(!el)return;
    let frame=0;
    const render=()=>{
      frame=0;const p=progressFor(el);el.style.setProperty("--throw-progress",String(p));
      const width=Math.min(window.innerWidth*.105,142);
      el.querySelectorAll<HTMLElement>("[data-throw-card]").forEach((card,index)=>{
        const start=index*.055;
        const local=Math.max(0,Math.min(1,(p-start)/.38));
        const eased=1-Math.pow(1-local,3);
        const finalX=(index-4)*width;
        const originX=(index%2?1:-1)*(window.innerWidth*.54+index*22);
        const x=originX+(finalX-originX)*eased;
        const y=(1-eased)*(window.innerHeight*.82+index*28)+Math.sin(local*Math.PI)*-70;
        const rotation=(index%2?1:-1)*(38+index*3)*(1-eased)+(index-4)*3.4*eased;
        const scale=.42+.58*eased;
        card.style.opacity=String(Math.min(1,local*3));
        card.style.transform=`translate3d(${x}px,${y}px,0) rotate(${rotation}deg) scale(${scale})`;
      });
    };
    const queue=()=>{if(!frame)frame=requestAnimationFrame(render)};
    render();window.addEventListener("scroll",queue,{passive:true});window.addEventListener("resize",queue);
    return()=>{window.removeEventListener("scroll",queue);window.removeEventListener("resize",queue);if(frame)cancelAnimationFrame(frame)};
  },[]);
  return <section className="throw-scroll" ref={root} aria-label="Nine attars entering the fragrance house">
    <div className="throw-scroll-sticky">
      <div className="throw-scroll-title"><p className="kicker">The complete attar wardrobe</p><h2>Nine signatures.<br/><em>Thrown into one house.</em></h2><p>Scroll slowly. Every bottle follows your movement.</p></div>
      <div className="throw-scroll-deck">{individualAttars.map((item)=><a data-throw-card href={`/products/${item.id}`} key={item.id} className={`throw-sku ${item.seriesId}`}><img src={`/media/4k/${item.id}-4k.webp`} alt={`${item.name} 6 ml attar`}/><span>{item.name}</span><small>{item.series}</small></a>)}</div>
    </div>
  </section>;
}

const anatomy = [
  {id:"aura",series:"Aura Series",name:"Purple Oud",image:"/media/4k/aura-exploded-4k.webp",accords:["Saffron & musk","Agarwood character","Modern woody trail"]},
  {id:"ethnic",series:"Ethnic Series",name:"Regal Sandal",image:"/media/4k/ethnic-exploded-4k.webp",accords:["Sandalwood warmth","Musk & woods","Heritage character"]},
  {id:"sovereign",series:"Sovereign Series",name:"Royal Nazaqat",image:"/media/4k/royal-nazaqat-exploded-4k.webp",accords:["Graceful florals","Warm woods","Measured luxury"]},
];

function AnatomyStage({item,index}:{item:(typeof anatomy)[number];index:number}){
  const root=useRef<HTMLElement>(null);
  useEffect(()=>{
    const el=root.current;if(!el)return;let frame=0;
    const render=()=>{frame=0;const p=progressFor(el);el.style.setProperty("--assemble",String(p))};
    const queue=()=>{if(!frame)frame=requestAnimationFrame(render)};
    render();window.addEventListener("scroll",queue,{passive:true});window.addEventListener("resize",queue);
    return()=>{window.removeEventListener("scroll",queue);window.removeEventListener("resize",queue);if(frame)cancelAnimationFrame(frame)};
  },[]);
  return <article className={`anatomy-stage anatomy-${item.id}`} ref={root}>
    <div className="anatomy-sticky">
      <div className="anatomy-copy"><span>0{index+1} / 03</span><p className="kicker">{item.series}</p><h3>{item.name}</h3><ul>{item.accords.map(a=><li key={a}>{a}</li>)}</ul><small>Accords interpreted from the product packaging. The complete formula remains proprietary.</small></div>
      <div className="assembly" aria-label={`Scroll-controlled exploded view of ${item.name}`}>
        {(["cap","collar","roller","vessel","base"] as const).map(part=><img className={`assembly-piece ${part}`} src={item.image} alt="" key={part}/>) }
        <span className="assembly-label label-cap">Sculpted cap</span><span className="assembly-label label-roller">Roll-on precision</span><span className="assembly-label label-essence">Attar concentrate</span><span className="assembly-label label-glass">6 ml glass vessel</span>
      </div>
    </div>
  </article>;
}

export function BottleAnatomy(){return <section className="anatomy"><div className="anatomy-intro"><p className="kicker">Anatomy of an attar</p><h2>Every component.<br/>Revealed by your scroll.</h2><p>Three 4K bottle studies assemble as you move: sculpted cap, ornate collar, precision roller, concentrated attar and glass vessel.</p></div>{anatomy.map((item,index)=><AnatomyStage item={item} index={index} key={item.id}/>)}</section>}
