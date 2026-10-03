type BlobProps = {
  className?: string;
};

export function Blob({ className }: BlobProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="currentColor" aria-hidden="true">
      <path
        d="M137.4,-129.3C173.4,-98.4,195,-49.2,193.8,-1.9C192.5,45.3,168.4,90.7,132.4,124.2C96.4,157.7,48.2,179.4,-2.6,182.1C-53.4,184.8,-106.8,168.5,-140.5,135C-174.2,101.5,-188.2,50.8,-186.5,1.3C-184.8,-48.2,-167.4,-96.4,-133.7,-127.3C-100,-158.2,-50,-171.8,0.9,-172.6C51.8,-173.4,103.5,-160.3,137.4,-129.3Z"
        transform="translate(100 100) scale(0.58)"
      />
    </svg>
  );
}
