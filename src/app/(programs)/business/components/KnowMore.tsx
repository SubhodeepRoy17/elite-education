import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface KnowMoreProps {
  activeProgram: "BBA" | "BCA"
}

export default function KnowMore({ activeProgram }: KnowMoreProps) {
  const articles = {
    "BBA": [
        {
            title: "Top Career Opportunities After a BBA Degree",
            image: "https://via.placeholder.com/300x200?text=BBA+Careers",
        },
        { 
            title: "The Importance of Business Management Skills in Today’s Economy", 
            image: "https://via.placeholder.com/300x200?text=Business+Skills" 
        },
        { 
            title: "BBA vs Other Management Degrees: Which One is Right for You?", 
            image: "https://via.placeholder.com/300x200?text=BBA+vs+Others" 
        },
    ],
    "BCA": [
        { 
            title: "Career Opportunities After a BCA Degree", 
            image: "https://via.placeholder.com/300x200?text=BCA+Careers" 
        },
        { 
            title: "The Role of Programming and Software Development in BCA", 
            image: "https://via.placeholder.com/300x200?text=Programming" 
        },
        { 
            title: "Emerging Trends in Computer Applications and IT Careers", 
            image: "https://via.placeholder.com/300x200?text=IT+Trends" 
        },
    ],
}


  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-serif">Know More About {activeProgram} Nursing</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articles[activeProgram].map((article, index) => (
          <Card key={index} className="overflow-hidden">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              width={300}
              height={200}
              className="w-full"
            />
            <CardContent>
              <a href="#" className="text-lg font-semibold hover:underline">
                {article.title}
              </a>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  )
}

