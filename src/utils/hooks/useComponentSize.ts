import React, { useState, useCallback } from "react";

type Size = { width: number; height: number } | null;
type ReturnProps = [size: Size, onLayout: (event: any) => void];

export const useComponentSize = (): ReturnProps => {
  const [size, setSize] = useState<Size>(null);

  const onLayout = useCallback((event: any) => {
    const { width, height } = event.nativeEvent.layout;
    setSize({ width, height });
  }, []);

  return [size, onLayout];
};
