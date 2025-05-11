import { cn } from "@/lib/utils"

export function SectionHeader({ title, description, align = "left", className, titleClassName, descriptionClassName }) {
  return (
    <div className={cn("mb-8", align === "center" && "text-center", className)}>
      <h2 className={cn("text-2xl md:text-3xl font-bold", titleClassName)}>
        <span className="text-blue-500">{title.charAt(0)}</span>
        {title.slice(1)}
      </h2>
      {description && <p className={cn("text-gray-400 mt-2", descriptionClassName)}>{description}</p>}
    </div>
  )
}
