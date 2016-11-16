<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# Google Translate API Node.js Samples

With the [Google Translate API][translate_docs], you can dynamically translate
text between thousands of language pairs.

[translate_docs]: https://cloud.google.com/translate/docs/

## Table of Contents

* [Setup](#setup)
* [Samples](#samples)
  * [Translate](#translate)

## Setup

1. Read [Prerequisites][prereq] and [How to run a sample][run] first.
1. Install dependencies:

        npm install

[prereq]: ../README.md#prerequisities
[run]: ../README.md#how-to-run-a-sample

## Samples

### Translate

View the [documentation][translate_docs] or the [source code][translate_code].

__Usage:__ `node translate.js --help`

```
Commands:
  detect <input..>              Detects the language of the provided text or texts
  list [target]                 Lists available translation languages. To return language names in a language other than
                                English, specify a target language.
  translate <toLang> <input..>  Translates the provided text or texts to the target language.

Options:
  --apiKey, -k  Your Translate API key. Defaults to the value of the TRANSLATE_API_KEY environment variable.    [string]
  --help        Show help                                                                                      [boolean]

Examples:
  node translate.js detect "Hello world!"                       Detects the language of "Hello world!".
  node translate.js detect -k YOUR_API_KEY "Hello world!"       Detects the language of "Hello world!" and "Goodbye",
  "Goodbye"                                                     supplying the API key inline.
  node translate.js list -k YOUR_API_KEY                        Lists available translation languages with names in
                                                                English, supplying the API key inline.
  node translate.js list es                                     Lists available translation languages with names in
                                                                Spanish.
  node translate.js translate ru "Good morning!"                Translates "Good morning!" to Russian, auto-detecting
                                                                the source language.

For more information, see https://cloud.google.com/translate/docs
```

[translate_docs]: https://cloud.google.com/translate/docs
[translate_code]: translate.js
