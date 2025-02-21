# YetAnotherDiscordBotnet

YetAnotherDiscordBotnet is a work-in-progress project aimed at creating a botnet for managing multiple Discord bots and automating tasks across various Discord servers. This project is built using Python for the backend and Next.js for the frontend.

## Features

### Current Features
- **Discord Bot Connection**: Establishes connections with Discord servers and channels.
- **Automated Messaging**: Sends automated messages to specified channels.
- **Channel Management**: Creates and manages text channels based on unique identifiers.

### Planned Features
- **Advanced Command Handling**: Support for more complex commands and interactions.
- **User Management**: Enhanced user management and permissions.
- **Analytics and Reporting**: Collect and display usage statistics and reports.
- **Customizable Workflows**: Allow users to define custom workflows and automations.

## Adding Custom Code

To add custom code to the project, follow these steps:

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/yourusername/YetAnotherDiscordBotnet.git
    cd YetAnotherDiscordBotnet
    ```

2. **Backend (Python)**:
    - Add your custom modules or scripts in the [components](http://_vscodecontentref_/1) directory.
    - Update the [builder.py](http://_vscodecontentref_/2) to include your new modules.

3. **Frontend (Next.js)**:
    - Add your custom components in the [components](http://_vscodecontentref_/3) directory.
    - Update the necessary pages or hooks to integrate your components.

4. **Commit and Push**:
    ```sh
    git add .
    git commit -m "Added custom code"
    git push origin main
    ```

## Maintenance

To maintain the project, ensure you regularly:

- **Update Dependencies**: Keep your dependencies up to date by running:
    ```sh
    npm update
    pip install --upgrade -r python/requirements.txt
    ```

- **Run Tests**: Ensure all tests pass before pushing changes:
    ```sh
    npm test
    ```

- **Monitor Logs**: Check logs for any errors or warnings and address them promptly.

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