# Setup CD

1/ add `.github/workflows/cd.yml`

```yml
name: CD prod
# SETUP: https://github.com/appleboy/ssh-action

on:
  push:
    branches: [prod]

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest
    environment: prod

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      - name: Deploy using ssh
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.SSH_HOST }}
          username: ${{ secrets.SSH_USERNAME }}
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          port: 22
          script_stop: true
          script: |
            cd ~/VictorIA
            echo "=========== Git reset hard ==========="
            git fetch
            git reset --hard origin/prod
            git status
            echo "=========== Override docker-compose file ==========="
            cp docker-compose.prod.yml docker-compose.yml
            echo "=========== Building project ==========="
            make build
            echo "=========== Recreate containers ==========="
            make up
```

2/ Follow https://github.com/appleboy/ssh-action
3/ setup VPS to have access to github

- follow add ssh key tutorial
- if still no access problem: https://stackoverflow.com/questions/3466626/how-to-permanently-add-a-private-key-with-ssh-add-on-ubuntu (add id_key in config file)
