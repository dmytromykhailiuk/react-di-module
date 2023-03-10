/// <reference types="react" />
import { ProviderOptions } from '@dmytromykhailiuk/dependency-injection-container';
export declare const Module: ({ providers, children }: {
    providers?: ProviderOptions[];
    children: any;
}) => JSX.Element;
export declare function useInject<T>(token: any): T;
