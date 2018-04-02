
let input = null;

class HiddenInput {
  constructor () {
    input = document.createElement('input');
    input.setAttribute('disabled', true);
    input.setAttribute('autocorrect', 'off')
    input.setAttribute('autocapitalize', 'off')
  }

  focus () {
    if (!input) {
      return
    }
    input.focus()
  }

  blur () {
    if (!input) {
      return
    }
    input.blur()
  }

  destroy () {
    input = null
  }
}
