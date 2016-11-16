/**
 * Copyright 2016, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const Translate = require(`@google-cloud/translate`);
const path = require(`path`);
const run = require(`../../utils`).run;

const cwd = path.join(__dirname, `..`);
const cmd = `node translate.js`;
const text = `Hello world!`;
const toLang = `ru`;

describe(`translate:translate`, () => {
  const translate = Translate();

  it(`should detect language`, () => {
    const output = run(`${cmd} detect "${text}"`, cwd);
    return translate.detect(text)
      .then((results) => {
        assert.equal(output, `Detected: ${results[0].language}`);
      });
  });

  it(`should list languages`, () => {
    const output = run(`${cmd} list`, cwd);
    assert.equal(output.includes(`Languages:`), true);
    assert.equal(output.includes(`{ code: 'af', name: 'Afrikaans' }`), true);
  });

  it(`should list languages with a target`, () => {
    const output = run(`${cmd} list es`, cwd);
    assert.equal(output.includes(`Languages:`), true);
    assert.equal(output.includes(`{ code: 'af', name: 'afrikáans' }`), true);
  });

  it(`should translate text`, () => {
    const output = run(`${cmd} translate ${toLang} "${text}"`, cwd);
    return translate.translate(text, toLang)
      .then((results) => {
        assert.equal(output.includes(`Text: ${text}`), true);
        assert.equal(output.includes(`Translation: ${results[0]}`), true);
      });
  });
});
