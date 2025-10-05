FROM python:3.13.7-slim

WORKDIR /app

# Copy requirements file into the container
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

COPY . .


