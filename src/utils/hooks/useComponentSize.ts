import React, { useState, useCallback } from "react";

type Size = { width: number; height: number } | null;

export const useComponentSize = (): [
  size: Size,
  onLayout: (event: any) => void
] => {
  const [size, setSize] = useState<Size>(null);
  const onLayout = useCallback((event) => {
    const { width, height } = event.nativeEvent.layout;
    setSize({ width, height });
  }, []);
  return [size, onLayout];
};
