# StarkHaven Chess

On chain Chess game built using Dojo engine on the Starknet network.

## Prerequisites

- Rust - install [here](https://www.rust-lang.org/tools/install)
- Cairo language server - install [here](https://book.dojoengine.org/development/setup.html#3-setup-cairo-vscode-extension)

## Step-by-Step Guide

Follow the steps below to setup and run your first Autonomous World.

### Step 1: Install `dojoup`

Start by installing `dojoup`. This cli tool is a critical component when building with Dojo. It manages dependencies and helps in building your project. Run the following command in your terminal:

```console
curl -L https://install.dojoengine.org | bash
dojoup
```

The command downloads the `dojoup` installation script and executes it.

Also install the sozo and torii packages.

### Step 2: Clone the Repository

The next step is to clone the repository to your local machine. Open your terminal and type the following command:

```console
git clone https://github.com/stark-haven/chess && cd chess
```

This command will create a local copy of the StarkHaven Chess repository and enter the project directory.

### Step 3: Build the Chess World

With `dojoup` installed, you can now build your chess world using the following command:

```console
sozo build
```

This command compiles your project and prepares it for execution.

### Step 4: Start Katana RPC

[Katana RPC](https://book.dojoengine.org/framework/katana/overview.html) is the communication layer for your Dojo World. It allows different components of your world to communicate with each other. To start Katana RPC, use the following command:

```console
katana --allow-zero-max-fee
```

### Step 5: Migrate (Deploy) the World

Finally, deploy your world using the `sozo migrate` command. This command, deploys your world to Katana!

```console
sozo migrate
```

### Step 6: Get the chess UI ready

```console
cd client
yarn
yarn build
```

### Step 7: Run the frontend locally

```console
cd client
yarn dev
```
