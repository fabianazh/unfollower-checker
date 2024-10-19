# Unfollower Checker

Unfollower Checker is a simple Node.js script designed to help you identify Instagram accounts that you're following but who are not following you back. By comparing your Instagram followers and following lists, the script outputs a list of users along with direct links to their Instagram profiles.

## Features

-   Compares your Instagram followers list with your following list.
-   Outputs a list of users that you're following, but who are not following you back.
-   Provides clickable Instagram profile URLs for easy access.

## Prerequisites

Before using this script, you need to have Node.js installed on your machine.

-   [Download Node.js](https://nodejs.org) (version 14 or higher recommended).

You'll also need to have your Instagram data in JSON format. Instagram allows users to download their data, including their followers and following lists, through its data export tool.

### How to Download Your Instagram Data

1. Go to [Instagram Data Download](https://www.instagram.com/download/request/).
2. Request your data and wait for the email containing the download link.
3. After downloading the data, extract the `.zip` file. The files you need are:
    - `followers_1.json`
    - `following.json`

## Installation

To install and run the script:

1. Clone the repository:

    ```bash
    git clone https://github.com/fabianazh/unfollower-checker.git
    ```

2. Navigate to the project folder:

    ```bash
    cd unfollower-checker
    ```

3. Ensure you have the Instagram data files in the root directory of the project:

    ```
    unfollower-checker/
    ├── followers_1.json
    ├── following.json
    └── main.js
    ```

4. You can now run the script using Node.js:
    ```bash
    node main.js
    ```

## Usage

When the script is executed, it will output a list of Instagram users that you're following but who aren't following you back. Each user will be presented as a clickable Instagram profile URL.

Example output:
https://www.instagram.com/user1 https://www.instagram.com/user2
