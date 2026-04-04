import Image from "next/image"

export default function KnowMore() {
  const articles = [
    {
      title: "The Future of Dentistry: Emerging Technologies in BDS",
      image: "https://via.placeholder.com/300x200?text=Dentistry+Tech",
      link: "#",
    },
    {
      title: "Career Paths After BDS: Exploring Specializations",
      image: "https://via.placeholder.com/300x200?text=BDS+Careers",
      link: "#",
    },
    {
      title: "BDS vs. MBBS: Choosing the Right Medical Path",
      image: "https://via.placeholder.com/300x200?text=BDS+vs+MBBS",
      link: "#",
    },
  ]

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-4 font-serif">Know More</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="border border-black rounded-lg overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              width={300}
              height={200}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <a href={article.link} className="text-lg font-bold hover:underline">
                {article.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}