abstract class TextInput {
  input: string;

  output = () => this.input;
}

abstract class TextInputDecorator extends TextInput {
  textInput: TextInput;
}

class MyTextInput extends TextInput {
  constructor(input: string) {
    super();
    this.input = input;
  }
}

class LowerTextDecorator extends TextInputDecorator {
  constructor(textInput: TextInput) {
    super();
    this.textInput = textInput;
  }
  output = () => this.textInput.output().toLocaleLowerCase();
}
class CapitalizeTextDecorator extends TextInputDecorator {
  constructor(textInput: TextInput) {
    super();
    this.textInput = textInput;
  }
  output = () => {
    return (
      this.textInput
        .output()
        .substr(0, 1)
        .toLocaleUpperCase() + this.textInput.output().substr(1)
    );
  };
}

class CustomText {
  constructor(input: string) {
    const myInput = new CapitalizeTextDecorator(
      new LowerTextDecorator(new MyTextInput(input))
    );

    console.log(myInput.output());
  }
}

new CustomText("HeLlOo My fRieND! ");
