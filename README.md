# Org Repos

### Table of Contents

**[Project Structure](#project-structure)**<br>
**[Steps to run the app](#steps-to-run-the-app)**<br>
**[Steps to run unit tests](#steps-to-run-unit-tests)**<br>
**[Features to include in future](#features-to-include-in-future)**<br>

## Project Structure

#### \* This app is built on GitHub GraphQL API V4

| Directory       | Description                                                       |
| --------------- | ----------------------------------------------------------------- |
| views           | container components that orchestrate the repos/commits pages     |
| components      | presentation components that are building blocks for the views    |
| config          | configuration files for GraphQL Apollo Client, React Router setup |
| graphql-queries | graphql queries for org search, repo commits                      |
| test-helpers    | mock response files for react apollo                              |
| constants       | reusable constants                                                |

## Steps to run the app

### 1. Clone the repo.

```bash
git clone https://github.com/spuchala/org-repos.git
```

### 2. Generate a GitHub 'personal access token (PAT)' that will be used as a oAuth Bearer token in the project. Steps in the link below.

```bash
https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token
```

### 3. Replace "Personal_Access_Token_goes_here" in line no:9, file: src/config/graphql-apollo-client.js with the PAT (generated above)

```bash
https://github.com/spuchala/org-repos/blob/main/src/config/graphql-apollo-client.js#L9
```

### 4. Run the app

```bash
npm run start
```

## Steps to run unit tests

#### \* A 90% + unit test coverage is met for functions/branches/lines of code in this project.

```bash
npm run validate
```

## Features to include in future

- Currently, only top 10 repos and top 10 commits are being shown. Paging or infinite scrolling would be more ideal for a great user experience.
- Giving a user options to fetch repos by popularity, forks etc via a dropdown would be ideal.
- Given GitHub API V4 needs an oAuth token, setting up a vault or a backend service to generate a refresh token would be ideal.
