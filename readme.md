## Introduction

Documentation for each projects are inside their project folder accordingly.

## Bonus Question

Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.

The result is banana because `+'a'` resolves to NaN meaning "Not a Number". without the lowercase function is would result to `baNaNa`.
