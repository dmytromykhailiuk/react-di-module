import * as React from 'react';
import { Container, globalContainer, ProviderOptions } from '@dmytromykhailiuk/dependency-injection-container';
import { createContext, useContext, useMemo } from 'react';

const DIContext = createContext(globalContainer);

export const Module = ({ providers = [], children }: { providers?: ProviderOptions[]; children: any }) => {
  const container = useContext(DIContext);
  const newContainer = useMemo(() => new Container(container), [providers]);

  useMemo(() => {
    newContainer.registerProviders([...(providers || [])]);
  }, [providers]);

  return <DIContext.Provider value={newContainer}>{children}</DIContext.Provider>;
};

export function useInject<T>(token: any): T {
  const container = useContext(DIContext);

  return useMemo<T>(() => container.inject<T>(token), [token]);
}
