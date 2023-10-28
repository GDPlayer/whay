// IMPOER T THIS ON PENGUINMOD
class Whay {
  getInfo() {
    return {
      id: 'randomtruefalse',
      name: 'whay',
      blocks: [
        {
          opcode: 'randomtruefalse',
          blockType: Scratch.BlockType.REPORTER,
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
