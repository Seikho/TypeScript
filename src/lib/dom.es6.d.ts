interface DOMTokenList {

    #if TARGET_HAS_ITERABLES
    [Symbol.iterator](): IterableIterator<string>;
    #endif
}

interface NodeList {

    #if TARGET_HAS_ITERABLES
    [Symbol.iterator](): IterableIterator<Node>
    #endif
}

interface NodeListOf<TNode extends Node> {

    #if TARGET_HAS_ITERABLES
    [Symbol.iterator](): IterableIterator<TNode>
    #endif
}
