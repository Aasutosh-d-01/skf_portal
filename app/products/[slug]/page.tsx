import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailClient from "../../../components/ProductDetailClient";
import { catalog, getItem } from "../../../lib/catalog";

export const dynamicParams = false;

export function generateStaticParams(){return catalog.map(item=>({slug:item.id}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;const item=getItem(slug);if(!item)return {};
  const title=`${item.name} ${item.size} ${item.kind}`;const description=`Discover ${item.name} by Shah Kripa Fragrances. ${item.scent}. ${item.description} Shop in India for ${item.price} rupees.`;
  return {title,description,alternates:{canonical:`/products/${item.id}`},openGraph:{title,description,url:`/products/${item.id}`,type:"website",images:[{url:item.image,alt:`${item.name} by Shah Kripa Fragrances`}]},twitter:{card:"summary_large_image",title,description,images:[item.image]}};
}

export default async function ProductPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;const item=getItem(slug);if(!item)notFound();
  const data={"@context":"https://schema.org","@graph":[{"@type":"Product","name":item.name,"image":item.gallery.map(image=>`https://www.skfragrances.in${image}`),"description":item.description,"sku":item.id,"category":`${item.series} ${item.kind}`,"brand":{"@type":"Brand","name":"Shah Kripa Fragrances"},"offers":{"@type":"Offer","priceCurrency":"INR","price":item.price,"availability":item.stockStatus==="paused"?"https://schema.org/OutOfStock":"https://schema.org/InStock","url":`https://www.skfragrances.in/products/${item.id}`}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.skfragrances.in/"},{"@type":"ListItem","position":2,"name":item.series,"item":`https://www.skfragrances.in/#${item.seriesId}-collection`},{"@type":"ListItem","position":3,"name":item.name,"item":`https://www.skfragrances.in/products/${item.id}`}]}]};
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/><ProductDetailClient item={item}/></>;
}
