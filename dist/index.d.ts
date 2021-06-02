import * as React from 'react';
export interface IShortcut {
    description: string;
    hold: boolean;
    holdDuration: number;
    id: string;
    keys: string[];
    method: (props: any) => any;
    sequence: boolean;
    title: string;
}
export interface IShortcutBinding {
    [key: string]: IShortcut;
}
export interface IShortcutProviderProps {
    children?: React.ReactNode;
    ignoreKeys?: string[];
    ignoreTagNames?: string[];
    preventDefault?: boolean;
}
export interface IShortcutProviderState {
    shortcuts: IShortcut[];
}
export interface IShortcutProviderRenderProps extends IShortcutProviderState {
    registerShortcut?: (method: (e?: React.KeyboardEvent<any>) => any, keys: string[], title: string, description: string, holdDuration?: number) => void;
    registerSequenceShortcut?: (method: () => any, keys: string[], title: string, description: string) => void;
    setEnabled?: (enable: boolean) => void;
    triggerShortcut?: (key: string) => any;
    unregisterShortcut?: (keys: string[]) => void;
}
interface ISingleShortcutListener {
    [key: string]: (e?: React.KeyboardEvent<any>) => any;
}
interface IShortcutListener {
    [key: string]: ((e?: React.KeyboardEvent<any>) => any)[];
}
export interface IWithShortcut {
    shortcut?: IShortcutProviderRenderProps;
}
export declare const ShortcutConsumer: React.Consumer<IShortcutProviderRenderProps>;
export declare class ShortcutProvider extends React.PureComponent<IShortcutProviderProps> {
    holdDurations: {
        [key: string]: number;
    };
    holdInterval?: number;
    holdListeners: ISingleShortcutListener;
    holdTimer: number;
    keysDown: string[];
    listeners: IShortcutListener;
    previousKeys: string[];
    sequenceListeners: ISingleShortcutListener;
    sequenceTimer?: number;
    shortcuts: IShortcut[];
    enabled: boolean;
    readonly state: IShortcutProviderState;
    static transformKeys: (keys: string[]) => string[];
    componentDidMount(): void;
    componentWillUnmount(): void;
    private createTimer;
    keyDown: (e: any) => void;
    keyUp: (e: any) => void;
    windowBlur: (e: any) => void;
    registerShortcut: (method: (e?: React.KeyboardEvent<any> | undefined) => any, keys: string[] | undefined, title: string, description: string, holdDuration?: number | undefined) => void;
    registerSequenceShortcut: (method: () => any, keys: string[] | undefined, title: string, description: string) => void;
    private resetTimer;
    triggerShortcut: (key: string) => void;
    setEnabled: (enable: boolean) => void;
    unregisterShortcut: (keys: string[], sequence?: boolean) => void;
    render(): JSX.Element;
}
export declare const withShortcut: <T extends IWithShortcut>(Child: React.ComponentType<T>) => {
    new (props: Readonly<T & IWithShortcut>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<T & IWithShortcut>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<T & IWithShortcut> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<T & IWithShortcut>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<T & IWithShortcut>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<T & IWithShortcut>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<T & IWithShortcut>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<T & IWithShortcut>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<T & IWithShortcut>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<T & IWithShortcut>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: T & IWithShortcut, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<T & IWithShortcut>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<T & IWithShortcut> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<T & IWithShortcut>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<T & IWithShortcut>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<T & IWithShortcut>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<T & IWithShortcut>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<T & IWithShortcut>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<T & IWithShortcut>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<T & IWithShortcut>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
export {};
