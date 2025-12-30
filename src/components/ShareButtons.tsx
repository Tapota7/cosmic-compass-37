import { Share2, Twitter, Facebook, MessageCircle, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ShareButtonsProps {
  title: string;
  text: string;
  url?: string;
  className?: string;
}

const ShareButtons = ({ title, text, url = window.location.href, className }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);

  const shareData = {
    title,
    text,
    url,
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${title}\n\n${text}\n\n${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.log('Error copying:', err);
    }
  };

  const encodedText = encodeURIComponent(`${title}\n\n${text}`);
  const encodedUrl = encodeURIComponent(url);

  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodedText}%0A%0A${encodedUrl}`,
      color: 'hover:text-green-500',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      color: 'hover:text-sky-500',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`,
      color: 'hover:text-blue-600',
    },
  ];

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {navigator.share && (
        <button
          onClick={handleNativeShare}
          className="p-2 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
          aria-label="Compartir"
        >
          <Share2 className="w-5 h-5" />
        </button>
      )}
      
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'p-2 rounded-full bg-secondary/50 text-muted-foreground transition-all hover:bg-primary/10',
            link.color
          )}
          aria-label={`Compartir en ${link.name}`}
        >
          <link.icon className="w-5 h-5" />
        </a>
      ))}
      
      <button
        onClick={handleCopy}
        className="p-2 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
        aria-label="Copiar enlace"
      >
        {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
      </button>
    </div>
  );
};

export default ShareButtons;
