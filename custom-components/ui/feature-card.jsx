import { cn } from "@/lib/utils"

export function FeatureCard({ icon, title, description, className }) {
  return (
    <div className={cn("bg-gray-900 rounded-xl p-6 border border-gray-800 text-center", className)}>
      <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}
