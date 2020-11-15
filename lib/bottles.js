import { downTo } from './helpers';
export class Bottles {
  song() {
    return this.verses(99, 0);
  }
  verses(startN, endN) {
    return downTo(startN, endN)
      .map(n => this.verse(n))
      .join("\n");
  }

  verse(n) {
    return this.firstVerse(n) +
        this.secondVerse(n) +
        this.thirdVerse(n) +
        this.fourthVerse(n);
  }

  firstVerse(n) {
    if(n==0) {
      return 'No more ' + this.getBottlePluralIfNecessaryOfBeer() + ' on the wall, ';
    }
    return this.getNBottlePluralIfNecessaryOfBeer(n) + ' on the wall, ';
  }

  secondVerse(n) {
    if(n==0) {
      return 'no more ' + this.getBottlePluralIfNecessaryOfBeer() + '.\n';
    }
    return this.getNBottlePluralIfNecessaryOfBeer(n) + '.\n';
  }

  thirdVerse(n) {
    if(n==0) {
      return 'Go to the store and buy some more, ';
    }
    if(n==1) {
      return 'Take it down and pass it around, ';
    }
    return 'Take one down and pass it around, ';
  }

  fourthVerse(n) {
    if(n==0) {
      return this.getNBottlePluralIfNecessaryOfBeer(99) + ' on the wall.\n';
    }
    if(n==1) {
      return 'no more ' + this.getBottlePluralIfNecessaryOfBeer(2) + ' on the wall.\n';
    }
    if(n==2) {
      return this.getNBottlePluralIfNecessaryOfBeer(1) + ' on the wall.\n';
    }
    return this.getNBottlePluralIfNecessaryOfBeer(n-1) + ' on the wall.\n';
  }

  /**
   * 
   * @param {*} n, it must be >0 
   */
  getBottlePluralIfNecessaryOfBeer(n = 2) {
    var s = "";
    if(n>1) {
      s = "s";
    }
    return "bottle" + s + " of beer";
  }

  getNBottlePluralIfNecessaryOfBeer(n) {
    return n + " " + this.getBottlePluralIfNecessaryOfBeer(n);
  }
}
