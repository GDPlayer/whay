// IMPOER T THIS ON PENGUINMOD
class Whay {
  getInfo() {
    return {
      id: 'randomtruefalse',
      name: 'whay',
      blocks: [
        {
          opcode: 'whay',
          blockType: Scratch.BlockType.REPORTER,
          text: 'whay'
        }
      ]
    };
  }

  hello() {
    return [false,true][Math.round(Math.random())]
  }
}

Scratch.extensions.register(new whay());
