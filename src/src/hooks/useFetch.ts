import { useState, useEffect, useCallback, useRef } from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

interface CacheItem<T> {
  data: T;
  timestamp: number;
  expiresAt: number;
}

interface UseFetchOptions {
  cacheDuration?: number;
  enabled?: boolean;
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}

const cache = new Map<string, CacheItem<any>>();
const DEFAULT_CACHE_DURATION = 5 * 60 * 1000;

export function useFetch<T = any>(
  url: string | null,
  options: UseFetchOptions = {}
): FetchState<T> & { refetch: () => Promise<void> } {
  const { 
    cacheDuration = DEFAULT_CACHE_DURATION, 
    enabled = true,
    onSuccess,
    onError 
  } = options;
  
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: false,
    error: null,
  });
  
  const abortControllerRef = useRef<AbortController | null>(null);
  const isMountedRef = useRef(true);

  const fetchData = useCallback(async () => {
    if (!url) {
      setState(prev => ({ ...prev, loading: false }));
      return;
    }

    const cachedItem = cache.get(url);
    if (cachedItem && Date.now() < cachedItem.expiresAt) {
      setState({
        data: cachedItem.data,
        loading: false,
        error: null,
      });
      onSuccess?.(cachedItem.data);
      return;
    }

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();

    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const response = await fetch(url, {
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      cache.set(url, {
        data,
        timestamp: Date.now(),
        expiresAt: Date.now() + cacheDuration,
      });

      if (isMountedRef.current) {
        setState({
          data,
          loading: false,
          error: null,
        });
        onSuccess?.(data);
      }
    } catch (error) {
      if (isMountedRef.current && error instanceof Error && error.name !== 'AbortError') {
        setState({
          data: null,
          loading: false,
          error,
        });
        onError?.(error);
      }
    }
  }, [url, cacheDuration, onSuccess, onError]);

  useEffect(() => {
    isMountedRef.current = true;
    
    if (enabled && url) {
      fetchData();
    }

    return () => {
      isMountedRef.current = false;
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [url, enabled, fetchData]);

  return {
    ...state,
    refetch: fetchData,
  };
}
