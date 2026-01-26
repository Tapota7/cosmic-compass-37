import { useState, memo } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  eager?: boolean;
  fallbackEmoji?: string;
}

const OptimizedImage = memo(({ 
  src, 
  alt, 
  className = '', 
  wrapperClassName = '',
  eager = false,
  fallbackEmoji = '🌟'
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={cn("flex items-center justify-center bg-muted/20", wrapperClassName)}>
        <span className="text-2xl">{fallbackEmoji}</span>
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      {!isLoaded && (
        <Skeleton className="absolute inset-0 rounded-inherit" />
      )}
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={cn(
          className,
          "transition-opacity duration-300",
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
