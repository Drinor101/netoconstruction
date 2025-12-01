interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  light = false
}: SectionTitleProps) {
  return (
    <div className={`mb-12 sm:mb-16 lg:mb-20 ${centered ? 'text-center' : ''}`}>
      <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight tracking-tight ${
        light ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl leading-relaxed ${
          centered ? 'mx-auto' : ''
        } ${
          light ? 'text-gray-300/90' : 'text-gray-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
