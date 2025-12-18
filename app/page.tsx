import { ImageGallery } from "@/components/image-gallery"

export default function Page() {
  const dekathon3Inaugural = [
    { src: "/images/hero/hero_01.jpg", alt: "Dekathon 3.0 Inaugural 1" },
    { src: "/images/hero/hero_02.jpg", alt: "Dekathon 3.0 Inaugural 2" },
    { src: "/images/hero/hero_03.jpg", alt: "Dekathon 3.0 Inaugural 3" },
  ]

  const dekathon3FirstPrize = [
    { src: "/images/prizes/prize_first_02.jpg", alt: "First Prize Winner" },
    { src: "/images/prizes/prize_first_01.jpg", alt: "First Prize" },
  ]

  const dekathon3SecondPrize = [{ src: "/images/prizes/prize_second_01.jpg", alt: "Second Prize" }]

  const dekathon3CategoryPrizes = [
    { src: "/images/prizes/prize_category_01.jpg", alt: "Category Prize 1" },
    { src: "/images/prizes/prize_category_02.jpg", alt: "Category Prize 2" },
    { src: "/images/prizes/prize_category_03.jpg", alt: "Category Prize 3" },
    { src: "/images/prizes/prize_category_04.jpg", alt: "Category Prize 4" },
  ]

  const dekathon3Highlights = [
    { src: "/images/highlights/highlight_01.jpg", alt: "Dekathon 3.0 Highlight 1" },
    { src: "/images/highlights/highlight_02.jpg", alt: "Dekathon 3.0 Highlight 2" },
    { src: "/images/highlights/highlight_03.jpg", alt: "Dekathon 3.0 Highlight 3" },
    { src: "/images/highlights/highlight_04.jpg", alt: "Dekathon 3.0 Highlight 4" },
    { src: "/images/highlights/highlight_05.jpg", alt: "Dekathon 3.0 Highlight 5" },
    { src: "/images/highlights/highlight_06.jpg", alt: "Dekathon 3.0 Highlight 6" },
    { src: "/images/highlights/highlight_07.jpg", alt: "Dekathon 3.0 Highlight 7" },
    { src: "/images/highlights/highlight_08.jpg", alt: "Dekathon 3.0 Highlight 8" },
    { src: "/images/highlights/highlight_09.jpg", alt: "Dekathon 3.0 Highlight 9" },
    { src: "/images/highlights/highlight_10.jpg", alt: "Dekathon 3.0 Highlight 10" },
  ]

  const culturalImages = [
    { src: "/images/cultural/cultural_01.jpg", alt: "Cultural Performance 1" },
    { src: "/images/cultural/cultural_02.jpg", alt: "Cultural Performance 2" },
    { src: "/images/cultural/cultural_03.jpg", alt: "Cultural Performance 3" },
  ]

  const teamImages = [
    { src: "/images/team/team_01.jpg", alt: "Team Photo 1" },
    { src: "/images/team/team_02.jpg", alt: "Team Photo 2" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <section className="relative h-screen">
        <ImageGallery images={dekathon3Inaugural} layout="hero" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-6xl md:text-8xl font-sans font-light text-white drop-shadow-2xl">DEKATHON 3.0</h1>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-sans font-light text-center mb-16 text-foreground">PRIZES</h2>

        {/* First Prize */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-sans font-light text-center mb-8 text-foreground/80">First Prize</h3>
          <ImageGallery images={dekathon3FirstPrize} layout="grid" />
        </div>

        {/* Second Prize */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-sans font-light text-center mb-8 text-foreground/80">
            Second Prize
          </h3>
          <ImageGallery images={dekathon3SecondPrize} layout="grid" />
        </div>

        {/* Category Prizes */}
        <div>
          <h3 className="text-2xl md:text-3xl font-sans font-light text-center mb-8 text-foreground/80">
            Category Prizes
          </h3>
          <ImageGallery images={dekathon3CategoryPrizes} layout="grid" />
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-sans font-light text-center mb-12 text-foreground">HIGHLIGHTS</h2>
        <ImageGallery images={dekathon3Highlights} layout="grid" />
      </section>

      {/* Cultural Night Section */}
      <section className="py-16 px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-sans font-light text-center mb-12 text-foreground">CULTURAL NIGHT</h2>
        <ImageGallery images={culturalImages} layout="grid" />
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 md:px-8 pb-24">
        <h2 className="text-4xl md:text-5xl font-sans font-light text-center mb-12 text-foreground">TEAM</h2>
        <ImageGallery images={teamImages} layout="grid" />
      </section>
    </main>
  )
}
