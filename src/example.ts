function concat(s1: string, s2: string): string {
    return s1.concat(s2);
}

interface MyHomeTask {
    howIDoIt: string;
    simeArray: [];
    withData: MyHomeTask[];
}

interface MyArray<T> {
    [N: number]: T;

    reduce<U>(fn: (accum: T, curr: T) => U, init: U): U;
}
