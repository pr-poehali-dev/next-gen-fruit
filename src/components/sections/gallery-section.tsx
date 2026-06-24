import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"
import Icon from "@/components/ui/icon"

const PHOTOS = [
  {
    url: "https://cdn.poehali.dev/projects/3a3ec48e-114f-4167-90cd-648f874758f2/bucket/c2637419-dc04-4218-9ea4-7e7ab3eccc32.jpg",
    caption: "Вход и витрины",
  },
  {
    url: "https://cdn.poehali.dev/projects/3a3ec48e-114f-4167-90cd-648f874758f2/bucket/5025ef28-8801-42f0-9d7c-47a0e6df8933.jpg",
    caption: "Торговый зал — вид на вход",
  },
  {
    url: "https://cdn.poehali.dev/projects/3a3ec48e-114f-4167-90cd-648f874758f2/bucket/baae14b4-4901-400a-9ef3-5441f402af8b.jpg",
    caption: "Панорамный вид",
  },
  {
    url: "https://cdn.poehali.dev/projects/3a3ec48e-114f-4167-90cd-648f874758f2/bucket/357ef88a-0021-4a62-879f-bfbca66b0ed8.jpg",
    caption: "Торговый зал — 88 м²",
  },
  {
    url: "https://cdn.poehali.dev/projects/3a3ec48e-114f-4167-90cd-648f874758f2/bucket/cec0b1e6-ce28-4123-b295-6ad652909a12.jpg",
    caption: "Помещение в длину — отдельные зоны",
  },
]

export function GallerySection() {
  const { ref, isVisible } = useReveal(0.2)
  const [lightbox, setLightbox] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)
  const prev = () => setLightbox((i) => (i === null ? null : (i - 1 + PHOTOS.length) % PHOTOS.length))
  const next = () => setLightbox((i) => (i === null ? null : (i + 1) % PHOTOS.length))

  return (
    <section
      ref={ref}
      className="flex min-h-[100dvh] w-screen shrink-0 snap-start flex-col justify-center px-5 pt-20 pb-10 sm:px-8 md:px-12 md:pt-0 md:pb-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div
          className={`mb-6 transition-all duration-700 md:mb-10 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-3xl font-light tracking-tight text-foreground sm:text-4xl md:text-6xl lg:text-7xl">
            Галерея
          </h2>
          <p className="font-mono text-[10px] text-foreground/60 sm:text-xs md:text-base">/ Фотографии объекта</p>
        </div>

        {/* Grid — единый формат */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-5">
          {PHOTOS.map((photo, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-lg transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${100 + i * 80}ms` }}
            >
              <button
                onClick={() => openLightbox(i)}
                className="group relative block h-32 w-full overflow-hidden sm:h-40 md:h-48 lg:h-44"
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:p-3">
                  <span className="font-mono text-[10px] text-white">{photo.caption}</span>
                </div>
                <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/40 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <Icon name="Expand" size={12} className="text-white" />
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Counter */}
        <div
          className={`mt-4 transition-all duration-700 md:mt-6 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <p className="font-mono text-[10px] text-foreground/50 sm:text-xs">
            {PHOTOS.length} фотографий · нажмите для просмотра
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6 sm:h-10 sm:w-10"
          >
            <Icon name="X" size={18} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6 sm:h-10 sm:w-10"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>

          <div className="relative mx-16 max-h-[85dvh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={PHOTOS[lightbox].url}
              alt={PHOTOS[lightbox].caption}
              className="max-h-[80dvh] w-auto max-w-full rounded-lg object-contain"
            />
            <p className="mt-3 text-center font-mono text-xs text-white/70">{PHOTOS[lightbox].caption}</p>
            <p className="mt-1 text-center font-mono text-[10px] text-white/40">
              {lightbox + 1} / {PHOTOS.length}
            </p>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:h-10 sm:w-10"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>
      )}
    </section>
  )
}