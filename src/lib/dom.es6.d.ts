interface DOMTokenList {

    #if TARGET_HAS_SYMBOLS
    #if TARGET_HAS_ITERABLES
    [Symbol.iterator](): IterableIterator<string>;
    #endif
    #endif
}

interface NodeList {

    #if TARGET_HAS_SYMBOLS
    #if TARGET_HAS_ITERABLES
    [Symbol.iterator](): IterableIterator<Node>
    #endif
    #endif
}

interface NodeListOf<TNode extends Node> {

    #if TARGET_HAS_SYMBOLS
    #if TARGET_HAS_ITERABLES
    [Symbol.iterator](): IterableIterator<TNode>
    #endif
    #endif
}
