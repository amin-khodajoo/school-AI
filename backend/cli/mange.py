import typer
import subprocess
import re

app = typer.Typer()

@app.command(name="init")
def init():
    """
    Initialize the project.

    This command performs the following tasks:
    1. Initializes Docker Swarm on the current machine.
    2. Creates a SQLite database for the project.

    Usage:
        python manage.py init

    """
    # it runs init.sh file
    result = subprocess.run \
    (
        "bash scripts/init.sh", shell=True, capture_output=True, text=True
    )
    
    pattern = r"(docker swarm join --token\s[^\n]+)"

    match = re.search(pattern, result)
    
    if match:
        typer.echo(match.group(1))
    else:
        typer.echo('something went wrong')
 
    typer.echo(result)

@app.command()
def start():
    typer.echo("start command")

if __name__ == "__main__":
    app()
