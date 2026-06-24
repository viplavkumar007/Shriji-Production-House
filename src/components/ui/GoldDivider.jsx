export default function GoldDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500" />
      <div className="w-1.5 h-1.5 rounded-full bg-gold-500 shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500" />
    </div>
  )
}
