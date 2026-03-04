import React from "react";

/**
 * Performance optimization utilities for components.
 * Provides memoization, lazy loading, and other performance enhancements.
 */

/**
 * Memoizes a component with shallow equality check.
 */
export function memo<TProps>(
  Component: React.ComponentType<TProps>,
  displayName?: string
): React.ComponentType<TProps> {
  const MemoizedComponent = React.memo(Component, (prevProps, nextProps) => {
    // Shallow equality check for props
    return Object.keys({ ...prevProps, ...nextProps }).every((key) => {
      const prev = prevProps[key as keyof TProps];
      const next = nextProps[key as keyof TProps];
      
      if (typeof prev === 'object' && prev !== null && typeof next === 'object' && next !== null) {
        return JSON.stringify(prev) === JSON.stringify(next);
      }
      
      return prev === next;
    });
  });

  if (displayName) {
    MemoizedComponent.displayName = displayName;
  }

  return MemoizedComponent;
}

/**
 * Creates a lazily loaded component.
 */
export function lazyLoad<TProps>(
  loader: () => Promise<{ default: React.ComponentType<TProps> }>,
  fallback?: React.ReactNode
): React.ComponentType<TProps> {
  const LazyComponent = React.lazy(loader);
  
  return (props: any) => (
    <React.Suspense fallback={fallback || null}>
      <LazyComponent {...props} />
    </React.Suspense>
  );
}

/**
 * Debounces a function call.
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

/**
 * Throttles a function call.
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCallTime = 0;
  let timeoutId: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>) => {
    const now = Date.now();
    
    if (now - lastCallTime >= delay) {
      lastCallTime = now;
      func(...args);
    } else {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      timeoutId = setTimeout(() => {
        lastCallTime = Date.now();
        func(...args);
      }, delay - (now - lastCallTime));
    }
  };
}

/**
 * Hook for measuring component performance.
 */
export function usePerformance(
  componentName: string,
  logLevel: 'info' | 'warn' | 'error' = 'info'
) {
  const startTimeRef = React.useRef<number>(0);
  
  React.useEffect(() => {
    startTimeRef.current = performance.now();
    
    return () => {
      const endTime = performance.now();
      const duration = endTime - startTimeRef.current;
      
      if (logLevel === 'info' || (logLevel === 'warn' && duration > 100) || (logLevel === 'error' && duration > 500)) {
        console[logLevel](`Component ${componentName} rendered in ${duration.toFixed(2)}ms`);
      }
    };
  });
  
  return {
    logRenderTime: (message?: string) => {
      const endTime = performance.now();
      const duration = endTime - startTimeRef.current;
      console.log(`Component ${componentName} ${message || 'rendered'} in ${duration.toFixed(2)}ms`);
    }
  };
}