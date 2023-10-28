// IMPOER T THIS ON PENGUINMOD
class Whay {
  getInfo() {
    const AllAsciiChars=' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'
    const AllLettersUppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const AllLettersLowercase="abcdefghijklmnopqrstuvwxyz"
    const AllSymbols=' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
    return {
      id: 'randomtruefalse',
      name: 'whay',
      color1: "#729bb5",
      blocks: [
        {
          opcode: 'randomtruefalse',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'random bool'
        },
        {
          opcode: 'randomchar',
          blockType: Scratch.BlockType.REPORTER,
          text: 'random char of type: [TYPE]',
          arguments: {
            type: Scratch.ArgumentType.STRING,
            menu: 'RANDOMTYPE'
          }
        }
      ],
      menus: {
        RANDOMTYPE: {
          acceptReporters: true,
          items: ["ascii","uppercase","lowercase","symbols"]
        }
      }
    };
  }

  randomtruefalse() {
    return [false,true][Math.round(Math.random())]
  }
  randomchar(type){
    switch(type){
      case "ascii":
        return AllAsciiChars[Math.round(Math.random()*AllAsciiChars.length)]
        break;
      case "uppercase":
        return AllLettersUppercase[Math.round(Math.random()*AllLettersUppercase.length)]
        break;
      case "lowercase":
        return AllLettersLowercase[Math.round(Math.random()*AllLettersLowercase.length)]
        break;
      case "symbols":
        return AllSymbols[Math.round(Math.random()*AllSymbols.length)]
        break;
    }
  }
}

Scratch.extensions.register(new Whay());
