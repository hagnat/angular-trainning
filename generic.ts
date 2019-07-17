function whoAmI<G>(param: G): G {
  return param;
}

let resu = whoAmI<string>("I am String");  // type of output will be 'string'

// type argument inference
let resu1 = whoAmI("I also am String");  // type of output will be 'string'

class Collection<Type> {

    items: Type[];

    constructor() {
        this.items = [];
    }
}

interface StringCollectionInterface {
    getCollections(): Collection<string>[];
}

class StringCollector implements StringCollectionInterface {

    collections: Collection<string>[];

    constructor() {
        this.collections = [];
    }

    getCollections() {
        return this.collections;
    }
}

let strings = new Collection<string>();
strings.items.push("foobar");

let collector = new StringCollector();
collector.collections.push(strings);

console.log(strings.items);
console.log(collector);
