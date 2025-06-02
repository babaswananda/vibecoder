'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ResizeHandleProps {
  direction: 'horizontal' | 'vertical';
  onResize: (delta: number) => void;
  className?: string;
  disabled?: boolean;
}

export function ResizeHandle({ 
  direction, 
  onResize, 
  className,
  disabled = false 
}: ResizeHandleProps) {
  const [isResizing, setIsResizing] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [startSize, setStartSize] = useState(0);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (disabled) return;
    
    e.preventDefault();
    setIsResizing(true);
    
    const pos = direction === 'horizontal' ? e.clientX : e.clientY;
    setStartPos(pos);
    
    // Get the current size of the parent element
    const parent = (e.target as HTMLElement).parentElement;
    if (parent) {
      const rect = parent.getBoundingClientRect();
      setStartSize(direction === 'horizontal' ? rect.width : rect.height);
    }
  }, [direction, disabled]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isResizing) return;

    const currentPos = direction === 'horizontal' ? e.clientX : e.clientY;
    const delta = currentPos - startPos;

    // Only call onResize if there's a meaningful change
    if (Math.abs(delta) > 1) {
      onResize(delta);
      setStartPos(currentPos); // Update start position to prevent accumulation
    }
  }, [isResizing, direction, startPos, onResize]);

  const handleMouseUp = useCallback(() => {
    setIsResizing(false);
  }, []);

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = direction === 'horizontal' ? 'col-resize' : 'row-resize';
      document.body.style.userSelect = 'none';
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
      };
    }
  }, [isResizing, handleMouseMove, handleMouseUp, direction]);

  if (disabled) return null;

  return (
    <div
      className={cn(
        "group relative flex-shrink-0 transition-all duration-200",
        direction === 'horizontal'
          ? "w-1 cursor-col-resize hover:w-2"
          : "h-1 cursor-row-resize hover:h-2",
        isResizing && (direction === 'horizontal' ? "w-2" : "h-2"),
        className
      )}
      onMouseDown={handleMouseDown}
      style={{
        background: isResizing
          ? 'linear-gradient(135deg, #3b82f6, rgba(59, 130, 246, 0.8))'
          : 'transparent'
      }}
    >
      {/* Visual indicator */}
      <div
        className={cn(
          "absolute transition-all duration-200",
          direction === 'horizontal'
            ? "left-0 top-0 w-full h-full"
            : "top-0 left-0 w-full h-full",
          isResizing
            ? 'bg-gradient-to-r from-blue-500 to-purple-500'
            : 'bg-white/20 group-hover:bg-white/40'
        )}
        style={{
          background: isResizing
            ? 'linear-gradient(135deg, #3b82f6, rgba(59, 130, 246, 0.8))'
            : undefined
        }}
      />

      {/* Hover area for better UX */}
      <div
        className={cn(
          "absolute",
          direction === 'horizontal'
            ? "-left-2 top-0 w-5 h-full cursor-col-resize"
            : "left-0 -top-2 w-full h-5 cursor-row-resize"
        )}
      />
    </div>
  );
}
