import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Maximize2, Minimize2, RefreshCw } from 'lucide-react';
import { Card } from './card';
import { Button } from './button';

interface IframeDemoProps {
  url: string;
  title: string;
  defaultHeight?: number;
  className?: string;
}

export function IframeDemo({ 
  url, 
  title,
  defaultHeight = 600,
  className = ''
}: IframeDemoProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setHasError(false);
    // Force iframe refresh by updating key
    const iframe = document.querySelector(`iframe[title="${title}"]`) as HTMLIFrameElement;
    if (iframe) {
      iframe.src = iframe.src;
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <motion.div
      layout
      className={`relative ${className}`}
      animate={{ height: isFullscreen ? '100vh' : defaultHeight }}
    >
      <Card className="relative w-full h-full overflow-hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {/* Browser Chrome */}
        <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/30">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>
          <div className="flex-1 mx-4">
            <div className="px-3 py-1 text-sm truncate bg-background/40 rounded-md text-muted-foreground">
              {url}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleRefresh}
              className="h-8 w-8"
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFullscreen}
              className="h-8 w-8"
            >
              {isFullscreen ? (
                <Minimize2 className="h-4 w-4" />
              ) : (
                <Maximize2 className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative w-full h-[calc(100%-2.5rem)]">
          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm"
              >
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {hasError && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm"
              >
                <p className="text-destructive mb-4">Failed to load content</p>
                <Button onClick={handleRefresh} variant="outline">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Retry
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          <iframe
            src={url}
            title={title}
            className="w-full h-full border-0"
            onLoad={handleLoad}
            onError={handleError}
            loading="lazy"
          />
        </div>
      </Card>
    </motion.div>
  );
}
