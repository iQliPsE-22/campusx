import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function CTASection({
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
  gradient = "from-blue-900/30 to-purple-900/30",
}) {
  return (
    <section className={cn(`py-16 bg-gradient-to-r ${gradient}`, className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">{description}</p>
        <div className="flex justify-center gap-4 flex-wrap">
          {primaryAction && (
            <Button className="bg-white text-black hover:bg-gray-100">
              {primaryAction.icon && <span className="mr-2">{primaryAction.icon}</span>}
              {primaryAction.label}
            </Button>
          )}
          {secondaryAction && (
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              {secondaryAction.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
