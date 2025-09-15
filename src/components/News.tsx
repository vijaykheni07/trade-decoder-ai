import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TrendingUp, DollarSign, Globe, AlertTriangle } from "lucide-react";

const newsData = [
  {
    id: 1,
    title: "Bitcoin Reaches New All-Time High",
    description: "Bitcoin surges past $70,000 as institutional adoption continues to grow across major financial markets.",
    icon: TrendingUp,
    bgColor: "bg-gradient-to-br from-orange-500/20 to-yellow-500/20",
    iconColor: "text-orange-400"
  },
  {
    id: 2,
    title: "Fed Announces Interest Rate Decision",
    description: "Federal Reserve maintains current interest rates, signaling cautious approach to monetary policy adjustments.",
    icon: DollarSign,
    bgColor: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400"
  },
  {
    id: 3,
    title: "Global Markets Show Strong Growth",
    description: "International stock markets demonstrate robust performance amid positive economic indicators and trade developments.",
    icon: Globe,
    bgColor: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400"
  },
  {
    id: 4,
    title: "Cryptocurrency Regulation Updates",
    description: "New regulatory framework proposed for digital assets, aiming to provide clarity for institutional investors.",
    icon: AlertTriangle,
    bgColor: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400"
  },
];

export const News = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Market News</h2>
          <p className="text-muted-foreground">Stay updated with the latest financial market developments</p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {newsData.map((news) => {
              const IconComponent = news.icon;
              return (
                <CarouselItem key={news.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Card className={`${news.bgColor} border-border/50 hover:border-border transition-all duration-300 cursor-pointer group`}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg bg-black/20 ${news.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent size={24} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                            {news.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-3">
                            {news.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-4" />
          <CarouselNext className="hidden sm:flex -right-4" />
        </Carousel>
      </div>
    </section>
  );
};