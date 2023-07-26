# Context

As a senior product engineer in the team, you suggested to build an internal tool for our customer success team. You agreed with the product team on the following milestones.

## Step 1: Web API

We first need to be able to query the list of ongoing clinical trials. Two fields are available for queries:
* Sponsor name
* Country code

We already have access to a third-party API (represented by [this file](trials.json)) listing all clinical trials, and we are going to build a wrapper around it.

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

Example stack: http server exposing REST endpoint that serves json payloads.

## Step 2: Command-line interface

We will then build a command-line interface that displays the list of ongoing clinical trials for a given country code. It will be deployed on the computers of the customer success team. We already have access to a [file](countries.json) that maps country codes to country names. We will leverage what we have already built in the previous step.

Here is the output you should get for the country code "FR":

```txt
Olaparib + Sapacitabine in BRCA Mutant Breast Cancer, France
Topical Calcipotriene Treatment for Breast Cancer Immunoprevention, France
```

# Instructions

- [ ] Clone this repository (do **not** fork it)
- [ ] Implement the features step-by-step (your commit history should be clear to follow)
- [ ] Document your architecture and design choices along the way
- [ ] Provide instructions on how we can run your code
- [ ] Publish it on GitHub (or equivalent)
- [ ] Send us the link and tell us approximately how much time you spent on this assignment

## Guidelines

We expect you to spend no more than 5 hours on this assignment.

To get you started quicker, we setup a typescript monorepo with an API and a CLI. Feel free to use other languages and technologies you are more comfortable with. You are encouraged to make good use of open-source code.

## Expectations
- [ ] You followed the instructions 
- [ ] We can run & query the Web API
- [ ] We can run the CLI
- [ ] We can run tests
- [ ] The applications are bug free

## Out of scope

- Authentication / authorization
- Usage of third party tools, like a CI service
- Performance
- Security

# Setup instructions

In order to setup and run the existing basic project we provided:
- install node (see .nvmrc)
- install and run yarn
- see the documentation in packages/api and packages/cli