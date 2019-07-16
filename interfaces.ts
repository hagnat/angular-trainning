interface Monument {
    name: string,
    height: number
}

export class MonumentCollection {
    public monuments: Monument[];

    constructor() {
        this.monuments = [];
    }

    getTallestMonument() {
        function compareMonuments(x: Monument, y: Monument) {
          if (x.height > y.height) {
            return -1;
          }
          if (x.height < y.height) {
            return 1;
          }
          return 0;
        }

        var sortedMonuments = this.monuments.sort(compareMonuments);

        return sortedMonuments ? sortedMonuments[0] : null;
    }
};
