# YetAnotherDiscordBotnet

Please read [`How-To-Code.md`](./How-To-Code.md) first, then read this page.

YetAnotherDiscordBotnet is a work-in-progress project aimed at creating a botnet for managing multiple Discord bots and automating tasks across various Discord servers. This project is built using Python for the backend and Next.js for the frontend.

## Current Features

### Repository Features
- **Automated Dependency Management**: Uses Renovate to automatically scan for and update dependencies.
- **CI/CD Pipelines**: Utilizes GitHub Actions for continuous integration and deployment.

### Application Features
- **Channel Management**: Creates and manages text channels based on unique Clients.
- **Discord Bot Integration**: Integrates with Discord to manage channels and handle messages using the Discord API.
- **Dynamic Client Script Generation**: Generates and manages the `client.py` script dynamically based on settings and modules.

## Maintenance

Maintaining the project is very easy and needs no coding! I've implemented Renovate into this project, meaning that it will scan for a newer version of an installed dependency (package.json) and will create a Pull Request automatically. This ensures that all dependencies are always up-to-date with minimal manual intervention.

### Steps for Maintenance
1. **Review Renovate PRs**: Regularly check the Pull Requests created by Renovate.
2. **Monitor CI/CD**: Ensure that the CI/CD pipelines run successfully BEFORE merging the PRs. If everything is green, then merge!
3. **Merge PRs**: After reviewing and testing, merge the PRs to keep dependencies updated.

By following these steps, you can ensure that the project remains up-to-date and secure with the latest dependency versions.

## Pipelines

### GitHub Actions

This project uses GitHub Actions for CI/CD. The workflows are defined in the [workflows](http://_vscodecontentref_/4) directory.

- **Create Issue from Code Annotations**: Automatically creates GitHub issues from code annotations.
    - Workflow file: [code-to-issue-and-branch.yml](http://_vscodecontentref_/5)
    - Triggers on: [push](http://_vscodecontentref_/6)
    - Steps:
        - Checkout repository
        - Extract annotations and create issues

- **Update Changelog**: Updates the changelog with the latest commit messages.
    - Workflow file: [update-changelog.yaml](http://_vscodecontentref_/7)
    - Triggers on: [push](http://_vscodecontentref_/8) to `code` branch
    - Steps:
        - Checkout repository
        - Get latest commit message
        - Update changelog
        - Commit and push changes
        - Trigger pages workflow

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
