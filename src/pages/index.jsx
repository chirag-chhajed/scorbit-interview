import ProductCard from "@/components/ProductCard"

export default function Home({data}) {
  console.log(data)
  return (
    <main className="flex flex-col items-center justify-center max-w-screen-lg min-h-screen gap-8 p-8 mx-auto bg-gray-300">
      {data.map(data => <ProductCard key={data.id} title={data.title} desscription={data.body}/>)}
      {/* <ProductCard/> */}
    </main>
  )
}

export async function getServerSideProps(){
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json()

  // console.log(res)

  return {props: {data}}

}
