// IMPOER T THIS ON PENGUINMOD
class Whay {
  getInfo() {
    return {
      id: 'randomtruefalse',
      name: 'whay',
      color1: "#729bb5",
      blocks: [
        {
          opcode: 'randomtruefalse',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'whay'
        }
      ]
    };
  }

  randomtruefalse() {
    return [false,true][Math.round(Math.random())]
  }
}

Scratch.extensions.register(new Whay());
