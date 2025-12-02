import { useEffect, useRef } from 'react';
import '@google/model-viewer';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': ModelViewerJSX &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

interface ModelViewerJSX {
  src?: string;
  poster?: string;
  alt?: string;
  'auto-rotate'?: boolean;
  'camera-controls'?: boolean;
  'shadow-intensity'?: string;
  'exposure'?: string;
  'ar'?: boolean;
  'ar-modes'?: string;
  style?: React.CSSProperties;
}

export default function ModelViewer3D() {
  const modelViewerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Helper function to get optimized asset URL
  const getAssetUrl = (path: string) => {
    const webpPath = path.replace(/\.(jpg|jpeg)$/i, '.webp');
    return new URL(`../assets/optimized/${webpPath}`, import.meta.url).href;
  };

  return (
    <div className="relative w-full h-full min-h-[500px] lg:min-h-[600px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-large">
      <model-viewer
        ref={modelViewerRef}
        src="https://modelviewer.dev/shared-assets/models/shishkebab.glb"
        poster={getAssetUrl('ND.2.jpg')}
        alt="3D interactive construction building model - Explore our architectural designs"
        auto-rotate
        camera-controls
        shadow-intensity="1.5"
        exposure="1.2"
        environment-image="neutral"
        interaction-policy="allow-when-focused"
        style={{
          width: '100%',
          height: '100%',
          minHeight: '500px',
        }}
      />
      <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 bg-white/95 backdrop-blur-md px-4 lg:px-5 py-2.5 lg:py-3 rounded-xl shadow-medium border border-gray-200/50">
        <p className="text-xs lg:text-sm font-semibold text-slate-900">Drag to rotate • Scroll to zoom</p>
      </div>
    </div>
  );
}
