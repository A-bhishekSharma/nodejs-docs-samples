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

const program = require(`../tables`);

describe(`bigquery:tables`, () => {
  it(`should have expected exports`, () => {
    assert.equal(typeof program.createTable, `function`);
    assert.equal(typeof program.deleteTable, `function`);
    assert.equal(typeof program.listTables, `function`);
    assert.equal(typeof program.browseRows, `function`);
    assert.equal(typeof program.browseRows, `function`);
    assert.equal(typeof program.importLocalFile, `function`);
    assert.equal(typeof program.importFileFromGCS, `function`);
    assert.equal(typeof program.exportTableToGCS, `function`);
    assert.equal(typeof program.insertRowsAsStream, `function`);
    assert.equal(typeof program.copyTable, `function`);
  });
});
