import typer
import subprocess
import re
import yaml

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
    # It Runs init.sh File
    result = subprocess.run \
    (
        "bash scripts/init.sh", shell=True, capture_output=True, text=True
    )
    
    # Regex Pattern For Command
    command_pattern = r"(docker swarm join --token\s[^\n]+)"
    # It Find A Command (docker swarm join --token)
    command = re.search(command_pattern, result.stdout)

    
    if command:
        print(command.group(1))
    else:
        typer.echo('something went wrong!')
 
    typer.echo(typer.style(result.stdout + "\n" , fg=typer.colors.GREEN))

    typer.echo(typer.style(command.group(1), fg=typer.colors.CYAN, bold=True))

 
    
    result_stdout = result.stdout

    # Get IP
    ip_pattern = r"(\b\d{1,3}(?:\.\d{1,3}){3}:\d{1,5}\b)"
    ip_match = re.search(ip_pattern, result_stdout)

    # Get Command
    command_pattern = r"(docker swarm join --token\s[^\n]+)"
    command_match = re.search(command_pattern, result_stdout)

    if ip_match and command_match:
        
        ip = ip_match.group(1)
        command = command_match.group(1)
        
        # Yaml Data
        data = {'config':
             {
                'ip':ip,
                'init_command':command,
             }
            }
        with open("config.yaml" ,'w') as yml:
            # Write Data In config.yaml File
            yaml.dump(data ,yml ,default_flow_style=False , allow_unicode=True)
            


        typer.echo(typer.style("Data saved to comfig.yaml successfully" , fg=typer.colors.BLUE))
        typer.echo(typer.style(f"IP: {ip}" , fg=typer.colors.BLUE))        
        typer.echo(typer.style(f"Command: {command}" , fg=typer.colors.BLUE))

    else:
        typer.echo(typer.style("Could not find IP or command in the output." , fg=typer.colors.RED))
        

    

    
@app.command()
def start():
    typer.echo("It Works!")

if __name__ == "__main__":
    app()
