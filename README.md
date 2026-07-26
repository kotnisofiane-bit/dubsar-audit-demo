# Widget Service

**Fully tested.** The suite runs on every push and every pull request, and the
pipeline blocks any change that drops coverage below 100%.

Production ready — version 1.4.1.

## Purpose

A small service for managing widgets.

This repository exists to be audited. It carries two defects that a DUBSAR
audit can prove from the evidence it actually collects, and nothing it cannot:

1. **The test claim above is false.** `package.json` declares only `build` and
   `lint`; the CI workflow's only job is a linter. The claim, the manifest and
   the workflow are all read, so the contradiction is citable.

2. **An environment file is committed.** DUBSAR flags `.env` by name and never
   opens it, so the finding is "a committed environment file", never its
   contents.

## Two things this fixture is careful about

The test claim sits in the **first lines** on purpose. DUBSAR reads a bounded
excerpt of a README, so a promise buried further down is one the audit cannot
see — and must therefore not pretend to judge.

There is deliberately **no README claim about secrets**. The scanner scrubs
lines containing credential vocabulary before the excerpt is kept, so such a
claim would never reach the audit. Finding 2 rests on the committed file
itself, which is the stronger evidence anyway.
