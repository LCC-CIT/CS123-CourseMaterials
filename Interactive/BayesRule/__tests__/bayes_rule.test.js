// bayes_rule.test.js
// Basic Jest test for checkMCQAnswer function
// Note: DOM manipulation must be mocked for this test

 const { JSDOM } = require('jsdom');
 const { checkMCQAnswer } = require('../bayes_rule.js');

describe('checkMCQAnswer', () => {
  beforeAll(() => {
    // Create a DOM for the tests
    const dom = new JSDOM(`<!DOCTYPE html><body></body>`);
    global.window = dom.window;
    global.document = dom.window.document;
  });

  test('shows orange feedback if no radio selected', () => {
    document.body.innerHTML = `
      <form id="mcq-test">
        <input type="radio" name="mcq" value="a">
        <input type="radio" name="mcq" value="b">
      </form>
      <div id="mcq-test-feedback"></div>
    `;
    const result = checkMCQAnswer('mcq-test', 'a');
    expect(document.getElementById('mcq-test-feedback').textContent).toBe('Please select an answer.');
    expect(document.getElementById('mcq-test-feedback').style.color).toBe('orange');
    expect(result).toBe(false);
  });

  test('shows green feedback if correct radio selected', () => {
    document.body.innerHTML = `
      <form id="mcq-test">
        <input type="radio" name="mcq" value="a" checked>
        <input type="radio" name="mcq" value="b">
      </form>
      <div id="mcq-test-feedback"></div>
    `;
    const result = checkMCQAnswer('mcq-test', 'a');
    expect(document.getElementById('mcq-test-feedback').textContent).toBe('Correct!');
    expect(document.getElementById('mcq-test-feedback').style.color).toBe('green');
    expect(result).toBe(false);
  });

  test('shows red feedback if incorrect radio selected', () => {
    document.body.innerHTML = `
      <form id="mcq-test">
        <input type="radio" name="mcq" value="a">
        <input type="radio" name="mcq" value="b" checked>
      </form>
      <div id="mcq-test-feedback"></div>
    `;
    const result = checkMCQAnswer('mcq-test', 'a');
    expect(document.getElementById('mcq-test-feedback').textContent).toBe('Incorrect. Try again!');
    expect(document.getElementById('mcq-test-feedback').style.color).toBe('red');
    expect(result).toBe(false);
  });
});
