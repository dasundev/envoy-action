# Envoy Task Runner

Easily deploy your Laravel app using the automated Envoy task runner.

## Introduction
[Laravel Envoy](https://github.com/laravel/envoy) is a tool for executing common tasks you run on your remote servers. Using Blade style syntax, you can easily setup tasks for deployment.

## How it Works
While Envoy is typically used locally, converting it to a GitHub action streamlines the deployment process. This GitHub action executes your Envoy script, requiring only the story name and SSH configuration. Simply set up this action in your workflow, and it will handle the deployment for you.

## Usage

> [!IMPORTANT]
> Ensure Laravel Envoy is installed and configured in your project before proceeding.

```yaml
name: CI

on:
  push:
    branches:
      - main


jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup PHP
        uses: shivammathur/setup-php@v2
        with:
          php-version: 8.2
          tools: composer:v2
          coverage: xdebug

      - uses: LuisEnMarroquin/setup-ssh-action@v2.0.0
        with:
          ORIGIN: ${{ secrets.ENVOY_HOST }}
          SSHKEY: ${{ secrets.ENVOY_SSH }}
          PORT: ${{ secrets.ENVOY_PORT }}
          USER: ${{ secrets.ENVOY_USER }}

      - name: Run Laravel Envoy
        uses: dasundev/envoy-action@beta
        with:
          story: deploy
```

