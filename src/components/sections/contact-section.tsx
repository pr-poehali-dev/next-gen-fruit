import { Phone, MapPin, Mail } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import { useState, type FormEvent } from "react"
import { MagneticButton } from "@/components/magnetic-button"

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      return
    }

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <section
      ref={ref}
      className="flex min-h-[100dvh] w-screen shrink-0 snap-start items-center px-5 pt-20 sm:px-8 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-16 lg:gap-24">
          <div className="flex flex-col justify-center">
            <div
              className={`mb-5 transition-all duration-700 md:mb-12 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-1 font-sans text-3xl font-light leading-[1.05] tracking-tight text-foreground sm:text-4xl md:mb-3 md:text-6xl lg:text-8xl">
                Запишитесь
                <br />
                на просмотр
              </h2>
              <p className="font-mono text-[10px] text-foreground/60 sm:text-xs md:text-base">/ Свяжитесь с нами</p>
            </div>

            <div className="space-y-4 md:space-y-8">
              <a
                href="tel:+74951416515"
                className={`group block transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Phone className="h-3 w-3 text-foreground/60" />
                  <span className="font-mono text-[10px] text-foreground/60 sm:text-xs">Телефон</span>
                </div>
                <p className="text-base text-foreground transition-colors group-hover:text-foreground/70 md:text-2xl">
                  +7 (495) 141-65-15
                </p>
              </a>

              <a
                href="mailto:I.kogane@napetrovke.ru"
                className={`group block transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Mail className="h-3 w-3 text-foreground/60" />
                  <span className="font-mono text-[10px] text-foreground/60 sm:text-xs">Email</span>
                </div>
                <p className="break-all text-sm text-foreground transition-colors group-hover:text-foreground/70 sm:text-base md:text-xl">
                  I.kogane@napetrovke.ru
                </p>
              </a>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "420ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <MapPin className="h-3 w-3 text-foreground/60" />
                  <span className="font-mono text-[10px] text-foreground/60 sm:text-xs">Адрес объекта</span>
                </div>
                <p className="text-sm leading-snug text-foreground sm:text-base md:text-xl">
                  Московская обл., г.о. Люберцы,<br />
                  пгт Мирный, ул. Военкора Максима Фомина, 6
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <label className="mb-1 block font-mono text-[10px] text-foreground/60 sm:text-xs md:mb-2">Имя</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full border-b border-foreground/30 bg-transparent py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none md:py-2 md:text-base"
                  placeholder="Ваше имя"
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                <label className="mb-1 block font-mono text-[10px] text-foreground/60 sm:text-xs md:mb-2">Телефон</label>
                <input
                  type="tel"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full border-b border-foreground/30 bg-transparent py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none md:py-2 md:text-base"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <label className="mb-1 block font-mono text-[10px] text-foreground/60 sm:text-xs md:mb-2">Комментарий</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full border-b border-foreground/30 bg-transparent py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none md:py-2 md:text-base"
                  placeholder="Под какой бизнес рассматриваете помещение?"
                />
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "650ms" }}
              >
                <MagneticButton
                  variant="primary"
                  size="lg"
                  className="w-full disabled:opacity-50"
                >
                  {isSubmitting ? "Отправка..." : "Записаться на просмотр"}
                </MagneticButton>
                {submitSuccess && (
                  <p className="mt-3 text-center font-mono text-xs text-foreground/80 sm:text-sm">Заявка отправлена!</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
