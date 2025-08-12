#!/bin/bash

# ---- TENANT ACCOUNT ----
TENANT_USERNAME=$(op item get $TENANT_ACCOUNT_ID --vault "$OP_VAULT" --fields username)
TENANT_PRIVATE_SSH_KEY=$(op item get $TENANT_ACCOUNT_ID --vault "$OP_VAULT" --fields "private key" --reveal | tr -d '"')
TENANT_ADDRESS=$(op item get $TENANT_ACCOUNT_ID --vault "$OP_VAULT" --fields TENANT_ADDRESS --reveal)

# Define file paths
KEY_FILE="key.pem"
INVENTORY_FILE="ansible/inventory/hosts.ini"

# Create ansible inventory directory and temporary file
mkdir -p ansible/inventory
touch $INVENTORY_FILE
echo "[nginx-server]" >> "$INVENTORY_FILE"
echo $TENANT_ADDRESS >> "$INVENTORY_FILE"

# Create PRIVATE_SSH_KEY temporary file
touch $KEY_FILE
chmod 600 "$KEY_FILE"
echo -e "$TENANT_PRIVATE_SSH_KEY" >> "$KEY_FILE"

# Create tmporary environment variables file
touch .tmpenvs
echo "export TENANT_USERNAME=$TENANT_USERNAME" >> ".tmpenvs"
