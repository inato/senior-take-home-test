# Context

As the most senior engineer in your squad, you work in a fast-paced environment where quality software delivery must be balanced with rapidly evolving product needs.
You suggested to build an internal tool for our customer success team. You agreed with the product team on the following milestones.

## Step 1: Web API

We first need to be able to query the list of ongoing clinical trials. Two fields are available for queries:
* Sponsor name
* Country code

You already have access to a third-party API (mocked and represented by [this file](trials.json)) listing all clinical trials, and you are going to build a wrapper around it.

A trial is _ongoing_ if:

- its start date is in the past
- its end date is in the future
- it has not been canceled

Here is the payload you should obtain when querying ongoing clinical trials for the sponsor "Sanofi":

```json
[
  {
    "name": "Olaparib + Sapacitabine in BRCA Mutant Breast Cancer",
    "start_date": "2019-01-01",
    "end_date": "2025-08-01",
    "sponsor": "Sanofi"
  },
  {
    "name": "Topical Calcipotriene Treatment for Breast Cancer Immunoprevention",
    "start_date": "2018-03-20",
    "end_date": "2032-09-10",
    "sponsor": "Sanofi"
  }
]
```

## Step 2: Command-line interface

You will then build a command-line interface that displays the list of ongoing clinical trials for a given country code. It will be deployed on the computers of the customer success team. You already have access to a [file](countries.json) that maps country codes to country names. You will leverage what you have already built in the previous step.

Here is the output you should get for the country code "FR":

```txt
Olaparib + Sapacitabine in BRCA Mutant Breast Cancer, France
Topical Calcipotriene Treatment for Breast Cancer Immunoprevention, France
```

# Instructions

- [ ] Clone this repository (do **not** fork it)
- [ ] Implement the features step-by-step (your commit history should be clear to follow)
- [ ] Document & explain your architecture and design choices along the way
- [ ] Provide clear instructions on how we can run your code
- [ ] Publish it on GitHub (or equivalent)
- [ ] Send us the link, along with an estimate of how much time you spent on this assignment

## Guidelines

### Starting pack
To get you started quicker, we setup a typescript monorepo with an API and a CLI.

### Choose your stack
We provide a starter TypeScript monorepo (including a basic API and CLI setup), but you’re free to use any language, framework, or toolset you're comfortable with.
You may structure the project however you like, monolith or modular, layered or flat, as long as your design decisions are clearly explained.
Feel free to use open-source libraries to support your solution where it makes sense.

Example stack (not limited to): http server exposing REST endpoint that serves json payloads.

### Assumptions
If anything is unclear, you can make reasonable assumptions and document them

### Use of AI is allowed 
Feel free to use AI (some of us use it every day, other don’t: it’s really up to you!).
Please include a short note on how and to what extent it was used.

### Time management
Usually, this assignment is completed within 3-4 hours.
We expect you to spend no more than 5 hours on this assignment.


## Expectations
- [ ] You followed the instructions 
- [ ] Your architecture and design choices are clearly documented
- [ ] The Web API is functional and queryable
- [ ] The CLI tool runs as expected
- [ ] Tests are included and runnable
- [ ] There is a clear separation of concerns
  - _e.g., keep core logic well isolated_
  - _you can apply DDD patterns if you are familiar with them like meaningful entities and clear layers_
- [ ] The application is free of bugs


## Out of scope

- Authentication / authorization
- Usage of third party tools, like a CI service
- Performance
- Security

# Setup instructions

In order to setup and run the existing basic project we provided:
- install node (see .nvmrc)
- install and run `pnpm install`
- Refer to the README files in the `packages/api` and `packages/cli` directories for additional details

# Final Thoughts
Let us know if you have any questions or blockers. We're evaluating your reasoning and clarity as much as your code. Explain your decisions and trade-offs like you would in a real-world setting.

