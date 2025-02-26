# YetAnotherDiscordBotnet

Please read [`How-To-Code.md`](./How-To-Code.md) first, then read this page.

YetAnotherDiscordBotnet is a work-in-progress project aimed at creating a botnet for managing multiple Discord bots and automating tasks across various Discord servers. This project is built using Python for the backend and Next.js for the frontend.

## Current Features

### Repository Features
- **Automated Dependency Management**:  
    -   Uses Renovate to automatically scan for and update dependencies.
- **CI/CD Pipelines**: 
    -   Utilizes GitHub Actions for continuous integration and deployment.

### Application Features
- **Channel Management**: 
    -   Creates and manages text channels based on unique Client MAC addresses.
- **Discord Bot Integration**: 
    -   Integrates with Discord to manage Clients and handle messages using the Discord API.
- **Dynamic Client Script Generation**: 
    -   Generates and manages the **client** [`(main.py)`](/backend/languages/python/main.py) script dynamically based on settings and modules.

## Maintenance

Maintaining the project is very easy and needs no coding! I've implemented Renovate into this project, meaning that it will scan for a newer version of an installed dependency (package.json) and will create a Pull Request automatically. This ensures that all dependencies are always up-to-date with minimal manual intervention.

### Steps for Maintenance
1. **Review Renovate PRs**: Regularly check the Pull Requests created by Renovate.
2. **Monitor CI/CD**: Ensure that the CI/CD pipelines run successfully BEFORE merging the PRs. If everything is green, then merge!
3. **Merge PRs**: After reviewing and testing, merge the PRs to keep dependencies updated.

By following these steps, you can ensure that the project remains up-to-date and secure with the latest dependency versions.

## Pipelines


This project uses GitHub Actions for CI/CD. The workflows are defined in the [workflows](http://_vscodecontentref_/4) directory.

- **Create Issue from Code Annotations**: Automatically creates GitHub issues from code annotations.
    - Workflow file: [code-to-issue-and-branch.yml](/.github/workflows/code-to-issue-and-branch.yml)
    - Triggers on: [push](https://github.com/isaaclins/YetAnotherDiscordBotnet/blob/code/.github/workflows/code-to-issue-and-branch.yml#L3)
    - Steps:
        - [Checkout repository](https://github.com/isaaclins/YetAnotherDiscordBotnet/blob/code/.github/workflows/code-to-issue-and-branch.yml#L12-L15)
        - [Extract annotations and create issues](https://github.com/isaaclins/YetAnotherDiscordBotnet/blob/code/.github/workflows/code-to-issue-and-branch.yml#L17-L133)

- **Update Changelog**: Updates the changelog with the latest commit messages.
    - Workflow file: [update-changelog.yaml](/.github/workflows/update-changelog.yaml)
    - Triggers on: [push to `code` branch](https://github.com/isaaclins/YetAnotherDiscordBotnet/blob/code/.github/workflows/update-changelog.yaml#L3-L6)
    - Steps:
        - [Checkout repository](https://github.com/isaaclins/YetAnotherDiscordBotnet/blob/code/.github/workflows/update-changelog.yaml#L13-L16)
        - [Get latest commit message](https://github.com/isaaclins/YetAnotherDiscordBotnet/blob/code/.github/workflows/update-changelog.yaml#L18-L37)
        - [Change branch and save commit messages](https://github.com/isaaclins/YetAnotherDiscordBotnet/blob/code/.github/workflows/update-changelog.yaml#L39-L42)
        - [Commit and push changes](https://github.com/isaaclins/YetAnotherDiscordBotnet/blob/code/.github/workflows/update-changelog.yaml#L44-L50)
        - [Trigger pages workflow](https://github.com/isaaclins/YetAnotherDiscordBotnet/blob/code/.github/workflows/update-changelog.yaml#L52-L58)

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
